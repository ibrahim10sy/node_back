const express = require('express');
const  bodyParse = require('body-parser');
const {intitDB} = require('./models');
const userRoutes = require('./routes/user.routes');
const roleRoutes = require('./routes/role.routes');
const magasinRoutes = require('./routes/magasin.route');

const app = express();
const { swaggerDocs, swaggerUi } = require('./config/swaggerConfig');
// const cors = require("cors");

//Middleware
// app.use(bodyParse.json());

// var corsOptions = {
//     origin : "http://localhost:9000"
// };

// app.use(cors(corsOptions));

// //content-type application/json

// app.use(express.json());

// //  content-type - application/x-www-form-urlencoded

// app.use(express.urlencoded({ extended : true }));

// Middleware pour Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/" , (req,res ) => {
    res.json({ message: "Welcome to server..."});
});

//routes 
app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api', magasinRoutes);

//init database

intitDB();




const port = process.env.PORT || 9000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));