const jwt = require("jsonwebtoken");
require("dotenv").config()

const userAuthentication = (req, res, next) => {
  const token = req.cookie.jwt;

  console.log("7",token);


  if (token) {
    jwt.verify(token, process.env.userSecretKey, (err, decoded) => {
      if (decoded) {
        console.log(decoded);
        req.body.userID = decoded.userID;
        next();
      } else {
        res.status(403).send({ message: "User Authorization Error" });
      }
    });
  }else{
    res.status(403).send({ message: "Invalid Token" });
  }
};

module.exports = { userAuthentication };
