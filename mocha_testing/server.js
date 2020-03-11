const express = require("express");
const db = require("./db");
const app = require("./app");
const PORT = process.env.PORT || 3000;
db.syncAndSeed().then(() => {
	app.listen(PORT, () => {
		console.log(`listening on port ${PORT}`);
	});
});
