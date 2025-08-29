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
    const contactData = await req.json()

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
      
      <h3>Service Information</h3>
      <p><strong>Service Needed:</strong> ${contactData.service || 'Not specified'}</p>
      
      <h3>Message</h3>
      <p>${contactData.message}</p>
      
      <hr>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `

    const emailData = {
      from: 'EcoWaste Pro <noreply@ecowastepro.com>',
      to: ['deliabm@engineer.com'],
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: emailContent,
    }

    if (!RESEND_API_KEY) {
      console.log('Contact form data received:', contactData)
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Contact form received successfully (email service not configured)' 
        }),
        { 
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders
          },
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
    console.log('Contact email sent successfully:', result)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form sent successfully!',
        emailId: result.id 
      }),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
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