// const adminModel = require("../models/adminModel");
// const bcrypt = require("bcrypt");
// const { responseReture } = require("../utiles/response");

// class AuthControllers {
//   admin_login = async (req, res) => {
//     const { email, password } = req.body;
//     console.log("Request body:", req.body);

//     try {
//       // Selecionar explicitamente o campo de senha
//       const admin = await adminModel.findOne({ email }).select("+password");
//       console.log("Admin found:", admin);

//       if (!admin) {
//         console.log("Email not found");
//         return responseReture(res, 404, { error: "Email not found" });
//       }

//       const isPasswordValid = await bcrypt.compare(password, admin.password);
//       if (!isPasswordValid) {
//         console.log("Invalid password");
//         return responseReture(res, 401, { error: "Invalid password" });
//       }

//       // Login bem-sucedido
//       console.log("Login successful");
//       responseReture(res, 200, { message: "Login successful", admin });
//     } catch (error) {
//       console.error("Error:", error.message);
//       responseReture(res, 500, { error: error.message });
//     }
//   };
// }

// module.exports = new AuthControllers();

const adminModel = require("../models/adminModel");
const bcrypt = require("bcrypt");
const { responseReture } = require("../utiles/response");

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    console.log("Request body:", req.body);

    try {
      // Selecionar explicitamente o campo de senha
      const admin = await adminModel.findOne({ email }).select("+password");
      console.log("Admin found:", admin);

      if (!admin) {
        console.log("Email not found");
        return responseReture(res, 404, { error: "Email not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        console.log("Invalid password");
        return responseReture(res, 401, { error: "Invalid password" });
      }

      // Login bem-sucedido
      console.log("Login successful");
      responseReture(res, 200, { message: "Login successful", admin });
    } catch (error) {
      console.error("Error:", error.message);
      responseReture(res, 500, { error: error.message });
    }
  };
}

module.exports = new authControllers();
