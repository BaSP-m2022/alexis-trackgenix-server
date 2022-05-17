import Model from '../models';

// GET ALL by Ana
const getAllTimesheets = async (req, res) => {
  try {
    const allTimesheets = await Model.TimeSheet.find({});
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
// GET BY ID by Ana
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
    const timesheetsById = await Model.TimeSheet.findById(id);
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
// GET BY ROLE by Ana
const getByRoleTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide a role',
        data: {},
        error: true,
      });
    }
    const timesheetsByRole = await Model.TimeSheet.find({ role: req.params.role });
    if (timesheetsByRole.length !== 0) {
      return res.status(200).json({
        message: `The time sheets with role ${req.params.role} are:`,
        data: timesheetsByRole,
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

// GET A TIMESHEET BY TASK by Ana
const getByTaskTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide a task',
        data: {},
        error: true,
      });
    }
    const timesheetsByTask = await Model.TimeSheet.find({ taskId: req.params.taskId });
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
      message: error,
      data: {},
      error: true,
    });
  }
};

// GET TIME SHEETS BY VALIDATED by Ana
const getByValidatedTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide a Validated ID',
        data: {},
        error: true,
      });
    }
    const timesheetsByValidated = await Model.TimeSheet.find({ validated: req.params.validated });
    if (timesheetsByValidated.length !== 0) {
      return res.status(200).json({
        message: 'Time-sheet fetched',
        data: timesheetsByValidated,
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

// GET TIME SHEETS BY PROJECT by Ana
const getByProjecTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide a Project ID',
        data: {},
        error: true,
      });
    }
    const timesheetsByProject = await Model.TimeSheet.find({ projectId: req.params.projectId });
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
// GET TIMESHEETS BY EMPLOYEE by Ana
const getByEmployeeTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide a Employee ID',
        data: {},
        error: true,
      });
    }
    const timesheetsByEmployee = await Model.TimeSheet.find({ employeeId: req.params.employeeId });
    if (timesheetsByEmployee.length !== 0) {
      return res.status(200).json({
        message: 'Time-sheet fetched',
        data: timesheetsByEmployee,
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

// GET TIMESHEETS BY PROJECT MANAGER by Ana
const getByPMTimesheets = async (req, res) => {
  try {
    if (!req.params) {
      return res.status(400).json({
        message: 'Please provide a Project manager ID',
        data: {},
        error: true,
      });
    }
    const timesheetsByPM = await
    Model.TimeSheet.find({ projectManagerId: req.params.projectManagerId });
    if (timesheetsByPM.length !== 0) {
      return res.status(200).json({
        message: 'Time-sheet fetched',
        data: timesheetsByPM,
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
// CREATE TIMESHEET by Martín
const createTimesheet = async (req, res) => {
  try {
    const timesheet = new Model.TimeSheet({
      description: req.body.description,
      date: req.body.date,
      taskId: req.body.taskId,
      validated: req.body.validated,
      employeeId: req.body.employeeId,
      projectId: req.body.projectId,
      projectManagerId: req.body.projectManagerId,
      role: req.body.role,
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
// UPDATE A TIME SHEET by Ana
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
    Model.TimeSheet.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({
      message: 'Time-sheet updated',
      data: updatedTimeSheet,
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
    const result = await Model.TimeSheet.findByIdAndDelete(req.params.id);
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
  getByRoleTimesheets,
  getByTaskTimesheets,
  getByValidatedTimesheets,
  getByProjecTimesheets,
  getByEmployeeTimesheets,
  getByPMTimesheets,
  updateTimeSheet,
  createTimesheet,
  deleteTimesheet,
};
