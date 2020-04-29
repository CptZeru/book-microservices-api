const bookRoutes = require('./books')
const bookARoutes = require('./booksA')

const appRouter = (app, fs) => {
    //default route
    app.get('/', (req,res)=>{
        console.log('entering get / route');
        res.send('welcome to microservices book api');
    });

    bookRoutes(app,fs);
    bookARoutes(app,fs);
};

module.exports = appRouter;