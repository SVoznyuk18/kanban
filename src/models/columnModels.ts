import mongoose, { Schema, Document } from "mongoose";

import { IColumn } from '@/TypesRoot';
import { taskSchema } from '@/ModelsRoot'

interface ISchemaColumn extends Omit<IColumn, '_id'>, Document { };

export const columnSchema = new Schema<ISchemaColumn>(
  {
    columnName: { type: String, required: true },
    tasks: [taskSchema]
  },
  {
    timestamps: true,
  }
);


export const Column = mongoose.models.Column || mongoose.model('Column', columnSchema);