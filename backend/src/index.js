const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
	console.log('backend started on port:', port);
});
