import express from "express"
import userController from '../controllers/userController'
import homeController from '../controllers/homeController'
import { checkUserJWT } from '../middleware/JWTAction'




let router = express.Router();

const webRoutes = (app) => {
    router.get('/', homeController.getAboutPage);
    // router.post('/crud-create-users', userController.handleCreateUser)

    router.post('/api/login', userController.handleLoginUsers);
    router.post('/api/sign-up', userController.handleSignup);



    return app.use("/", router)
}

module.exports = webRoutes;