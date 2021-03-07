const express = require('express');
const path = require('path');
const router = require('./routes/index');
const logic = require('./routes/logic');
const app = express();
const port = 3000;

//Configurations
app.set('port', port);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); //Static files
app.use(express.urlencoded({extended: true}));


app.use('/',router);
app.use('/logic', logic);

app.listen(port, () => { 
	console.log('Server on port', app.get('port'));
});
