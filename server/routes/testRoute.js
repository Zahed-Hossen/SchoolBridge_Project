// import { Router } from 'express';
// const router = Router();


// router.get('/', (req, res) => {
//     res.send('Backend is working! please check the frontend');
// });


// export default router;
import express from 'express';
import verifyTokenAndRole from '../middleware/VerifyTokenAndRole.js';

const router = express.Router();

// Test route for Admin role
router.get('/admin', verifyTokenAndRole(['Admin']), (req, res) => {
  res.status(200).json({ message: 'Admin access granted', user: req.user });
});

// Test route for Teacher role
router.get('/teacher', verifyTokenAndRole(['Teacher']), (req, res) => {
  res.status(200).json({ message: 'Teacher access granted', user: req.user });
});

// Test route for Student role
router.get('/student', verifyTokenAndRole(['Student']), (req, res) => {
  res.status(200).json({ message: 'Student access granted', user: req.user });
});

// Test route for Parent role
router.get('/parent', verifyTokenAndRole(['Parent']), (req, res) => {
  res.status(200).json({ message: 'Parent access granted', user: req.user });
});


router.get('/test', verifyTokenAndRole(['Admin']), (req, res) => {
  res.status(200).json({ message: 'Access granted', user: req.user });
});

export default router;

