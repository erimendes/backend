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
const { responseReturn } = require("../utiles/response");
const { createToken } = require("../utiles/tokenCreate");

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
        return responseReturn(res, 404, { error: "Email not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (isPasswordValid) {
        const token = await createToken({
          id: admin.id,
          role: admin.role,
        });
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        // Login bem-sucedido
        console.log("Login successful");
        responseReturn(res, 200, { token, message: "Login successful", admin });
      } else {
        console.log("Invalid password");
        return responseReturn(res, 401, { error: "Invalid password" });
      }
    } catch (error) {
      console.error("Error:", error.message);
      responseReturn(res, 500, { error: error.message });
    }
  };

  // getUser method
  getUser = async (req, res) => {
    const { id, role } = req;

    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        console.log("Seller Info");
      }
    } catch (error) {
      console.log(error.message);
    }
  }; // End getUser Method

  logout = async (req, res) => {
    try {
        res.cookie('accessToken',null,{
            expires : new Date(Date.now()),
            httpOnly: true
        })
        responseReturn(res, 200,{ message : 'logout Success' })
    } catch (error) {
        responseReturn(res, 500,{ error : error.message })
    }
 }
}

module.exports = new authControllers();
