
import { NextResponse, NextRequest } from "next/server"
import mongoose from "mongoose";

import { connectMongoDB } from "@/LibRoot";

import { findExtraElement } from "@/UtilsRoot";
import { Column } from '@/ModelsRoot'
import { IBoard, IColumn } from '@/TypesRoot';

// import { NextApiRequest, NextApiResponse } from "next";


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
  const { columns, mainBoardId } = await req.json();

  const addedColumns = await Promise.all(columns.map(async (column: string) => {
    const createdColumns = await Column.create({ columnName: column, mainBoardId });
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
  const { boardId, deletedColumnsId, columns }: { boardId: string; columns: string[], deletedColumnsId: string[] } = await req.json();
  const columnsArr: [string, string][] = Object.entries(columns);

  if (deletedColumnsId) {
    const deletedColumns = await Promise.all(deletedColumnsId.map(async (columnsId) => {
      const deletedColumn = await Column.deleteOne({ _id: columnsId });
      return deletedColumn
    }))
  }

  const updatedColumns: IColumn[] = await Promise.all(columnsArr.map(async (column: [string, string]) => {
    const isValidObjectId = mongoose.isValidObjectId(column[0]);
    try {
      if (isValidObjectId) {
        const updatedColumn = await Column.findOneAndUpdate({ _id: column[0] }, { columnName: column[1] }, { new: true });
        return updatedColumn;
      } else {
        const newColumn = await Column.create({ columnName: column[1], mainBoardId: boardId });
        return newColumn;
      }
    } catch (error) {
      console.error('Помилка при оновленні або створенні стовпця:', error);
    }
  }));

  if (!updatedColumns) {
    throw Error("Failed to edit columns");
  }

  return NextResponse.json({ success: true, result: updatedColumns }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}
