const express = require('express')
const apiRouter = require('./routes')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()

const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))
app.use(apiRouter)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server listening on port: ${port}`));