// const collegeManagementRoutes = require('./src/routes');

const express = require('express')
const app = express()

// console.log(collegeManagementRoutes.stafName());
function someEndpoint (req, res) {
    res.send('Some endpoint Called');
}
app.get('/some-endpoint', someEndpoint)


app.use(express.json()); 


app.listen(4000);
console.log('App is listening....');