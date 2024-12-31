import { NextResponse } from "next/server";
import { isSubscribed as checkIsSubscribed, subscribe } from '@/drizzle/db';

// export async function GET(request:Request) {
//     const user = await getSubscribers()
//     return NextResponse.json({
//         data : user
//     })
// }

const ALLOWED_ORIGINS = [
    "https://jyotirmoy.dev",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
];

export async function POST(request: Request) {
    const origin = request.headers.get("origin");

    if (!origin && process.env.NODE_ENV === "development") {
        console.log("local request")
    } else if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
        return NextResponse.json(
          { message: "Origin not allowed" },
          { status: 403 }
        );
    }

    const { email } = await (request.json())
    const isSubscribed = await checkIsSubscribed({ query: email });

    if (isSubscribed) {
        return NextResponse.json({
            message: "Already Subscribed",
            success: false
        })
    }

    try {
        await subscribe(email)
        return NextResponse.json({
            message: "Your are subscribed",
            success: true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Something went wrong",
            success: false
        })
    }
}