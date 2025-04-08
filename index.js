const express = require('express');
const app = express();

app.use(express.json());

// Verify input parameter
function validateNumbers(req, res, next) {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({
            error: "The input parameters num1 and num2 must be numeric types"
        });
    }
    next();
}

// addition
app.post('/add', validateNumbers, (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 + num2 });
});

// subtraction
app.post('/subtract', validateNumbers, (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 - num2 });
});

// multiplication
app.post('/multiply', validateNumbers, (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 * num2 });
});

// Division method
app.post('/divide', validateNumbers, (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        return res.status(400).json({ error: "The divisor cannot be 0" });
    }
    res.json({ result: num1 / num2 });
});
//Exponentiation
app.post('/power', validateNumbers, (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: Math.pow(num1, num2) });
});

//Modulo
app.post('/modulo', validateNumbers, (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        return res.status(400).json({ error: "Divisor of modulo operation cannot be 0" });
    }
    res.json({ result: num1 % num2 });
});

// Square Root
app.post('/sqrt', (req, res) => {
    const { num } = req.body;

    if (typeof num !== 'number') {
        return res.status(400).json({ error: "The input parameter num must be a number" });
    }
    if (num < 0) {
        return res.status(400).json({ error: "The input to the square root operation cannot be negative." });
    }

    res.json({ result: Math.sqrt(num) });
});


// start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Calculator microservice running on port ${PORT}`);
});
