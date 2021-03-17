const express = require('express');

const app = express();
port = 3333;


app.get('/', (request, response) => {
	return response.json({
		evento: "Semana Omnistack 11.0",
		aluno: "Jerónimo Matavel",
	});
});

app.listen(port, () => {
	console.log('backend started on port:', port);
});
