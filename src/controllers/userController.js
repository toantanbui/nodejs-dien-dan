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






module.exports = {
    // handleCreateUser,
}