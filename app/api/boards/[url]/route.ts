import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/LibRoot";

import { Board } from '@/ModelsRoot';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('url');
  await connectMongoDB();

  const board = await Board.findOne({ url: query }).exec();

  if (!board) {
    return NextResponse.json({ success: false, msg: "Failed to get boards" }, {
      status: 404
    })
  }
  return NextResponse.json({ success: true, result: board });
}