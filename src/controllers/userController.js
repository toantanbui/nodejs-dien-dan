import userService from '../services/userService'


// let handleCreateUser = async (req, res) => {
//     try {
//         let users = await userService.handleCreateUser(req.body);
//         console.log(req.body)
//         return res.status(200).json(users)



//     } catch (e) {
//         console.log(e)
//         return res.status(200).json({
//             errCode: -1,
//             errMessage: 'server error'
//         })


//     }
// }
let handleLoginUsers = async (req, res) => {
    try {
        let users = await userService.handleLoginUsers(req.body);
        await res.cookie("jwt", users.token1, { httpOnly: true })

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleCreateAllUsers = async (req, res) => {
    try {
        let users = await userService.handleCreateAllUsers(req.body);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}







module.exports = {
    // handleCreateUser,
    handleLoginUsers, handleCreateAllUsers
}