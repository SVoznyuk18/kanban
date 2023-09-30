
import { NextResponse, NextRequest } from "next/server"

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
  const { boardId, columns } = await req.json();

  const updatedColumns: IColumn[] = [];
  const columnsArr: [string, string][] = Object.entries(columns);
  const columnsFromDb: IColumn[] = await Column.find().where({ mainBoardId: boardId }).exec();
  const columnsFromDbId = columnsFromDb.map(column => column?._id.toString());

  const deletedColumnsId = findExtraElement(columnsFromDbId, Object.keys(columns));

  console.log('deletedColumnsId', deletedColumnsId);

  if (deletedColumnsId) {
    const deletedColumns = await Promise.all(deletedColumnsId.map(async (columnsId) => {
      const deletedColumn = await Column.deleteOne({ _id: columnsId });
      return deletedColumn
    }))
  }

  // const deletedColumns = columnsFromDb.map(columnfromDb => columnsArr.filter((column) => column[0] === columnfromDb?._id.toString()));
  // console.log('deletedColumns', deletedColumns);
  // console.log('columnsFromDb еуіе', columnsFromDb[0]._id.toString());

  // {
  //   _id: new ObjectId("65114af467d63a9f70120069"),
  //   columnName: 'Todo',
  //   mainBoardId: '65114aec67d63a9f70120066',
  //   createdAt: 2023-09-25T08:55:16.525Z,
  //   updatedAt: 2023-09-29T18:33:37.530Z,
  //   __v: 0
  // },

  // columnsArr [
  //   [ '65114af467d63a9f70120069', 'Todo' ],
  //   [ '65114af467d63a9f7012006a', 'inProgres' ],
  //   [ '65114af467d63a9f7012006b', 'Done' ]
  // ]

  // const deletedColumns = 

  // const updatedColumns = await await Promise.all()

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

  // return NextResponse.json({ success: true, result: updatedColumns }, {
  //   status: 200, headers: {
  //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //   }
  // })
}
