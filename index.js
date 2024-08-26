const express = require('express');
const app = express();

const checkCamelCase = "camel case";
const CheckPascalCase = "pascal case";

app.get('/', (req, res) => {
    console.log("checking logs not allowed rule");
    console.log("checking new logs");
    res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
