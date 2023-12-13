import express from "express"
import userController from '../controllers/userController'




let router = express.Router();

const webRoutes = (app) => {
    // router.post('/crud-create-users', userController.handleCreateUser)





    return app.use("/", router)
}

module.exports = webRoutes;