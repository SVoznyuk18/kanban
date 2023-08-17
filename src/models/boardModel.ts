import mongoose, { Schema, model, models, Document } from "mongoose";

import { ISubtask, ITask, IColumn, IBoard } from '@/TypesRoot';

interface ISchemaSubtask extends Omit<ISubtask, '_id'>, Document { };
interface ISchemaTask extends Omit<ITask, '_id'>, Document { };
interface ISchemaColumn extends Omit<IColumn, '_id'>, Document { };
interface ISchemaBoard extends Omit<IBoard, "_id">, Document { };

// schema for subtask
const subtaskSchema = new Schema<ISchemaSubtask>(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// schema for task
const taskSchema = new Schema<ISchemaTask>(
  {
    title: { type: String, required: true },
    description: String,
    status: { type: String, default: 'Todo' },
    subtasks: [subtaskSchema]
  },
  {
    timestamps: true,
  }
);

// schema for column
const columnSchema = new Schema<ISchemaColumn>(
  {
    name: { type: String, required: true },
    tasks: [taskSchema]
  },
  {
    timestamps: true,
  }
);

// schema for board
const boardSchema = new Schema<ISchemaBoard>(
  {
    name: { type: String, required: true },
    columns: [columnSchema]
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.models.Board || mongoose.model('Board', boardSchema);

export default Board;