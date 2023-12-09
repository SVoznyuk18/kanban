import mongoose, { Schema, Document } from "mongoose";

import { ISubtask } from '@/TypesRoot';

interface ISchemaSubtask extends Omit<ISubtask, '_id'>, Document { };

export const subtaskSchema = new Schema<ISchemaSubtask>(
  {
    subtaskName: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    mainTaskId: { type: String, required: true },
    mainBoardId: { type: String, required: true },
    mainColumnId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Subtask = mongoose.models.Subtask || mongoose.model('Subtask', subtaskSchema);