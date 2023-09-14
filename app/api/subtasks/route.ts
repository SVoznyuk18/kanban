import { NextResponse, NextRequest } from "next/server"

import { connectMongoDB } from "@/LibRoot";
import { Subtask } from '@/ModelsRoot'

export async function POST(req: Request) {
  await connectMongoDB();
  const { mainBoardId, subTasks, mainTaskId } = await req.json();

  const adedSubtasks = await Promise.all(subTasks.map(async (subtask: string) => {
    const createdSubtasks = await Subtask.create({ subtaskName: subtask, mainBoardId, mainTaskId });
    return createdSubtasks;
  }))

  if (!adedSubtasks) {
    throw Error("Failed to create subtasks");
  }

  return NextResponse.json({ success: true, result: adedSubtasks }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}