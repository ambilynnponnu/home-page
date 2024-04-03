const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const readline = require('readline');
const fs = require('fs');
var jsonParser = bodyParser.json();
var jsonParserForFeedback = bodyParser.json({ limit: '100mb' });
module.exports = ({
    httpPort = 3000
}) => {
    const app = express();
    // Serve static files from the 'build' directory
    app.use(express.static(path.join(__dirname, 'build')));

    // Define a route for serving the index.html file
    app.get('/api/hello', (req, res) => {
        res.send({ "message": "Hello world!" })
    });

    app.post('/setCredentials', jsonParserForFeedback, (req, res) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const filePath = 'server/users.txt';
        fs.appendFile(filePath, `${req.body.username}:${req.body.password}\n`, (err) => {
            if (err) throw err;
            console.log('User credentials added to file.');
            rl.close();
            res.status(200);
            res.send({
                message: "Registerd user"
            })
        });
    })

    app.post('/loginToApp', jsonParserForFeedback, (req, res) => {
        const filePath = 'server/users.txt';
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                rl.close();
                res.status(404);
                res.send({
                    error: `Error reading file:, ${err}`
                })
                return;
            }

            // Split the file content into lines
            const lines = data.split('\n');

            // Check each line for the given username/password combination
            let credentialsMatch = false;
            lines.forEach(line => {
                const [savedUsername, savedPassword] = line.split(':');
                if (savedUsername === req.body.username && savedPassword === req.body.password) {
                    credentialsMatch = true;
                }
            });
            rl.close();
            if (credentialsMatch) {
                console.log('Username/password match.');
                res.status(200)
                res.send({
                    message: `Logged in successfully`
                })
            } else {
                console.log('Invalid username/password combination.');
                res.status(200);
                res.send({
                    message: `Invalid username/password combination.`
                })
            }

        });
    })


    // Start the server
    app.listen(httpPort, () => {
        console.log(`Server is running on port ${httpPort}`);
    });
}
