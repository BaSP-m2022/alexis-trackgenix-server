import express from 'express';
import timeSheetsController from '../controllers/time-sheets';
import timeSheetsValidator from '../validation/time-sheets';

const router = express.Router();

router
  .get('/', timeSheetsController.getAllTimesheets)
  .get('/project/:projectId', timeSheetsController.getByProjecTimesheets)
  // .get('/task/:taskId', timeSheetsController.getByTaskTimesheets)
  .get('/approved/:approved', timeSheetsController.getByApprovedTimesheets)
  .get('/:id', timeSheetsController.getByIdTimesheets)
  .put('/:id', timeSheetsValidator.updateValidation, timeSheetsController.updateTimeSheet)
  .post('/', timeSheetsValidator.createTimeValidation, timeSheetsController.createTimesheet)
  .delete('/:id', timeSheetsController.deleteTimesheet);

export default router;
