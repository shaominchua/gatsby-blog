const strapi = require('strapi');
const port = process.env.PORT || 3000;
const app = strapi();
app.listen(port, () => {
  console.log(`Web server up on port ${port}`);
})
strapi(/* {...} */).start();