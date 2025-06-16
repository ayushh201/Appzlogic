import express from 'express';
import {
  createUser,
  updateUser,
  getAllUsers,
  getUserById
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.put('/:id', updateUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);

export default router;
