import { get } from "http";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }
}

export const config = {
  matcher: ["/r/:path*/submit", "/r/create"],
};
