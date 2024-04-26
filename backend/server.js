// import  express, { Router } from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";

// const PORT = process.env.PORT||8000;

// const app = express(); 

// app.use(cors());

// app.use(express.json());

// import bodyParser from "body-parser";
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.urlencoded({ extended: true }));

// mongoose.connect(`mongodb+srv://ragav555666:Ragav_dealsdray@cluster0.netkbpj.mongodb.net/Login-data?retryWrites=true&w=majority&appName=Cluster0`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB Atlas');
// }).catch((err) => {
//     console.error('Error connecting to MongoDB Atlas:', err.message);
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection failed: "));
// db.once("open", function () {
// console.log("Connected to the database successfully");
// });

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// const User = mongoose.model('User', userSchema);

// app.use(bodyParser.json());

// //Post Login Creditional
// app.post("/login",(request, response) => {
//     const { username, password } = request.body;
        
//         const user = User.findOne({ username, password });
//         if(user.username === request.body.username){
//             if(user.password === request.body.password){
//                 console.log(user);

//                 const payload = {
//                     "id":user._id
//                 }
//                 jwt.sign(payload, 'shhh', {expriresIn: '1h '},(err,token)=>{
//                     response.json({
//                         token:token,
//                     }
//                 )
//                 });
//             }
//         }
//         else if (!user) {
//             return response.status(400).send("Invalid username or password");
//         }
//         response.status(200).send("Login successful");
//         // response.status(200).json({ token });
//     } 
// );

// const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization;
//     if (!token) {
//         return res.status(401).send("Unauthorized: No token provided");
//     }

//     jwt.verify(token, 'shhh', (err, decoded) => {
//         if (err) {
//             return res.status(401).send("Unauthorized: Invalid token");
//         }
//         req.userId = decoded.id;
//         next();
//     });
// };

// //Get all User Login creditionals
// app.get("/users", async (request, response) => {
//   const users = await User.find({});
//   try {
//     response.send(users);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// const employeeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     mobileNo: {
//         type: String,
//         required: true
//     },
//     designation: {
//         type: String,
//         required: true
//     },
//     gender: {
//         type: String,
//         enum: ['Male', 'Female', 'Other'],
//         required: true
//     },
//     course: {
//         type: String,
//         required: true
//     },
//     imageUpload: {
//         type: String, 
//         required: true
//     }
// });

// const Employee = mongoose.model('Employee', employeeSchema);

// //Post Single Employee Id
// app.post('/addemployees', async (req, res) => {
//     try {
//         const employee = new Employee(req.body);
//         await employee.save();
//         res.status(200).send("Employee Data Created Sucessfully");
//         res.status(201).send(employee);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// //Get all Employee Id
// app.get('/getemployees' ,async(req, res) => {
//     try {
//         const employees = await Employee.find();
//         res.send(employees);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// //Get by ID
// app.get(`/getemployees/:id`, async (req, res,id) => {
//     id = req.params.id;

//     try {
//         const employee = await Employee.findById(id);
//         if (!employee) {
//             return res.status(404).send({ message: 'Employee not found' });
//         }
//         res.send(employee);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });
// // Update by ID
// app.put('/getemployees/:id', async (req, res) => {
//     const id = req.params.id;

//     try {
//         const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
//         if (!employee) {
//             return res.status(404).send({ message: 'Employee not found' });
//         }
//         res.send(employee);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// //Delete by Id
// app.delete('/getemployees/:id', async (req, res) => {
//     const id = req.params.id;

//     try {
//         const employee = await Employee.findByIdAndDelete(id);
//         if (!employee) {
//             return res.status(404).send({ message: 'Employee not found' });
//         }
//         res.send({ message: 'Employee deleted successfully' });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// app.use (Router);
// app.listen(PORT, () => {
// console.log(`Server started on port ${PORT}`);
// });

import  express, { Router } from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const PORT = process.env.PORT||8000;

const app = express(); 

app.use(cors());

app.use(express.json());

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb+srv://ragav555666:Ragav_dealsdray@cluster0.netkbpj.mongodb.net/Login-data?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed: "));
db.once("open", function () {
console.log("Connected to the database successfully");
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

//Post Login Creditional
app.post("/login", async (request, response) => {
    const { username, password } = request.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            const payload = {
                "id":user._id
            }
            jwt.sign(payload, 'shhh', {expriresIn: '1h '},(err,token)=>{
                response.json({
                    token:response.send({token}),
                }
            )
            });
            console.log(response.data.token);
            response.status(200).send("Login successful");
        }
       else{
        return response.status(400).send("Invalid username or password");
       }
    } catch (error) {
        response.status(500).send(error);
    }
});
//Get all User Login creditionals
app.get("/users", async (request, response) => {
  const users = await User.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    course: {
        type: String,
        required: true
    },
    imageUpload: {
        type: String, 
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

//Post Single Employee Id
app.post('/addemployees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(200).send("Employee Data Created Sucessfully");
        res.status(201).send(employee);
    } catch (err) {
        res.status(400).send(err);
    }
});

//Get all Employee Id
app.get('/getemployees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Get by ID
app.get(`/getemployees/:id`, async (req, res,id) => {
    id = req.params.id;

    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).send({ message: 'Employee not found' });
        }
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
});
// Update by ID
app.put('/getemployees/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        if (!employee) {
            return res.status(404).send({ message: 'Employee not found' });
        }
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Delete by Id
app.delete('/getemployees/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).send({ message: 'Employee not found' });
        }
        res.send({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.use (Router);
app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
});




