
import { NextResponse } from "next/server"
import { connectMongoDB } from "@/LibRoot";

import { Board } from '@/ModelsRoot'
// import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('url');
  await connectMongoDB();

  const board = await Board.findOne({ url: query }).exec();

  console.log('board', board);

  // await connectMongoDB();
  // const boards = await Board.find({}, "");

  // if (!boards) {
  //   return NextResponse.json({ success: false, msg: "Failed to get boards" }, {
  //     status: 404
  //   })
  // }
  // return NextResponse.json({ success: true, result: boards });
}