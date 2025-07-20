import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company } = await request.json()

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Create transporter (using Gmail as example - you can change this)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL, // Your email
        pass: process.env.SMTP_PASSWORD, // Your app password
      },
    })

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_EMAIL,
      subject: '🎉 New StaffGenie AI Waitlist Signup!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Waitlist Signup</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Welcome email to user
    const userMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: '🚀 Welcome to the StaffGenie AI Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; color: white;">
          <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="margin: 0 0 20px 0; font-size: 28px;">Welcome to StaffGenie AI! 🎉</h1>
            <p style="font-size: 18px; margin-bottom: 20px;">Hi ${name},</p>
            <p style="line-height: 1.6; margin-bottom: 20px;">
              Thank you for joining our waitlist! You're now part of an exclusive group that will get early access to AI-powered workforce management.
            </p>
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 15px 0;">What's Next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>You'll receive updates on our development progress</li>
                <li>Early access when we launch (before anyone else!)</li>
                <li>Free setup and training when you join</li>
                <li>Special pricing for early adopters</li>
              </ul>
            </div>
            <p style="margin-bottom: 0;">
              We're excited to help you transform your retail operations!<br>
              <strong>The StaffGenie AI Team</strong>
            </p>
          </div>
        </div>
      `,
    }

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ])

    return NextResponse.json(
      { message: 'Successfully joined waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    )
  }
} 