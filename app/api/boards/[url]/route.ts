import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/LibRoot";

import { Board, Subtask, Task, Column } from '@/ModelsRoot';

export async function GET(req: NextRequest) {

  const query = req.nextUrl.searchParams.get('boardUrl');
  await connectMongoDB();
  const board = await Board.findOne({ url: query }).exec();

  if (!board) {
    return NextResponse.json({ success: false, msg: "Failed to get boards" }, {
      status: 404
    })
  }
  return NextResponse.json({ success: true, result: board });
}

export async function DELETE(req: NextRequest) {

  const boardId = req.nextUrl.searchParams.get('id');


  await connectMongoDB();

  const deletedBoard = await Board.deleteOne({ _id: boardId });


  if (deletedBoard?.deletedCount > 0) {
    await Column.deleteMany({ mainBoardId: boardId });
    await Task.deleteMany({ mainBoardId: boardId });
    await Subtask.deleteMany({ mainBoardId: boardId });
  }

  if (deletedBoard?.deletedCount === 0) {
    return NextResponse.json({ success: false, msg: "Failed to get boards" }, {
      status: 404
    })
  }

  return NextResponse.json({ success: true, result: boardId }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}