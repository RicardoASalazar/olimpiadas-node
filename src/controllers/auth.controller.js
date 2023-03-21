const AuthServices = require("../services/auth.service");
const transporter = require("../utils/mailer");

const register = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        from: "axel.111yo@gmail.com",
        to: result.email,
        subject: "Email confirmation",
        html: "<h1>Bienvenido a la app</h1> <p>Tienes que confirmar el email</p> <p>Solo haz clic en el siguiente <a href='#'' target='new_blank'> enlace </a></p>",
      });
    } else {
      res.status(400).json({ message: "something wrog" });
    }
  } catch (error) {
    next(error);
  }
};
/*

const sendEmail = async () => {
  await transporter.sendMail({
    from: "axel.111yo@gmail.com",
    to: "",
    subject: "Prueba de nodemailer",
    text: "Hola nodemailer",
    html: "<h1>Hola  nodemailer</h1>",
  });
};

sendEmail()


*/

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email or password prooviided",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email or password prooviided",
      });
    }

    const result = await AuthServices.login({ email, password });

    if (result.isValid) {
      const { usu_nombre, usu_correo, usu_usuario, usu_cve_usuario } =
        result.user;
      const userData = { usu_nombre, usu_correo, usu_usuario, usu_cve_usuario  };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else if (result.error === "password") {
      next({ message: "invalid password" });
    } else {
      res.status(400).json("user not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
