
import db from '../models/index'
const _ = require('lodash');
import { createJWT } from '../middleware/JWTAction';



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

let handleLoginUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.password) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })

            } else {

                let users = await db.Users.findOne({
                    where: {
                        email: data.email,
                        password: data.password,

                    }
                })
                if (users) {
                    let token = createJWT({
                        email: data.email,
                        password: data.password,

                        expiresIn: '1h'
                    });


                    resolve({
                        errCode: 0,
                        errMessage: 'successful login',
                        data: users,
                        token1: token

                    });
                }
                else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Wrong account or password, the account has not been confirmed',

                    });
                }

            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleCreateAllUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.password
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                await db.Users.create({
                    email: data.email,
                    password: data.password,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    gender: data.gender,
                    roleId: data.roleId,
                    phonenumber: data.phonenumber
                })
                resolve({
                    errCode: 0,
                    errMessage: 'create success',

                });
            }

        } catch (e) {
            reject(e)


        }
    })
}




module.exports = {
    handleLoginUsers, handleCreateAllUsers
}