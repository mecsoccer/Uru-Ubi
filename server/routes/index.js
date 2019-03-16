import express from 'express';
import inputController from '../controllers/inputController';
import validateInput from '../middlewares/validation/inputValidator';

const {
  getAllInputs, getInput, postInput, updateInput, deleteInput,
} = inputController;

const router = express.Router();

// input routes
router.get('/inputs', getAllInputs);
router.get('/inputs/:id', getInput);
router.post('/inputs', validateInput, postInput);
router.put('/inputs/:id', validateInput, updateInput);
router.delete('/inputs/:id', deleteInput);

export default router;
