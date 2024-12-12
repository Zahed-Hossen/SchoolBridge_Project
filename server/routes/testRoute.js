/**
 * @module baseRouter
 * @description Base router module for handling root endpoint requests
 */

import { Router } from 'express';
const router = Router();

/**
 * @route GET /
 * @description Health check endpoint to verify backend server status
 * @returns {string} Message confirming backend server is operational
 * 
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * 
 * @example
 * // Example Response
 * "Backend is working!"
 */
router.get('/', (req, res) => {
    res.send('Backend is working!');
});

export default router;
/*paths:
  /:
    get:
      summary: Health Check
      description: Endpoint to verify if the backend server is operational
      responses:
        '200':
          description: Success
          content:
            text/plain:
              schema:
                type: string
                example: "Backend is working!"
*/                