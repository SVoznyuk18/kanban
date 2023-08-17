import { Schema, Document, models, model } from "mongoose";

import { IBoard } from '@/TypesRoot';
import { columnSchema } from '@/ModelsRoot'

interface ISchemaBoard extends Omit<IBoard, "_id">, Document { };

export const boardSchema = new Schema<ISchemaBoard>(
  {
    name: { type: String, required: true },
    columns: [columnSchema]
  },
  {
    timestamps: true,
  }
);

export const Board = models.Board || model('Board', boardSchema);
