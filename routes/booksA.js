const bookARoutes = (app, fs) => {

    // variables
    const dataPath = './data/booksA.json';

    // refactored helper methods for some reason like we're gonna reapeating code with fs.readfile and fs.writefile
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }
            // console.log(JSON.parse(data));
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // CREATE
    app.post('/booksA', (req, res) => {

        readFile(data => {
            console.log("data length"+data.data.length)
            const newBookId = data.data.length + 1;
            // console.log(req.body);
            console.log("newbookid : "+newBookId);
            req.body.id=newBookId;
            console.log(req.body);
            console.log(data);
            // add the new book
            data.data.push(req.body)
            console.log(data);
            console.log(data.data.length);

            writeFile(JSON.stringify(data, null,2), () => {
                res.status(200).send({
                    "status" : 200,
                    "message" : "new book has been added"
                });
            });
        },
            true);
    });

    // READ
    app.get('/booksA', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

    // DELETE
    app.delete('/booksA/:id', (req, res) => {

        readFile(data => {
    
            // add the new user
            const booksId = req.params["id"];
            console.log(booksId)
            console.log(data.data.length)
            console.log(data.data)
            for(var i = 0; i < data.data.length; i++){
                if(data.data[i].id == booksId){
                    console.log("found ya!");
                    data.data.splice(i,1);
                    console.log(data.data)
                }
            }
    
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({
                    "status" : 200,
                    "message" : "book has been removed"
                });
            });
        },
            true);
    });
};

module.exports = bookARoutes;