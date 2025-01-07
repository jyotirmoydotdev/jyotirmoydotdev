// app/api/validate-youtube-key/route.ts
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { apiKey } = await request.json();

        if (!apiKey) {
            return NextResponse.json(
                { error: 'API key is required' },
                { status: 400 }
            );
        }

        // Initialize YouTube API client
        const youtube = google.youtube({
            version: 'v3',
            auth: apiKey
        });

        try {
            // Make a simple API call to test the key
            // Using search.list with minimal quota cost
            const response = await youtube.search.list({
                part: ['snippet'],
                q: 'test',
                maxResults: 1
            });

            return NextResponse.json({
                valid: true,
                message: 'API key is valid',
                quotaUsed: 100 // Each search.list query costs 100 quota points
            });

        } catch (error: any) {
            // Handle specific YouTube API errors
            if (error.code === 403) {
                return NextResponse.json({
                    valid: false,
                    message: 'Invalid API key',
                    error: error.message
                }, { status: 403 });
            }

            if (error.code === 429) {
                return NextResponse.json({
                    valid: true,
                    message: 'API key is valid but quota exceeded',
                    error: error.message
                }, { status: 429 });
            }

            throw error; // Re-throw unexpected errors
        }

    } catch (error: any) {
        console.error('YouTube API validation error:', error);
        
        return NextResponse.json({
            valid: false,
            message: 'Error validating API key',
            error: error.message
        }, { status: 500 });
    }
}

// Optional: Add GET method to provide usage instructions
export async function GET() {
    return NextResponse.json({
        message: 'Please make a POST request with your YouTube API key',
        example: {
            method: 'POST',
            body: {
                apiKey: 'YOUR_API_KEY'
            }
        }
    });
}