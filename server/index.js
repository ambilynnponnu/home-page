const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const jsonParserForEmail = bodyParser.json();
const readline = require("readline");
const fs = require("fs");
var jsonParser = bodyParser.json();
var jsonParserForFeedback = bodyParser.json({ limit: "100mb" });
// Define your list of products with details
const products = [
  {
    name: "Cabbage",
    image: "https://www.freepngimg.com/thumb/categories/2970.png",
    quantity: "One Unit",
    id: 2,
    price: 30,
    description:
      "Rich in vitamin C, supporting immune health and collagen production,Excellent source of vitamin, promoting bone health and blood clotting, Low in calories and high in fiber, aiding in digestion and weight management.",
    category: "vegetable",
    description:
      "Cabbage is a versatile vegetable prized for its crisp texture and mildly sweet to peppery flavor. It comes in various types, including green, red, savoy, and Napa. Rich in vitamins C and K, as well as dietary fiber, cabbage can be enjoyed raw in salads or coleslaws, cooked in stir-fries or soups, and fermented into sauerkraut. It's a low-calorie food with potential health benefits, such as aiding digestion and supporting immune function.",
    Disclaimer:
      "Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary Please read the label, directions and warnings carefully before use",
  },
  {
    name: "Green Capsicum 500g",
    image:
      "https://www.nicepng.com/png/detail/52-525615_green-bell-pepper-png-green-capsicum-png.png",
    quantity: "One Unit",
    id: 7,
    price: "50.00( ₹22.50/250 g)",
    category: "vegetable",
    description:
      "Green Capsicums come in different shapes and sizes to make it easy for you to add vibrant colour and sweet taste wherever you want to. Green Capsicums add a sweet taste and delicious flavour to your favourite dishes. You can cut them into wedges to eat fresh, dice them to mix into dishes, or leave them halved so you can stuff them and bake them. They can be roasted and peeled, stuffed and baked, added to soups and stews, or pickled like pimentos. So, go ahead, buy Green Capsicum 500 g online now!",
    Disclaimer:
      "Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary Please read the label, directions and warnings carefully before use",
  },
  {
    name: "potato",
    image:
      "https://www.shutterstock.com/image-photo/top-down-view-many-organic-freshly-2360416693",
    quantity: "One Unit",
    id: 11,
    price: "₹44.00( ₹11.00/250 g)",
    category: "vegetable",
    description:
      "Potato is a root vegetable and the most versatile of all. It is widely used across Indian kitchens paired with numerous other vegetables for preparation of several delicacies. Be it Brinjal, Cauliflower, Tomato, Onion or be it Soyabean Chunks or the Spinach clan- Potatoes goes with all for delicious cuisines. Buy Potato per kg online now.",
    Disclaimer:
      "Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary Please read the label, directions and warnings carefully before use",
  },
  {
    name: "Banana",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fbanana&psig=AOvVaw2xYxk1z-I6CMP9UYTNligW&ust=1713527629518000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDyp4Lay4UDFQAAAAAdAAAAABAE",
    quantity: "One",
    id: 10,
    price: 40,
    category: "Fruit",
    description:
      "Bananas are elongated, curved fruits with a vibrant yellow peel when ripe, though some varieties feature green, red, or purple skins. They belong to the Musaceae family and are botanically classified as berries. Their creamy flesh is rich in natural sugars, particularly fructose, which gives them their sweet taste. Bananas are a good source of potassium, vitamin C, and vitamin B6, and they also contain fiber and antioxidants. They are commonly eaten raw as a quick and nutritious snack, sliced onto cereal or yogurt, blended into smoothies, or used in baking and cooking. This tropical fruit is popular worldwide and is known for its convenient packaging, making it a go-to choice for on-the-go energy and nutrition.",
    Disclaimer:
      "Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary Please read the label, directions and warnings carefully before use",
  },
  {
    name: "Mango",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flipkart.com%2Fexotica-glenn-mango-plant%2Fp%2Fitmfec6a29a5e54e&psig=AOvVaw3pN2bkIrnB1bEApRcd13dy&ust=1713527691454000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIibw5_ay4UDFQAAAAAdAAAAABAE",
    quantity: "One Unit",
    id: 9,
    price: 70,
    category: "Fruit",
    description:
      "Mangoes are tropical stone fruits known for their sweet, juicy flesh and distinctive aroma. Belonging to the Anacardiaceae family, mangoes come in various shapes, sizes, and colors, ranging from green to yellow, orange, or red when ripe. Their smooth skin covers succulent, fibrous pulp surrounding a large, flat seed. Mangoes are rich in vitamins A, C, and E, as well as dietary fiber and antioxidants like beta-carotene. They are enjoyed fresh, sliced, or diced in salads, smoothies, or desserts, and are a popular ingredient in salsas and chutneys. With origins in South Asia, mangoes are now cultivated in tropical and subtropical regions worldwide, delighting taste buds with their luscious flavor and nutritional benefits.",
    Disclaimer:
      "Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary Please read the label, directions and warnings carefully before use",
  },
  {
    name: "Orange",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Forange-fruit.html&psig=AOvVaw3ogP5Qqndz90I7iXFA5fQW&ust=1713527676188000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODj25Xay4UDFQAAAAAdAAAAABAE",
    quantity: "One Unit",
    id: 8,
    price: 30,
    category: "Fruit",
    description:
      "Oranges are citrus fruits renowned for their bright color, tangy-sweet flavor, and refreshing juiciness. With a thick, dimpled peel that ranges from vibrant orange to yellowish-orange, oranges encase juicy segments filled with pulp and seeds. They are packed with vitamin C, providing a boost to the immune system, and also contain dietary fiber and antioxidants. Oranges are commonly enjoyed fresh, squeezed into juice, or used in various culinary applications, from salads and desserts to savory dishes. Hailing from subtropical regions, oranges are widely cultivated globally and cherished for their vibrant taste and nutritional benefits.",
    Disclaimer:
      "Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary Please read the label, directions and warnings carefully before use",
  },
];
module.exports = ({ httpPort = 3000 }) => {
  const app = express();
  // Serve static files from the 'build' directory
  app.use(express.static(path.join(__dirname, "build")));

  // Define a route for serving the index.html file
  app.get("/api/hello", (req, res) => {
    res.send({ message: "Hello world!" });
  });

  app.post("/sendEmail", jsonParserForEmail, (req, res) => {
    // Extract email details from request body
    const { to, subject, text } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: " ambily2499@gmail.com",
        pass: "fzez neyn godg empd",
      },
    });

    // Define email options
    const mailOptions = {
      // send mail with defined transport object
      from: {
        name: "Fruit Mart",
        address: "ambily2499@gmail.com",
      },
      to: "ambily2499@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error occurred while sending email:", error);
        res.status(500).send({
          message: "Failed to send email",
        });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send({
          message: "Email sent successfully",
        });
      }
    });
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
          error: `Error reading file: ${err}`,
        });
        return;
      }

      // Split the file content into lines
      const lines = data.split("\n");

      // Check each line for the given username/password combination
      let credentialsMatch = false;
      lines.forEach((line) => {
        const [savedUsername, savedPassword, savedEmail] = line.split(":");
        if (
          savedUsername === req.body.username &&
          savedPassword === req.body.password &&
          savedEmail === req.body.email &&
          req.body.password === req.body.confirmPassword
        ) {
          credentialsMatch = true;
        }
      });
      rl.close();
      if (credentialsMatch) {
        console.log("Username/password/email match.");
        res.status(200);
        res.send({
          message: `Logged in successfully`,
        });
      } else {
        console.log(
          "Invalid username/password/email combination or passwords don't match."
        );
        res.status(200);
        res.send({
          message: `Invalid username/password/email combination or passwords don't match.`,
        });
      }
    });
  });

  app.get("/products", (req, res) => {
    const { category } = req.query;
    console.log("category => ", category);

    const result = products.filter((prod) => {
      if (category && prod.category === category) {
        return true;
      } else if (!category) {
        return true;
      } else return false;
    });

    // Send the list of products as a JSON response
    res.json(result);
  });

  app.get("/productDetails", (req, res) => {
    const { productId } = req.query;

    const result = [];
    products.forEach((prod) => {
      if (productId && prod?.id == productId) {
        result.push(prod);
      }
    });

    // Send the list of products as a JSON response
    res.json(result);
  });

  // Route to add a product to the cart
  app.post("/add-to-cart", (req, res) => {
    const { productId, quantity } = req.body;

    // Validate input
    if (!productId || !quantity) {
      return res
        .status(400)
        .json({ error: "Both productId and quantity are required." });
    }

    // Check if the product already exists in the cart
    fs.readFile("cart.txt", "utf8", (err, data) => {
      if (err && err.code !== "ENOENT") {
        console.error("Error reading cart.txt:", err);
        return res.status(500).json({ error: "Internal server error." });
      }
      let cartItems = [];
      if (data) {
        // If cart.txt exists, parse its content
        cartItems = data.split("\n").map((item) => {
          const [existingProductId, existingQuantity] = item.split(",");
          return {
            productId: existingProductId,
            quantity: parseInt(existingQuantity),
          };
        });
      }

      // Check if the product is already in the cart
      const existingItemIndex = cartItems.findIndex(
        (item) => item.productId === productId
      );
      if (existingItemIndex !== -1) {
        // Update quantity if the product is already in the cart
        cartItems[existingItemIndex].quantity += parseInt(quantity);
      } else {
        // Add new item to the cart
        cartItems.push({ productId, quantity: parseInt(quantity) });
      }

      // Write updated cart data back to cart.txt
      const updatedCartData = cartItems
        .map((item) => `${item.productId},${item.quantity}`)
        .join("\n");
      fs.writeFile("cart.txt", updatedCartData, (err) => {
        if (err) {
          console.error("Error writing to cart.txt:", err);
          return res.status(500).json({ error: "Internal server error." });
        }
        res
          .status(200)
          .json({ message: "Product added to cart successfully." });
      });
    });
  });

  // Route to remove a product from the cart
  app.post("/remove-from-cart", (req, res) => {
    const { productId } = req.body;

    // Validate input
    if (!productId) {
      return res.status(400).json({ error: "productId is required." });
    }

    // Read the cart.txt file
    fs.readFile("cart.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading cart.txt:", err);
        return res.status(500).json({ error: "Internal server error." });
      }

      // Parse the cart data
      const cartItems = data.split("\n").map((item) => {
        const [existingProductId, existingQuantity] = item.split(",");
        return {
          productId: existingProductId,
          quantity: parseInt(existingQuantity),
        };
      });

      // Find the index of the product in the cart
      const productIndex = cartItems.findIndex(
        (item) => item.productId === productId
      );
      if (productIndex !== -1) {
        // Remove the product from the cart
        cartItems.splice(productIndex, 1);

        // Write the updated cart data back to cart.txt
        const updatedCartData = cartItems
          .map((item) => `${item.productId},${item.quantity}`)
          .join("\n");
        fs.writeFile("cart.txt", updatedCartData, (err) => {
          if (err) {
            console.error("Error writing to cart.txt:", err);
            return res.status(500).json({ error: "Internal server error." });
          }
          res
            .status(200)
            .json({ message: "Product removed from cart successfully." });
        });
      } else {
        res.status(404).json({ error: "Product not found in the cart." });
      }
    });
  });

  // Start the server
  app.listen(httpPort, () => {
    console.log(`Server is running on port ${httpPort}`);
  });
};
