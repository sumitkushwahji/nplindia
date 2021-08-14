const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  console.log("sumit kushwah ji kya baat h1")
  try {
    console.log("sumit kushwah ji kya baat h1")

    const token = req.cookies.jwtoken; //collect token
    
    console.log(token);
    console.log("sumit kushwah ji kya baat h2")
    
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY); //verify token with secrect key
    
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("user not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("unauthorised : no token provided");
    console.log(err);
  }
};
module.exports = Authenticate;
