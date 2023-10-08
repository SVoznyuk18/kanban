
import { NextResponse, NextRequest } from "next/server"

import { connectMongoDB } from "@/LibRoot";

import { Task } from '@/ModelsRoot'
// import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('mainBoardId');
  await connectMongoDB();

  const tasks = await Task.find().where({ mainBoardId: query }).exec();

  if (!tasks) {
    return NextResponse.json({ success: false, msg: "Failed to get tasks" }, {
      status: 404
    })
  }
  return NextResponse.json({ success: true, result: tasks });
}

export async function POST(req: NextRequest) {

  const { taskName, description, status, mainBoardId, columnId, subtasks } = await req.json();
  await connectMongoDB();
  const addedTask = await Task.create({ taskName, description, status, mainBoardId, columnId })

  if (!addedTask) {
    throw Error("Failed to create task");
  }

  return NextResponse.json({ success: true, result: addedTask }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}
