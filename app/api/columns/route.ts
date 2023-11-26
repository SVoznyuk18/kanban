import { NextResponse, NextRequest } from "next/server"
import mongoose from "mongoose";

import { connectMongoDB } from "@/LibRoot";
import { Column, Task } from '@/ModelsRoot'
import { IColumn, ITask, IEditColumnsType, IAddNewColumnsType } from '@/TypesRoot';

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
  const { columns, mainBoardId }: IAddNewColumnsType = await req.json();
  console.log('columns', columns)

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

export async function PUT(req: NextRequest) {
  const { boardId, deletedColumns, columns }: Required<IEditColumnsType> = await req.json();

  if (Array.isArray(deletedColumns) && deletedColumns.length > 0) {
    try {
      await Promise.all(deletedColumns.map(async (column) => {
        await Column.deleteOne({ _id: column?._id });
        await Task.deleteOne({ columnId: column });
      }))
    } catch (error) {
      console.error('Помилка при видаленні стовпців', error);
    }
  }

  const updatedColumns: IColumn[] = await Promise.all(columns.map(async (column) => {
    const isValidObjectId = mongoose.isValidObjectId(column?._id);
    try {
      if (isValidObjectId) {
        const updatedColumn = await Column.findOneAndUpdate({ _id: column?._id }, { columnName: column?.columnName }, { new: true });
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
