const bookRoutes = (app, fs) => {

    // variables
    const dataPath = './data/books.json';

    // refactored helper methods for some reason like we're gonna reapeating code with fs.readfile and fs.writefile
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(JSON.parse(data));
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
    app.post('/books', (req, res) => {

        readFile(data => {
            const newBookId = Object.keys(data).length + 1;
            console.log(req.body);

            // add the new book
            data[newBookId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send({
                    "status" : 200,
                    "message" : "new book has been added"
                });
            });
        },
            true);
    });

    // READ
    app.get('/books', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

    // DELETE
    app.delete('/books/:id', (req, res) => {

        readFile(data => {
    
            // add the new user
            const booksId = req.params["id"];
            delete data[booksId];
    
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

module.exports = bookRoutes;