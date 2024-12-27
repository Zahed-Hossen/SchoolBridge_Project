import jwt from 'jsonwebtoken';

const verifyTokenAndRole = (allowedRoles) => (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'Unauthorized access.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    // Check if the user's role matches one of the allowed roles
    if (!allowedRoles.includes(decoded.role)) {
      console.log('Access denied. Invalid role:', decoded.role);
      return res.status(403).json({ message: 'Access denied. Invalid role.' });
    }

    req.user = decoded; // Attach user information to the request
    next();
  } catch (error) {
    console.log('Token verification error:', error);
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

export default verifyTokenAndRole;
