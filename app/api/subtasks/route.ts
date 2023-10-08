import { NextResponse, NextRequest } from "next/server"

import { connectMongoDB } from "@/LibRoot";
import { Subtask } from '@/ModelsRoot'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('mainBoardId');
  await connectMongoDB();

  const subtasks = await Subtask.find().where({ mainBoardId: query }).exec();

  if (!subtasks) {
    return NextResponse.json({ success: false, msg: "Failed to get subtasks" }, {
      status: 404
    })
  }
  return NextResponse.json({ success: true, result: subtasks });
}

export async function POST(req: Request) {
  await connectMongoDB();
  const { mainBoardId, subtasks, mainTaskId } = await req.json();

  const aadedSubtasks = await Promise.all(subtasks.map(async (subtask: string) => {
    const createdSubtasks = await Subtask.create({ subtaskName: subtask, mainBoardId, mainTaskId });
    return createdSubtasks;
  }))

  if (!aadedSubtasks) {
    throw Error("Failed to create subtasks");
  }

  return NextResponse.json({ success: true, result: aadedSubtasks }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}