import express from "express"
import userController from '../controllers/userController'
import homeController from '../controllers/homeController'




let router = express.Router();

const webRoutes = (app) => {
    router.get('/', homeController.getAboutPage);
    // router.post('/crud-create-users', userController.handleCreateUser)

    router.post('/api/login', userController.handleLoginUsers);
    router.post('/crud-user-create', userController.handleCreateAllUsers);



    return app.use("/", router)
}

module.exports = webRoutes;