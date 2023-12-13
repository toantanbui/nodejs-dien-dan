
import db from '../models/index'
const _ = require('lodash');


// let handleCreateUser = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (!data.firstName || !data.lastName || !data.email ||
//                 !data.password || !data.address || !data.roleId || !data.gender ||
//                 !data.phonenumber
//             ) {
//                 resolve({
//                     errCode: 1,
//                     errMessage: 'Missing paramater'
//                 })



//             } else {
//                 await db.Users.create({

//                     firstName: data.firstName,
//                     lastName: data.lastName,
//                     email: data.email,
//                     password: data.password,
//                     address: data.address,
//                     roleId: data.roleId,
//                     gender: data.gender,
//                     image: data.image,
//                     phonenumber: data.phonenumber,

//                 })
//                 resolve({
//                     errCode: 0,
//                     errMessage: 'create success',

//                 });
//             }

//         } catch (e) {
//             reject(e)


//         }
//     })
// }




// module.exports = {
//     handleCreateUser,
// }