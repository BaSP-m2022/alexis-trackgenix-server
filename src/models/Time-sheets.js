import mongoose from 'mongoose';

const { Schema } = mongoose;
const timeSheetSchema = new Schema(
  {
    taskList: [{
      taskId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Task',
      },
    }],
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Project',
    },
    approved: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export default mongoose.model('TimeSheet', timeSheetSchema);
