import mongoose, { Schema, Document } from "mongoose";

import { ITask } from '@/TypesRoot';
import { subtaskSchema } from '@/ModelsRoot'

interface ISchemaTask extends Omit<ITask, '_id'>, Document { };

// schema for task
export const taskSchema = new Schema<ISchemaTask>(
  {
    taskName: { type: String, required: true },
    description: String,
    status: { type: String },
    mainColumnId: { type: String, required: true },
    mainBoardId: { type: String, required: true }
    // subtasks: [subtaskSchema]
  },
  {
    timestamps: true,
  }
);


export const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);