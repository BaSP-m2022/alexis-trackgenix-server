import mongoose from 'mongoose';

const { Schema } = mongoose;

const timeSheetSchema = new Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Project',
    },
    Task: [
      {
        taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
      },
    ],

    approved: { type: Boolean, required: true },
  },
  { timestamps: true },
);
export default mongoose.model('TimeSheet', timeSheetSchema);
