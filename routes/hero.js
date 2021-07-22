const path = require('path')

module.exports = function (app) {
    document.getElementById("getnote").onclick = () => {
    app.get('./notes', (req, res) => res.sendFile(path.join(__dirname,'../public/notes.html')))
    app.get('*', (req, res) => res.sendFile(path.join(__dirname,'../public/index.html')))
    }
}