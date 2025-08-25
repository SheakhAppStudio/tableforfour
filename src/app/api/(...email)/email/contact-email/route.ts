import { transporter } from "@/lib/nodeMailerTransport";
import { NextRequest } from "next/server";


interface ContactFormData {
  name: string;
  email: string;
  restaurant: string;
  message: string;
}



export async function POST(request : NextRequest) {

  try {
    const contactData: ContactFormData = await request.json();
    const mailOptions = {
      from: `"Table For Four" <${process.env.EMAIL_FROM || "tableforfourhelpline@gmail.com"}>`,
      to: 'tableforfourhelpline@gmail.com',
      subject: `Thank You for Contacting Table For Four`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px; border-bottom: 1px solid #f0f0f0; padding-bottom: 20px;">
            <img src="https://www.tableforfour.co/logo.png" alt="Table For Four Logo" style="max-width: 180px; height: auto;">
            <h1 style="color: #2c3e50; font-size: 24px; margin-top: 20px;">Thank You for Reaching Out</h1>
            <p style="color: #7f8c8d; margin-top: 10px;">We've received your message and will get back to you soon</p>
          </div>
          
          <!-- Main Content -->
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 6px; margin-bottom: 25px;">
            <h2 style="color: #2c3e50; font-size: 18px; margin-top: 0;">Hello ${contactData.name},</h2>
            <p style="color: #34495e; line-height: 1.6;">Thank you for contacting Table For Four about ${contactData.restaurant || 'your restaurant'}. We appreciate your interest in our booking API solution.</p>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #e8f4fd; border-left: 4px solid #3498db; border-radius: 4px;">
              <p style="margin: 0 0 10px 0; color: #2c3e50; font-weight: bold;">Your Message Details:</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #7f8c8d; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #34495e; font-weight: 500;">${contactData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7f8c8d;">Email:</td>
                  <td style="padding: 8px 0; color: #34495e; font-weight: 500;">${contactData.email}</td>
                </tr>
                ${contactData.restaurant ? `
                <tr>
                  <td style="padding: 8px 0; color: #7f8c8d;">Restaurant:</td>
                  <td style="padding: 8px 0; color: #34495e; font-weight: 500;">${contactData.restaurant}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; color: #7f8c8d; vertical-align: top;">Message:</td>
                  <td style="padding: 8px 0; color: #34495e; font-weight: 500;">${contactData.message}</td>
                </tr>
              </table>
            </div>
            
            <p style="color: #34495e; line-height: 1.6;">Our team typically responds within 24-48 hours. In the meantime, you might find answers to common questions in our <a href="https://www.tableforfour.co/faq" style="color: #3498db; text-decoration: none;">FAQ section</a>.</p>
          </div>
          
          <!-- Next Steps -->
          <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; margin-bottom: 25px;">
            <h3 style="color: #2c3e50; font-size: 16px; margin-top: 0; text-align: center;">What to Expect Next</h3>
            <div style="display: flex; justify-content: space-between; margin-top: 20px; flex-wrap: wrap;">
              <div style="width: 48%; margin-bottom: 15px; text-align: center;">
                <div style="background-color: #f0f7ff; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: #3498db; font-size: 24px; font-weight: bold;">1</span>
                </div>
                <p style="color: #34495e; margin: 0; font-size: 14px;">Initial response from our team</p>
              </div>
              <div style="width: 48%; margin-bottom: 15px; text-align: center;">
                <div style="background-color: #f0f7ff; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: #3498db; font-size: 24px; font-weight: bold;">2</span>
                </div>
                <p style="color: #34495e; margin: 0; font-size: 14px;">Personalized consultation</p>
              </div>
              <div style="width: 48%; text-align: center;">
                <div style="background-color: #f0f7ff; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: #3498db; font-size: 24px; font-weight: bold;">3</span>
                </div>
                <p style="color: #34495e; margin: 0; font-size: 14px;">Onboarding assistance</p>
              </div>
              <div style="width: 48%; text-align: center;">
                <div style="background-color: #f0f7ff; border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: #3498db; font-size: 24px; font-weight: bold;">4</span>
                </div>
                <p style="color: #34495e; margin: 0; font-size: 14px;">API integration support</p>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="margin-top: 30px; text-align: center; color: #7f8c8d; font-size: 12px; border-top: 1px solid #f0f0f0; padding-top: 20px;">
            <p style="margin: 0 0 10px 0;">© ${new Date().getFullYear()} Table For Four. All rights reserved.</p>
            <p style="margin: 0 0 10px 0;">
              <a href="https://www.tableforfour.co" style="color: #7f8c8d; text-decoration: none; margin: 0 10px;">Website</a> | 
              <a href="https://www.tableforfour.co/privacy" style="color: #7f8c8d; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
              <a href="https://www.tableforfour.co/terms" style="color: #7f8c8d; text-decoration: none; margin: 0 10px;">Terms of Service</a>
            </p>
            <p style="margin: 0;">Need immediate assistance? Email us at <a href="mailto:digitalsheakh@gmail.com" style="color: #3498db; text-decoration: none;">digitalsheakh@gmail.com</a></p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    console.log('Contact confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending contact confirmation email:', error);
    // Don't fail the whole request if email fails
  }
}