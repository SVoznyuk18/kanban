
import { NextResponse, NextRequest } from "next/server"

import { connectMongoDB } from "@/LibRoot";
import { Task } from '@/ModelsRoot'
import { ITask } from '@/TypesRoot';

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
  const { taskName, description, status, mainBoardId, columnId } = await req.json();

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


export async function PATCH(req: NextRequest) {
  const task = await req.json();

  await connectMongoDB();

  const updatedTask = await Task.findOneAndUpdate({ _id: task?._id }, task, { new: true });

  if (!updatedTask) {
    throw Error("Failed to update task");
  }

  return NextResponse.json({ success: true, result: updatedTask }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

export async function DELETE(req: NextRequest) {
  const task: ITask = await req.json();

  await connectMongoDB();

  const deletedTask = await Task.findOneAndDelete({ _id: task?._id });

  if (Object.keys(deletedTask).length === 0) {
    return NextResponse.json({ success: false, msg: "Failed to delete subtasks" }, {
      status: 404
    })
  }

  return NextResponse.json({ success: true, result: deletedTask }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}