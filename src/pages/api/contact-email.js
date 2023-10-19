// index.js
export const prerender = false;

const apikey = process.env.CONTACT_FORM;

export async function post({request}) {

    const formData = await request.json();
    const { formType, ...otherData } = formData;
  
    const msg = {
      to: otherData.email,
      cc: 'contact@plebnet.dev',
      from: 'contact@plebnet.dev',
    };
    try {
      return new Response(JSON.stringify(request.body), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      console.error('SendGrid error:', error.response.body);
      return new Response(JSON.stringify({ error: 'Error sending email' }), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  }