import mongoose from 'mongoose';

const { Schema } = mongoose;
const timeSheetSchema = new Schema(
  {
    taskList: { type: Array, default: [], required: true },
    projectId: { type: String, required: true },
    approved: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export default mongoose.model('TimeSheet', timeSheetSchema);
