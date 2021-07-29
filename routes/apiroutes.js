const fs = require('fs');
const path = require('path');

module.exports = app => {

    // fs.readFile('./db/db.json', (err, data) => {
    //     console.log('in the routes')
    //     if (err) throw err;

    //     const notes = JSON.parse(data);

        
        app.get('/api/notes', function(req, res) {
            fs.readFile('./db/db.json', (err, data) => {
                    console.log('in the routes')
                    if (err) throw err;
            res.send(data);
        });
    })

        app.post('/api/notes', function(req, res) {
            fs.readFile('./db/db.json', (err, data) => {
                console.log('in the routes')
                if (err) throw err;
            
                var notes = JSON.parse (data);
                let newNote = req.body;
            notes.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
                        if (err) throw err;
                        res.send(newNote)
                    });
            
    });
            
        });

        // app.get('/api/notes/:id', function(req, res) {
        //     res.JSON(notes[req.params.id]);
        // });

        // app.delete('/api/notes/:id', function(req, res) {
        //     notes.splice(req.params.id, 1);
        //     updateDataBase();
        //     console.log('Deleted note with id '+req.params.id);
        // });


        // function updateDataBase() {
        //     fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        //         if (err) throw err;
        //         return true;
        //     });
        // }
    // });
}