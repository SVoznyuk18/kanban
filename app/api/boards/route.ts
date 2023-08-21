
import { NextResponse } from "next/server"

import { connectMongoDB } from "@/LibRoot";

import { Board, Column } from '@/ModelsRoot'
// import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: Request) {
  await connectMongoDB();
  const boards = await Board.find({}, "");

  if (!boards) {
    return NextResponse.json({ success: false, msg: "Failed to get boards" }, {
      status: 404
    })
  }
  return NextResponse.json({ success: true, boards });
}

export async function POST(req: Request) {

  const { boardName } = await req.json();
  await connectMongoDB();
  const addedBoard = await Board.create({ boardName })

  if (!addedBoard) {
    throw Error("Failed to create partner");
  }

  return NextResponse.json({ success: true, result: addedBoard }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

