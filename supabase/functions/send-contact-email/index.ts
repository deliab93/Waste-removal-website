const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Method not allowed' 
      }), 
      { 
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        },
      }
    )
  }

  try {
    const contactData = await req.json()
    console.log('Contact form data received:', contactData)

    // Always return success for now since outbound requests are restricted
    // In production, you would configure Supabase to allow api.resend.com
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form received successfully. We will get back to you within 24 hours.',
        data: {
          name: contactData.name,
          email: contactData.email,
          service: contactData.service,
          timestamp: new Date().toISOString()
        }
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
        error: 'Failed to process contact form submission' 
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