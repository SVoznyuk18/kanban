import { NextResponse, NextRequest } from "next/server";
import { camelCase } from 'lodash';
import { connectMongoDB } from "@/LibRoot";

import { Board } from '@/ModelsRoot'

export async function GET(req: NextRequest) {
  await connectMongoDB();
  const boards = await Board.find({}, "");

  if (!boards) {
    return NextResponse.json({ success: false, msg: "Failed to get boards" }, {
      status: 404
    })
  }
  return NextResponse.json({ success: true, result: boards });
}

export async function POST(req: NextRequest) {
  const { boardName } = await req.json();
  const url = camelCase(boardName);
  await connectMongoDB();
  const addedBoard = await Board.create({ boardName, url })

  if (!addedBoard) {
    return NextResponse.json({ success: false, msg: "Failed to Create board" }, {
      status: 404
    })
  }

  return NextResponse.json({ success: true, result: addedBoard }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

export async function PUT(req: NextRequest) {
  const { boardId, boardName } = await req.json();
  const url = camelCase(boardName);
  await connectMongoDB();
  const updatedBoard = await Board.findOneAndUpdate({ _id: boardId }, { boardName, url }, { new: true });

  if (!updatedBoard) {
    return NextResponse.json({ success: false, msg: "Failed to update board" }, {
      status: 404
    })
  }

  return NextResponse.json({ success: true, result: updatedBoard }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

