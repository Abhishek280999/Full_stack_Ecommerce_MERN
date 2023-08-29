const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const app = express()
app.use(cors())
app.use(express.json({ limit: "10mb" }))

const POST = process.env.POST || 8080

//mongodb connection 
console.log(process.env.MONGODB_URL)
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connect to DB"))
    .catch((err) => console.log(err))

//Schema 

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
})

//model

const userModel = mongoose.model("user", userSchema)



//api
app.get('/', (req, res) => {
    res.send("server is running")
})


//sign up api
app.post('/signup', async (req, res) => {
    console.log(req.body)
    const { email } = req.body

    try {
        const result = await userModel.findOne({ email: email });
        console.log(result);

        if (result) {
            res.send({ message: "Email ID is already registered", alert: false });
        } else {
            const data = new userModel(req.body);
            const savedData = await data.save();
            res.send({ message: "Successfully sign up", alert: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred" });
    }
    // userModel.findOne({email : email} , (err , result)=>{
    //     console.log(result)
    //     console.log(err)
    //     if(result){
    //         res.send({message : " email id is already done"})
    //     }
    //     else{
    //        const data = userModel(req.body) 
    //        const save = data.save()
    //        res.send({message : "Successfully sign up"})
    //     }
    // })

})


// api login
app.post('/login', async (req, res) => {
    console.log(req.body)
    const { email } = req.body
    try {
        const result = await userModel.findOne({ email: email });
        const dataSend = {
            _id: result._id,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
            password: result.password,
            confirmPassword: result.confirmPassword,
            image: result.image,
        }
        console.log(dataSend);

        if (result) {
            res.send({ message: "Login is Successfully", alert: true, data: dataSend });
        }
        else {
            res.send({ message: "Email is not available , Please Sign up ", alert: false });
        }
    } catch (error) {
        console.error(error);
        res.send({ message: "Email is not available , Please Sign up ", alert: false });

    }

})



// New Product section 

const schemaProduct = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String
})

const productModel = mongoose.model("product", schemaProduct)

//upload product / save  api

app.post("/uploadProduct", async (req, res) => {
    console.log(req.body)
    const data = await productModel(req.body)
    const datasave = await data.save()
    res.send({message : "Upload Successfully"})
})

//

app.get("/product", async(req,res)=>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})

//server is running
app.listen(POST, () => console.log("server is running at post : " + POST))


