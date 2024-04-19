const server = require('./server/index');
const PORT = process.env.PORT || 3005;

server({
    httpPort: PORT
});