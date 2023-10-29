import { NextResponse, NextRequest } from "next/server"

import { connectMongoDB } from "@/LibRoot";
import { Subtask } from '@/ModelsRoot'
import { ISubtask } from '@/TypesRoot';


interface ISubtasksPayload {
  mainBoardId: string;
  mainTaskId: string;
  subtasks: ISubtask[];
}

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
  const { mainBoardId, subtasks, mainTaskId }: ISubtasksPayload = await req.json();

  const addedSubtasks = await Promise.all(subtasks.map(async (subtask) => {
    const createdSubtasks = await Subtask.create({ subtaskName: subtask?.subtaskName, mainBoardId, mainTaskId });
    return createdSubtasks;
  }))

  if (!addedSubtasks) {
    throw Error("Failed to create subtasks");
  }

  return NextResponse.json({ success: true, result: addedSubtasks }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

export async function PATCH(req: NextRequest) {
  const subtasks: ISubtask[] = await req.json();

  await connectMongoDB();

  const updatedSubtasks = await Promise.all(subtasks.map(async (subtask) => {
    const apdatedSubtask = await Subtask.findOneAndUpdate({ _id: subtask?._id }, subtask, { new: true });
    return apdatedSubtask;
    // if (apdatedSubtask) return apdatedSubtask;
    // const createdSubtasks = await Subtask.create({ subtaskName: subtask?.subtaskName, mainBoardId, mainTaskId });
    // return createdSubtasks;
  }));

  // const updatedSubtasks = await Promise.all(subtasks.map(async (subtask) => {
  //   const isValidObjectId = mongoose.isValidObjectId(subtask?._id);
  //   try {
  //     if (isValidObjectId) {
  //       const apdatedSubtask = await Subtask.findOneAndUpdate({ _id: subtask?._id }, subtask, { new: true });
  //       return apdatedSubtask;
  //     } else {
  //       const createdSubtasks = await Subtask.create({ subtaskName: subtask?.subtaskName, mainBoardId, mainTaskId });
  //       return createdSubtasks;
  //     }
  //   } catch (error) {
  //     console.error('Помилка при оновленні або створенні subtask:', error);
  //   }
  // }));


  if (!updatedSubtasks) {
    throw Error("Failed to update task");
  }

  return NextResponse.json({ success: true, result: updatedSubtasks }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}
