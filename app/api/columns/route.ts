
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

export async function PUT(req: NextRequest) {
  const { boardId, columns } = await req.json();

  const columnsArr = Object.entries(columns);
  console.log('columnsArr', columnsArr)

  // columnsArr [
  //   [ '65114af467d63a9f70120069', 'Todo' ],
  //   [ '65114af467d63a9f7012006a', 'inProgres' ],
  //   [ '65114af467d63a9f7012006b', 'Done' ]
  // ]

  // await connectMongoDB();

  // const updatedColumns = await Promise.all(columns.map(async (column: string) => {
  //   const updatedColumn = await Column.findOneAndUpdate({ mainBoardId: boardId }, { column }, { new: true });
  //   return updatedColumn
  // }))

  // if (!updatedColumns) {
  //   return NextResponse.json({ success: false, msg: "Failed to update columns" }, {
  //     status: 404
  //   })
  // }

  return NextResponse.json({ success: true, result: updatedColumns }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}
