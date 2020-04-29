const bookRoutes = require('./books')

const appRouter = (app, fs) => {
    //default route
    app.get('/', (req,res)=>{
        console.log('entering get / route');
        res.send('welcome to microservices book api');
    });

    bookRoutes(app,fs);
};

module.exports = appRouter;