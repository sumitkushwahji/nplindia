const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");


require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello npl");
  console.log("hello welcome to new page");
});

//using async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body; //we don't need to write req.body.name again and again

  if (!name || !email || !phone || !work || !password || !cpassword) {
    //checking is there any field empty
    return res.status(422).json({ error: "plz filled the field properly" });
  } //status code for client side error
  // in response display error message

  try {
    const userExist = await User.findOne({ email: email }); // verify email is there exist already user or not

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body; //we don't need to write req.body.name again and again
   console.log(email);
  if (!email || !password) {
    //checking is there any field empty
    return res.status(422).json({ error: "plz filled the field properly" });
  } //status code for client side error
  // in response display error message

  try {
    const userLogin = await User.findOne({ email: email }); // verify email is there exist already user or not
    console.log(userLogin);

    if (userLogin) {
      const ismatch = await bcrypt.compare(password, userLogin.password);

      let token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!ismatch) {
        return res.status(422).json({ error: "INvalid Credentials" });
      } else {
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(400).join({ error: "Invalid Credential" });
    }
  } catch (err) {
    console.log(err);
  }
});

//about us ka page
router.get('/about', authenticate, (req, res) => {
  console.log("hello welcome to new page from server");
  res.send(req.rootUser);
});

router.get('/getdata', authenticate, (req, res) => {
  console.log("hello welcome to new page from server");
  res.send(req.rootUser);
});

//contact us ka page
router.post('/contact', authenticate, async(req, res) => {
  try {
    const {name, email, phone, message}=req.body;
    if(!name|| !email|| !phone|| !message){
      console.log("error in contact form")
      return res.json({error: "plz filled the contact form"})
    }
    const userContact = await User.findOne({_id: req.userID});
    if(userContact){
      const userMessage = await userContact.addMessage(name,email,phone,message);
      await userContact.save();
      res.status(201).json({message:"user contact successfully"});
    }

  } catch (error) {
    console.log(error)
    
  }
});

//Logout ka page
router.get('/logout', (req, res) => {
  console.log("My Logout Page");
  res.clearCookie('jwtoken', {path : '/'})
  res.status(200).send("user logout");
});

module.exports = router;





// router.post('/register', (req,res)=>{
//     const{ name , email ,phone ,work ,password , cpassword}= req.body; //we don't need to write req.body.name again and again
//     if(!name || !email || !phone || !work || !password || !cpassword)//checking is there any field empty
//     {
//     return res.status(422).json({error: "plz filled the field properly"});
//     }//status code for client side error
//     // in response display error message

//     User.findOne({email: email})// verify email is there exist already user or not
//     .then((userExist) => {
//     if(userExist) {
//     return res.status(422).json({error:"Email Already Exists"});
//     }

//     const user = new User({name , email ,phone ,work ,password , cpassword});

//             user.save().then(()=>{
//             res.status(201).json({message :"User registered successfully"});
//             }).catch((err)=> res.status(500).json({error :"failed to register"}));

//     }).catch(err =>{console.log(err); });
//   });
