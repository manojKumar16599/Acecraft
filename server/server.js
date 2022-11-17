const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";

const expiresIn = "1h";

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

function isLoginAuthenticated({ email, password }) {
    return (
        userdb.users.findIndex(
            (user) => user.email === email && user.password === password) !== -1
    );
}

function isRegisterAuthenticated({ email }) {
    return userdb.users.findIndex((user) => user.email === email) !== -1;
}

//Register endpoint
server.post("/api/auth/register", (req, res) => {
    const { email, password } = req.body;
    let finalData;
    if (isRegisterAuthenticated({ email })) {
        const status = 401;
        const message = "User is already exist";
        res.status(status).json({ status, message });
        return;
    }

    fs.readFile("./users.json", (err, data) => {
        if (err) {
            const status = 401;
            const message = err;
            res.status(status).json({ status, message });
            return;
        }
        data = JSON.parse(data.toString());

        let last_item_id = data.users[data.users.length - 1].id;

        data.users.push({ id: last_item_id + 1, ...req.body });

        finalData = data.users;

        writeData = fs.writeFile(
            "./users.json",
            JSON.stringify(data),
            (err, result) => {
                if (err) {
                    const status = 401;
                    const message = err;
                    res.status(status).json({ status, message });
                    return;
                }
            }
        )
    })

    //Access token creation
    const access_token = createToken({ email, password });
    res.status(200).json({ access_token });
});


//Login endpoint
server.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    if (!isLoginAuthenticated({ email, password })) {
        const status = 401;
        const message = "Incorrect Email or Password";
        res.status(status).json({ status, message });
        return;
    }

    //Access token creation
    const access_token = createToken({ email, password });
    res.status(200).json({ access_token });
})

//Server startpoint
server.listen(5000, () => {
    console.log("Running the server");
})
