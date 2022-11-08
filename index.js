const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('<h2 style="text-align: center;">Fair Online Delivery Service Review is Running!</h2>');
})



app.listen(port, () => {
    console.log(`Fair Online Delivery Service Review is listening on port: ${port}`);
})