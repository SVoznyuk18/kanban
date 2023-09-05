
import { NextResponse, NextRequest } from "next/server"

import { connectMongoDB } from "@/LibRoot";

import { Task } from '@/ModelsRoot'
// import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextRequest) {
  
  const { taskName, description, status, mainBoardId, subTasks} = await req.json();
  await connectMongoDB();
  
  const addedTask = await Task.create({ taskName, description, status, mainBoardId })

  if (!addedTask) {
    throw Error("Failed to create task");
  }

  return NextResponse.json({ success: true, result: addedTask }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

