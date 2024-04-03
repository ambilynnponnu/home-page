const server = require('./server/index');
const PORT = process.env.PORT || 3000;

server({
    httpPort: PORT
});