
import { NextResponse } from "next/server"

import { connectMongoDB } from "@/LibRoot";

import { Column } from '@/ModelsRoot'
// import { NextApiRequest, NextApiResponse } from "next";


// export async function GET(req: Request) {
//   await connectMongoDB();
//   const boards = await Board.find({}, "");

//   if (!boards) {
//     return NextResponse.json({ success: false, msg: "Failed to get boards" }, {
//       status: 404
//     })
//   }
//   return NextResponse.json({ success: true, boards });
// }

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

