import express from 'express';
import inputController from '../controllers/inputController';
import validateInput from '../middlewares/validation/inputValidator';

const { inputPostValidator, inputUpdateValidator } = validateInput;

const {
  getAllInputs, getInput, postInput, updateInput, editInput, deleteInput,
} = inputController;

const router = express.Router();

// input routes
router.get('/inputs', getAllInputs);
router.get('/inputs/:id', getInput);
router.post('/inputs/create', inputPostValidator, postInput);
router.put('/inputs/update/:id', inputUpdateValidator, updateInput);
router.put('/inputs/edit/:id', inputPostValidator, editInput);
router.delete('/inputs/delete/:id', deleteInput);

export default router;
