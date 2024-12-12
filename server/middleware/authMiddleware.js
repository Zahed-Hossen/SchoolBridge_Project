import jwt from "jsonwebtoken";
const { verify } = jwt;

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalid" });
  }
};

const authorize = (role) => (req, res, next) => {
  if (req.user.role !== role)
    return res.status(403).json({ message: "Forbidden" });
  next();
};

export default { protect, authorize };
