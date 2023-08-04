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
        console.log("Connected to mongoDB");

        } catch (error) {
            throw error
        }

};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

// Manejo de desconexión al detener o reiniciar el servidor
process.on("SIGINT", async () => {
    try {
      await mongoose.connection.close();
      console.log("Disconnected from mongoDB");
      process.exit(0);
    } catch (error) {
      console.error("Error disconnecting from mongoDB", error);
      process.exit(1);
    }
  });

//middlewares
const corsOptions = {
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
};

// Usar el middleware cors
app.use(cors(corsOptions));
/* app.use(cors({
  origin: "https://qarola-booking-app.netlify.app"
})); */
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});


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

const port = process.env.PORT || 8800;
app.listen(port, () => {
  connect();
  console.log("Connected to backend.");
});