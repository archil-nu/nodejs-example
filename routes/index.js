const taskController = require('../controller/task-controller');
const userController = require('../controller/user-controller');

module.exports = (app) => {

    app.get('/task', taskController.query);
    // Private - Operations available to users after authentication
    app.use('/task', userController.authenticate);
    app.post('/task', taskController.create);




    // Handling any other request
    app.use("*", (req, res) => {
        res.status(404).end();
    });

}