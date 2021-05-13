const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;

const userRouter = require('./routes/user');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/health', (req, res) => {
	res.status(200).send('Health Ok');
});

app.use('/', userRouter);

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server is running on port ${port}`);
});
