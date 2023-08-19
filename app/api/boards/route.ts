
import { NextResponse } from "next/server"

import { connectMongoDB } from "@/LibRoot";

import { Board, Column } from '@/ModelsRoot'
// import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: Request) {
  await connectMongoDB();
  // const {searchParams} = new URL(req.url); //get params
  const boards = await Board.find();

  if (!boards) {
    return NextResponse.json({ success: false, msg: "Failed to get boards" }, {
      status: 404
    })
  }
  return NextResponse.json({ success: true, boards });
  // if (req.method === "GET") {
  //   res.status(200).json(boards);
  // } else {
  //   res.status(405).json({ message: 'Method not allowed' })
  // }
}


export async function POST(req: Request) {

  const { boardName, ...columns } = await req.json();
  const arrayColumns = Object.values(columns);
  await connectMongoDB();



  try {
    const addedBoard = await Board.create({ boardName });

    if (addedBoard?.success) {
      const addedColumns = await Promise.all(arrayColumns.map(async column => {
        const createdColumns = await Column.create({ columnName: column, mainBoardId: addedBoard?.result?._id });
        return createdColumns
      }))
    } else {
      throw Error("Failed to create board");
    }

  } catch (error) {
    throw Error("Failed to create board and columns");
  }



  return NextResponse.json({ success: true }, {
    status: 200, headers: {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

