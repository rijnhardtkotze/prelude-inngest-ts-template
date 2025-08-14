
import { NextResponse } from "next/server";
import { inngest } from "../../../inngest/client"; // Import our client

// Opt out of caching; every request should send a new event
export const dynamic = "force-dynamic";

// Create a simple async Next.js API route handler
export async function GET() {
  // Send your event payload to Inngest
  await inngest.send({
    name: "test/hello.world",
    data: {
      email: "testUser@example.com",
    },
  });

  return NextResponse.json({ message: "Event sent!" });
}
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  return NextResponse.json({
    message: 'Data received successfully',
    data: body,
    timestamp: new Date().toISOString()
  })
}
