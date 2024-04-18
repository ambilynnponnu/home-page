const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const readline = require("readline");
const fs = require("fs");
var jsonParser = bodyParser.json();
var jsonParserForFeedback = bodyParser.json({ limit: "100mb" });
module.exports = ({ httpPort = 3000 }) => {
  const app = express();
  // Serve static files from the 'build' directory
  app.use(express.static(path.join(__dirname, "build")));

  // Define a route for serving the index.html file
  app.get("/api/hello", (req, res) => {
    res.send({ message: "Hello world!" });
  });

  app.post("/setCredentials", jsonParserForFeedback, (req, res) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const filePath = "server/users.txt";
    fs.appendFile(
      filePath,
      `${req.body.username}:${req.body.password}\n`,
      (err) => {
        if (err) throw err;
        console.log("User credentials added to file.");
        rl.close();
        res.status(200);
        res.send({
          message: "Registerd user",
        });
      }
    );
  });

  app.post("/loginToApp", jsonParserForFeedback, (req, res) => {
    const filePath = "server/users.txt";
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        rl.close();
        res.status(404);
        res.send({
          error: `Error reading file:, ${err}`,
        });
        return;
      }

      // Split the file content into lines
      const lines = data.split("\n");

      // Check each line for the given username/password combination
      let credentialsMatch = false;
      lines.forEach((line) => {
        const [savedUsername, savedPassword] = line.split(":");
        if (
          savedUsername === req.body.username &&
          savedPassword === req.body.password
        ) {
          credentialsMatch = true;
        }
      });
      rl.close();
      if (credentialsMatch) {
        console.log("Username/password match.");
        res.status(200);
        res.send({
          message: `Logged in successfully`,
        });
      } else {
        console.log("Invalid username/password combination.");
        res.status(200);
        res.send({
          message: `Invalid username/password combination.`,
        });
      }
    });
  });

  app.get("/products", (req, res) => {
    // Define your list of vegetables with details
    const vegetables = [
      {
        name: "Cabbage",
        image: "https://www.freepngimg.com/thumb/categories/2970.png",
        quantity: "One Unit",
        id: 2,
        price: 30,
        description:
          "Rich in vitamin C, supporting immune health and collagen production,Excellent source of vitamin, promoting bone health and blood clotting, Low in calories and high in fiber, aiding in digestion and weight management.",
        category: "vegetable",
      },
      {
        name: "Capsicum",
        image:
          "https://www.nicepng.com/png/detail/52-525615_green-bell-pepper-png-green-capsicum-png.png",
        quantity: "One Unit",
        id: 7,
        price: 50,
        category: "vegetable",
      },
      {
        name: "Banana",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fbanana&psig=AOvVaw2xYxk1z-I6CMP9UYTNligW&ust=1713527629518000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDyp4Lay4UDFQAAAAAdAAAAABAE",
        quantity: "One",
        id: 10,
        price: 40,
        category: "Fruit",
      },
      {
        name: "Mango",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flipkart.com%2Fexotica-glenn-mango-plant%2Fp%2Fitmfec6a29a5e54e&psig=AOvVaw3pN2bkIrnB1bEApRcd13dy&ust=1713527691454000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIibw5_ay4UDFQAAAAAdAAAAABAE",
        quantity: "One Unit",
        id: 9,
        price: 70,
        category: "Fruit",
      },
      {
        name: "Orange",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Forange-fruit.html&psig=AOvVaw3ogP5Qqndz90I7iXFA5fQW&ust=1713527676188000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODj25Xay4UDFQAAAAAdAAAAABAE",
        quantity: "One Unit",
        id: 8,
        price: 30,
        category: "Fruit",
      },
    ];

    // Send the list of vegetables as a JSON response
    res.json(vegetables);
  });
  // Start the server
  app.listen(httpPort, () => {
    console.log(`Server is running on port ${httpPort}`);
  });
};
