import { NextResponse } from 'next/server';

// You can still write regular routes with Next REST Framework.
export const GET = () => {
  return NextResponse.json('Server error', {
    status: 500,
    headers: { 'Content-Type': 'text/plain' }
  });
};
