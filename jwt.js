const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const jwtAuthMiddleware = (req, res, next) => {
  // first check request headers has authorization or not
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json({ error: "Token Not Found" });

  // extract the jwt token from req headers
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ err: "Unauthorized" });

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach the user information to the req object
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Invalid token" });
  }
};

// function to generate the token
const generateToken = (userData) => {
  // Generate a new JWT token using user data
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "24hr" });
};

module.exports = {
  jwtAuthMiddleware,
  generateToken,
};
