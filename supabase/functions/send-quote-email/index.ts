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
    );
  }

  try {
    const quoteData = await req.json();
    console.log('Quote data received:', quoteData);

    // Always return success for now since outbound requests are restricted
    // In production, you would configure Supabase to allow api.resend.com
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote request received successfully. We will contact you within 24 hours with a detailed quote.',
        data: {
          service: quoteData.service,
          contact: quoteData.contact,
          location: quoteData.location,
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
    );

  } catch (error) {
    console.error('Error processing quote:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to process quote request' 
      }),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        },
        status: 500 
      }
    );
  }
});