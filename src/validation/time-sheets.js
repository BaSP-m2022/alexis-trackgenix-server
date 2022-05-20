import Joi from 'joi';

// CREATE VALIDATION
const createTimeValidation = (req, res, next) => {
  const timesheetValidation = Joi.object({
    taskList: Joi.array().required(),
    projectId: Joi.object(),
    approved: Joi.boolean().required(),
  });

  const validatorTimesheets = timesheetValidation.validate(req.body);

  if (validatorTimesheets.error) {
    return res.status(400).json({
      msg: 'There was an error during the validation of the request',
      error: validatorTimesheets.error.details[0].message,
    });
  }
  return next();
};
// UPDATE TIMESHEET VALIDATION
const updateValidation = (req, res, next) => {
  const timeSheetSchema = Joi.object({
    taskList: Joi.array(),
    projectId: Joi.object(),
    approved: Joi.boolean(),
  });
  const validation = timeSheetSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: 'Please check your fields',
      error: validation.error,
    });
  }
  return next();
};

export default {
  createTimeValidation,
  updateValidation,
};
