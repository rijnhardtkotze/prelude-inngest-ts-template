import { NextResponse } from 'next/server';

// Opt out of caching; every request should send a new event
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    message: 'Data received successfully',
    data: body,
    timestamp: new Date().toISOString(),
  });
}
