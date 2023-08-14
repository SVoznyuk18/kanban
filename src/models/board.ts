import { Schema, model, models, Document } from "mongoose";

interface ISubtask extends Document {
  title: string,
  isCompleted: boolean,
  timestamps: boolean
}

// schema for subtask
const subtaskSchema = new Schema<ISubtask>(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

interface ITask extends Document {
  title: string,
  description: string,
  status: string,
  subtasks: Array<ISubtask>
}

// schema for task
const taskSchema = new Schema<ITask>(
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

interface IColumn extends Document {
  name: string,
  tasks: Array<ITask>
}

// schema for column
const columnSchema = new Schema<IColumn>(
  {
    name: { type: String, required: true },
    tasks: [taskSchema]
  },
  {
    timestamps: true,
  }
);

interface IBoard extends Document {
  name: string,
  columns: Array<IColumn>,
}

// schema for board
const boardSchema = new Schema<IBoard>(
  {
    name: { type: String, required: true },
    columns: [columnSchema]
  },
  {
    timestamps: true,
  }
);

const Board = models.Board || model('Board', boardSchema);

export default Board;