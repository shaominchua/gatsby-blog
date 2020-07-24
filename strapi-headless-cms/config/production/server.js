module.exports = ({ env }) => ({
    "host": process.env.HOST || '0.0.0.0', // IP, localhost, or 0.0.0.0
    "port": process.env.PORT || 1337,
    "admin": {
      "autoOpen": false
    }
});
