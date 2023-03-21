const {usuario} = require('../models')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


class AuthServices {
  static async register(user) {
    try {
      const result = await usuario.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const user = await usuario.findOne({ where: { usu_correo:email } });
      if (user) {
        const isValid = password === user.usu_password;
        return isValid ? { isValid, user } : { isValid, error: "password" };
      }
      return { isValid: false, error: "emmail" };
    } catch (error) {
      throw error;
    }
  }
  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "10m",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
