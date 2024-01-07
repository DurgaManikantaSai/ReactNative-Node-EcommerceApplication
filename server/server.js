import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

//route imports
import testRoutes from './routes/testRoutes.js'

dotenv.config();

//database connection
connectDB();

const app = express();


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())


app.use("/api/v1/", testRoutes);

app.get('/',(req,res) => {
    return res.status(200).send("<h1>Welcome To Node Server </h1>");
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${process.env.PORT}`.bgMagenta.white);
});