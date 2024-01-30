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
    router.get('/api/logout', userController.handleLogout);
    router.get('/api/get-one-user', checkUserJWT, userController.handleGetOneUser);
    router.post('/api/edit-one-user', userController.handleEditOneUser);




    return app.use("/", router)
}

module.exports = webRoutes;