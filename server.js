const express = require('express');

// Define Express App
const app = express();
const PORT = process.env.PORT || 3000;
const REGION = process.env.REGION || "mindyourfudgingbusiness"
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//     entry: 'server.js',
//     plugins: [
//       new HtmlWebpackPlugin({
//         inject: false,
//         template: './public/surprise.html',

//         // Pass the full url with the key!
//         region: `${REGION}`,

//       })
//     ]
//   }

// Serve Static Assets
app.use(express.static('public'));

app.get('/where', function(req, res) {
    res.send(process.env.REGION || "mindyourfudgingbusiness")
  });

app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});
