import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'
import dalleRoutes from './routes/dalleRouts.js'
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: false }))

app.get("/", async (req, res) => {
  res.send("Hello from Dall-E");
})

app.use('/api/v1/dalle', dalleRoutes)

const startServer = async () => {
  app.listen(8080, () => console.log('server started'))
}
startServer()