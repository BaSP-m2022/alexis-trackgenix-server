import models from '../models';

// GET ALL
const getAllTimesheets = async (req, res) => {
  try {
    const allTimesheets = await models.TimeSheet.find({});
    return res.status(200).json({
      message: 'Time-Sheets',
      data: allTimesheets,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: {},
      error: true,
    });
  }
};

// GET BY ID
const getByIdTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide an ID',
        data: {},
        error: true,
      });
    }
    const { id } = req.params;
    const timesheetsById = await models.TimeSheet.findById(id);
    if (timesheetsById) {
      return res.status(200).json({
        message: 'The time sheets with this criteria are:',
        data: timesheetsById,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Time Sheet not found',
      data: {},
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: {},
      error: true,
    });
  }
};

// GET A TIMESHEET BY TASK
const getByTaskTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide a task',
        data: {},
        error: true,
      });
    }
    const timesheetsByTask = await models.TimeSheet.find({ taskId: req.params.taskId });
    if (timesheetsByTask.length !== 0) {
      return res.status(200).json({
        message: `The time sheets with task ID ${req.params.taskId} are:`,
        data: timesheetsByTask,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Time Sheet not found',
      data: {},
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      data: {},
      error: true,
    });
  }
};

// GET TIME SHEETS BY VALIDATED
const getByApprovedTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide an approved ID',
        data: {},
        error: true,
      });
    }
    const timesheetsByApproved = await models.TimeSheet.find({ approved: req.params.approved });
    if (timesheetsByApproved.length !== 0) {
      return res.status(200).json({
        message: 'Time-sheet fetched',
        data: timesheetsByApproved,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Time Sheet not found',
      data: {},
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: {},
      error: true,
    });
  }
};

// GET TIME SHEETS BY PROJECT
const getByProjecTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide a Project ID',
        data: {},
        error: true,
      });
    }
    const timesheetsByProject = await models.TimeSheet.find({ projectId: req.params.projectId });
    if (timesheetsByProject.length !== 0) {
      return res.status(200).json({
        message: 'Time-sheet fetched',
        data: timesheetsByProject,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Time Sheet not found',
      data: {},
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: {},
      error: true,
    });
  }
};

// CREATE TIMESHEET
const createTimesheet = async (req, res) => {
  try {
    const timesheet = new models.TimeSheet({
      taskList: [{}],
      projectId: req.body.projectId,
      approved: req.body.approved,
    });
    const result = await timesheet.save();
    return res.status(201).json(result);
  } catch (error) {
    return res.json({
      msg: 'An error has ocurred',
      data: error,
      error: true,
    });
  }
};

// UPDATE A TIMESHEET
const updateTimeSheet = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        message: 'Please provide an ID',
        data: {},
        error: true,
      });
    }
    const updatedTimeSheet = await
    models.TimeSheet.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({
      message: 'Time-sheet updated',
      data: updatedTimeSheet,
      error: false,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
      data: {},
      error: true,
    });
  }
};

// DELETE TIMSHEET by Martín Pueblas
const deleteTimesheet = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        msg: 'An error has ocurred',
        data: undefined,
        error: true,
      });
    }
    const result = await models.TimeSheet.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({
        msg: `There is no timesheet with this Id ${req.params.id}`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      msg: `The ${req.params.id} timesheet has been susccesfully deleted`,
      error: false,
    });
  } catch (error) {
    return res.json({
      msg: 'An error has ocurred',
      data: undefined,
      error: true,
    });
  }
};

export default {
  getAllTimesheets,
  getByIdTimesheets,
  getByTaskTimesheets,
  getByApprovedTimesheets,
  getByProjecTimesheets,
  updateTimeSheet,
  createTimesheet,
  deleteTimesheet,
};
