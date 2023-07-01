const dotenv = require("dotenv");
const express = require ("express");
const mongoose = require ("mongoose");
const authRoute = require("./routes/auth.js");
const usersRoute = require ("./routes/users.js");
const hotelsRoute = require ("./routes/hotels.js");
const roomsRoute = require ("./routes/rooms.js");
const cookieParser = require ("cookie-parser");
const cors = require ("cors");


const app = express();
dotenv.config();


const connect = async () => {
    try {
       await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB",  /*{
            keepAlive: true,
            useUnifiedTopology: true,
            useNewUrlParser: true 
        }*/);

        } catch (error) {
            throw error
           /*  if (error) {
                console.log("DB: ERROR !!!")
            } else {
                console.log("Correct connection.")
            } */
        }

};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
})
