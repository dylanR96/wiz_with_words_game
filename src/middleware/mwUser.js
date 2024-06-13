const joi = require("joi");
const userModel = require("../models/modelUser.js");

const addUserSchema = joi.object({
  username: joi.string().min(3).max(15).alphanum().required(),
  password: joi.string().min(6).max(20).required(),
  email: joi.string().email().required(),
});

const addUserMiddleware = async (req, res, next) => {
  // Joi validation
  const { error } = addUserSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { username, email } = req.body;

  // Check for user with username or email from body
  const existingUser = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    const errors = {};
    if (existingUser.username === username) {
      errors.username = "Username is already taken";
    }
    if (existingUser.email === email) {
      errors.email = "Email is already taken";
    }
    return res.status(400).json({ errors });
  }

  next();
};
module.exports = addUserMiddleware;
