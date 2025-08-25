import { transporter } from "@/lib/nodeMailerTransport";
import { encryptRestaurantObjectId } from "@/lib/restaurantUniqueApi";
import { ObjectId, Document } from "mongodb";

interface Restaurant extends Document {
  _id: ObjectId;
  ownerName: string;
  restaurantName: string;
  currentBookingMethod: string;
  email: string;
  phone: string;
  address: string;
  isActive: 'active' | 'inactive' | 'pending' | 'reject';
  createdAt: Date;
  updatedAt: Date;
  restaurantId: string;
  role: string;
  closingTime: string;
  logo: string;
  openingTime: string;
  totalSeats: string;
}

export async function sendCongratulationsEmail(restaurant: Restaurant) {
  try {
    const restaurantApi = `https://www.tableforfour.co/bookings/restaurants/${restaurant.restaurantName}?bookingRef=${restaurant.restaurantId}`;

    const mailOptions = {
      from: `"Table For Four" <${process.env.EMAIL_FROM || "digitalsheakh@gmail.com"}>`,
      to: restaurant.email,
      subject: `Welcome to Table For Four - ${restaurant.restaurantName} is Now Live!`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Table For Four</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background-color: #f8fafc;
                    color: #334155;
                    line-height: 1.6;
                }
                
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #ffffff;
                }
                
                .header {
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                    padding: 30px 20px;
                    text-align: center;
                    color: white;
                }
                
                .logo {
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #ffffff;
                }
                
                .tagline {
                    font-size: 16px;
                    opacity: 0.9;
                    font-weight: 300;
                }
                
                .content {
                    padding: 40px 30px;
                }
                
                .section {
                    margin-bottom: 30px;
                }
                
                .title {
                    font-size: 22px;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 15px;
                }
                
                .subtitle {
                    font-size: 18px;
                    font-weight: 500;
                    color: #334155;
                    margin-bottom: 10px;
                }
                
                .text {
                    font-size: 16px;
                    color: #64748b;
                    margin-bottom: 15px;
                }
                
                .card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 25px;
                    margin: 20px 0;
                }
                
                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    margin: 20px 0;
                }
                
                .info-item {
                    padding: 12px;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                }
                
                .info-label {
                    font-size: 12px;
                    color: #64748b;
                    text-transform: uppercase;
                    font-weight: 500;
                    margin-bottom: 5px;
                }
                
                .info-value {
                    font-size: 14px;
                    font-weight: 600;
                    color: #1e293b;
                }
                
                .btn-primary {
                    display: inline-block;
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                    color: white;
                    text-decoration: none;
                    padding: 16px 32px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 16px;
                    text-align: center;
                    margin: 20px 0;
                    transition: all 0.3s ease;
                }
                
                .btn-primary:hover {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
                }
                
                .footer {
                    background: #f1f5f9;
                    padding: 30px;
                    text-align: center;
                    border-top: 1px solid #e2e8f0;
                }
                
                .footer-text {
                    font-size: 14px;
                    color: #64748b;
                }
                
                .footer-link {
                    color: #3b82f6;
                    text-decoration: none;
                }
                
                .footer-link:hover {
                    text-decoration: underline;
                }
                
                .restaurant-logo {
                    width: 120px;
                    height: 120px;
                    border-radius: 12px;
                    object-fit: cover;
                    margin: 0 auto 20px;
                    display: block;
                    border: 3px solid #e2e8f0;
                }
                
                .status-badge {
                    display: inline-block;
                    padding: 6px 12px;
                    background: #10b981;
                    color: white;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                
                .steps {
                    display: grid;
                    gap: 15px;
                    margin: 20px 0;
                }
                
                .step {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                }
                
                .step-number {
                    background: #3b82f6;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 14px;
                    flex-shrink: 0;
                }
                
                .step-content {
                    flex: 1;
                }
                
                @media (max-width: 600px) {
                    .info-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .content {
                        padding: 30px 20px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">Table For Four</div>
                    <div class="tagline">Professional Restaurant Booking Management</div>
                </div>
                
                <div class="content">
                    <div class="section" style="text-align: center;">
                        <h1 class="title">Congratulations, ${restaurant.ownerName}!</h1>
                        <p class="text">Your restaurant <strong>${restaurant.restaurantName}</strong> has been successfully registered and is now active on our platform.</p>
                        
                        ${restaurant.logo ? `<img src="${restaurant.logo}" alt="${restaurant.restaurantName}" class="restaurant-logo">` : ''}
                        
                        <span class="status-badge">Active</span>
                    </div>
                    
                    <div class="card">
                        <h2 class="subtitle">Restaurant Details</h2>
                        
                        <div class="info-grid">
                            <div class="info-item">
                                <div class="info-label">Restaurant ID</div>
                                <div class="info-value">${restaurant.restaurantId}</div>
                            </div>
                            
                            <div class="info-item">
                                <div class="info-label">Owner Name</div>
                                <div class="info-value">${restaurant.ownerName}</div>
                            </div>
                            
                            <div class="info-item">
                                <div class="info-label">Email</div>
                                <div class="info-value">${restaurant.email}</div>
                            </div>
                            
                            <div class="info-item">
                                <div class="info-label">Phone</div>
                                <div class="info-value">${restaurant.phone}</div>
                            </div>
                            
                            <div class="info-item">
                                <div class="info-label">Booking Method</div>
                                <div class="info-value">${restaurant.currentBookingMethod}</div>
                            </div>
                            
                            <div class="info-item">
                                <div class="info-label">Total Seats</div>
                                <div class="info-value">${restaurant.totalSeats}</div>
                            </div>
                            
                            <div class="info-item">
                                <div class="info-label">Opening Hours</div>
                                <div class="info-value">${restaurant.openingTime} - ${restaurant.closingTime}</div>
                            </div>
                            
                            <div class="info-item">
                                <div class="info-label">Registration Date</div>
                                <div class="info-value">${new Date(restaurant.createdAt).toLocaleDateString()}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section">
                        <h2 class="subtitle">Get Started</h2>
                        <p class="text">Access your restaurant dashboard to manage bookings, update information, and integrate our API with your systems.</p>
                        
                        <div style="text-align: center;">
                            <a href="${restaurantApi}" class="btn-primary">Access Your Dashboard</a>
                        </div>
                        
                        <p class="text" style="text-align: center; font-size: 14px;">
                            Or copy this link: <br>
                            <span style="color: #3b82f6; word-break: break-all;">${restaurantApi}</span>
                        </p>
                    </div>
                    
                    <div class="section">
                        <h2 class="subtitle">Next Steps</h2>
                        
                        <div class="steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <strong>Set up your account</strong>
                                    <p>Complete your profile and configure your booking settings</p>
                                </div>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <strong>Integrate our API</strong>
                                    <p>Connect our booking system with your website and other platforms</p>
                                </div>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <strong>Start accepting bookings</strong>
                                    <p>Manage reservations efficiently through your dashboard</p>
                                </div>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <strong>Monitor performance</strong>
                                    <p>Track bookings, customer feedback, and business analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer">
                    <p class="footer-text">
                        © ${new Date().getFullYear()} Table For Four. All rights reserved.<br>
                        Need assistance? Contact our support team at 
                        <a href="mailto:digitalsheakh@gmail.com" class="footer-link">digitalsheakh@gmail.com</a>
                    </p>
                    <p class="footer-text">
                        This is an automated message. Please do not reply to this email.
                    </p>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Error sending welcome email:', error);
    // Don't fail the whole request if email fails
  }
}