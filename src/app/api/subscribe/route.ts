// TODO: Check if email is from disposable domain
// TODO: Add ratelimiter

import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod"

const requiredEnvVars = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    AUDIENCE_ID: process.env.AUDIENCE_ID,
};

Object.entries(requiredEnvVars).forEach(([key, value]) => {
    if (!value) throw new Error(`Missing ${key} environment variable`);
});

const resend = new Resend(requiredEnvVars.RESEND_API_KEY);

const ALLOWED_ORIGINS = [
    "https://jyotirmoy.dev",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
];

const EmailSchema = z.object({
    email: z.string()
        .email("Invalid email format")
        .min(5, "Email too short")
        .max(254, "Email too long")
        .toLowerCase()
        .trim()
});

function validateOrigin(request: Request): boolean {
    const origin = request.headers.get("origin");
    return !origin || ALLOWED_ORIGINS.includes(origin);
}

export async function POST(request: Request) {
    try {
        if (!validateOrigin(request)) {
            return NextResponse.json(
                { message: "Forbidden" },
                { status: 403 }
            )
        }
        const body = await request.json()
        const validationResult = EmailSchema.safeParse(body)
        if (!validationResult.success) {
            return NextResponse.json(
                { message: "Invalid input", errors: validationResult.error.errors },
                { status: 400 }
            )
        }
        const { email } = validationResult.data

        const subscribe = await resend.contacts.create({
            email,
            audienceId: requiredEnvVars.AUDIENCE_ID as string
        })
        if (subscribe.error) {
            console.log('Subscription error:', subscribe.error)
            return NextResponse.json(
                { message: "Falied to subscribe", success: false },
                { status: 500 }
            )
        }
        const welcomeMail = await resend.emails.send({
            from: 'Jyotirmoy <newsletter@jyotirmoy.dev>',
            to: [email],
            subject: "Welcome to Jyotirmoy.dev Newsletter!",
            react: EmailTemplate({ email: email }) as React.ReactElement,
            headers: {
                "List-Unsubscribe": `<mailto:unsubscribe@jyotirmoy.dev?subject=unsubscribe&email=${email}>`,
            }
        });
        if (welcomeMail.error) {
            console.error('Welcome email error:', welcomeMail.error);
            return NextResponse.json(
              { message: "Subscribed but welcome email failed", success: true },
              { status: 207 }
            );
          }
          return NextResponse.json(
            { message: "Successfully subscribed", success: true },
            { status: 200 }
          );
      
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
          { message: "Internal server error", success: false },
          { status: 500 }
        );
    }
}