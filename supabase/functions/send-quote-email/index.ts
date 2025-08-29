import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders,
    })
  }

  try {
    const quoteData = await req.json()

    const emailContent = `
      <h2>New Quote Request</h2>
      
      <h3>Service Details</h3>
      <p><strong>Service:</strong> ${quoteData.service}</p>
      <p><strong>Quantity:</strong> ${quoteData.quantity} ${quoteData.unit}</p>
      
      <h3>Location</h3>
      <p><strong>Address:</strong> ${quoteData.location.address}</p>
      <p><strong>City:</strong> ${quoteData.location.city}</p>
      <p><strong>State:</strong> ${quoteData.location.state}</p>
      <p><strong>ZIP Code:</strong> ${quoteData.location.zipCode}</p>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${quoteData.contact.name}</p>
      <p><strong>Email:</strong> ${quoteData.contact.email}</p>
      <p><strong>Phone:</strong> ${quoteData.contact.phone}</p>
      
      <h3>Schedule</h3>
      <p><strong>Date:</strong> ${quoteData.schedule.date ? new Date(quoteData.schedule.date).toLocaleDateString() : 'Not specified'}</p>
      <p><strong>Time:</strong> ${quoteData.schedule.time || 'Not specified'}</p>
      <p><strong>Frequency:</strong> ${quoteData.schedule.frequency || 'Not specified'}</p>
      
      ${quoteData.additionalInfo ? `<h3>Additional Information</h3><p>${quoteData.additionalInfo}</p>` : ''}
    `

    const emailData = {
      from: 'EcoWaste Pro <noreply@ecowastepro.com>',
      to: ['deliab93@mail.com'],
      subject: `New Quote Request from ${quoteData.contact.name}`,
      html: emailContent,
    }

    if (!RESEND_API_KEY) {
      console.log('Quote data received:', quoteData)
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Quote received successfully (email service not configured)' 
        }),
        { 
          headers: { 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      throw new Error(`Failed to send email: ${error}`)
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote sent successfully!',
        emailId: result.id 
      }),
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        },
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error processing quote:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        },
        status: 500 
      }
    )
  }
})