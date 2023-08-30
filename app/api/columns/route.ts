
import { NextResponse, NextRequest } from "next/server"

import { connectMongoDB } from "@/LibRoot";

import { Column } from '@/ModelsRoot'
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

