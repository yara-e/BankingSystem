const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
// mongoose.connect("mongodb://127.0.0.1:27017/BankingSystem", () => {
//     console.log("db connected");
// });
// const connectDB = async () => {
//     try {

//         mongoose.connect("mongodb://127.0.0.1:27017/BankingSystem")
//         console.log('DB connected')
//     } catch (error) {
//         console.log(error)

//     }
// }
// connectDB();
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json())
app.use(require('./router/users'))
app.use(require('./router/trans'))
app.listen(3001, () => {
    console.log("Server run");
})
