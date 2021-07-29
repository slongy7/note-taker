const express = require('express');
// const cors = require('cors');


const app = express();
// app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended:true

}))
app.use(express.static('public'))

require('./routes/apiroutes')(app)

require('./routes/hero.js')(app)



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('listening on port 3001')
})