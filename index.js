// Start your es6 scripts here

import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("This is a local graphql server for testing purposes!");
});

app.listen(3000, () => {
	console.log("Server up and running on port 3000!");
});
