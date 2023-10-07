
import { NextResponse, NextRequest } from "next/server"
import mongoose from "mongoose";

import { connectMongoDB } from "@/LibRoot";

import { findExtraElement } from "@/UtilsRoot";
import { Column, Task } from '@/ModelsRoot'
import { IBoard, IColumn, ITask } from '@/TypesRoot';

// import { NextApiRequest, NextApiResponse } from "next";

interface IAddNewColumns {
  mainBoardId: string,
  columns: { columnName: string, columnId: string }[]
}

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('mainBoardId');
  await connectMongoDB();

  const columns = await Column.find().where({ mainBoardId: query }).exec();

  if (!columns) {
    return NextResponse.json({ success: false, msg: "Failed to get columns" }, {
      status: 404
    })
  }
  return NextResponse.json({ success: true, result: columns });
}

export async function POST(req: Request) {
  await connectMongoDB();
  const { columns, mainBoardId }: IAddNewColumns = await req.json();

  const addedColumns = await Promise.all(columns.map(async (column) => {
    const createdColumns = await Column.create({ columnName: column?.columnName, mainBoardId });
    return createdColumns
  }))

  if (!addedColumns) {
    throw Error("Failed to create partner");
  }

  return NextResponse.json({ success: true, result: addedColumns }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

interface IColumnsComfigure {
  boardId: string;
  columns: { columnName: string, columnId?: string }[];
  deletedColumns: { columnName: string, columnId?: string }[];
}

export async function PUT(req: NextRequest) {
  const { boardId, deletedColumns, columns }: IColumnsComfigure = await req.json();

  if (Array.isArray(deletedColumns) && deletedColumns.length > 0) {
    try {
      await Promise.all(deletedColumns.map(async (column) => {
        await Column.deleteOne({ _id: column?.columnId });
        await Task.deleteOne({ columnId: column });
      }))
    } catch (error) {
      console.error('Помилка при видаленні стовпців', error);
    }
  }

  const updatedColumns: IColumn[] = await Promise.all(columns.map(async (column) => {
    const isValidObjectId = mongoose.isValidObjectId(column?.columnId);
    try {
      if (isValidObjectId) {
        const updatedColumn = await Column.findOneAndUpdate({ _id: column?.columnId }, { columnName: column?.columnName }, { new: true });
        return updatedColumn;
      } else {
        const newColumn = await Column.create({ columnName: column?.columnName, mainBoardId: boardId });
        return newColumn;
      }
    } catch (error) {
      console.error('Помилка при оновленні або створенні стовпця:', error);
    }
  }));

  if (updatedColumns) {
    const updateTasksPromises = updatedColumns.map(async (updatedColumn) => {
      const tasks: ITask[] = await Task.find({ columnId: updatedColumn?._id });
      return Promise.all(tasks.map(async (task) => {
        await Task.findOneAndUpdate({ _id: task._id }, { status: updatedColumn?.columnName }, { new: true });
      }));
    });

    await Promise.all(updateTasksPromises);
  }

  if (!updatedColumns) {
    throw Error("Failed to edit columns");
  }

  return NextResponse.json({ success: true, result: updatedColumns }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}
