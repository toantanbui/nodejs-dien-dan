
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
                        data: users.id,
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

let handleSignup = (data) => {
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
                    phonenumber: data.phoneNumber
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

let handleLogout = () => {
    return new Promise(async (resolve, reject) => {
        try {

            resolve({
                errCode: 0,
                errMessage: 'Successfully logged out'
            })




        } catch (e) {
            reject(e)


        }
    })
}

let handleGetOneUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await db.Users.findOne({
                    where: {
                        id: data.id

                    },
                    raw: true,
                    attributes: [
                        'id', 'firstName',
                        'lastName', 'email',
                        'password', 'address',
                        'roleId', 'gender',
                        'image', 'status',
                        'phonenumber', 'token',
                        'createdAt', 'updatedAt', 'background'
                    ]

                })
                if (users) {
                    console.log('gia tri user', users)
                    resolve({
                        errCode: 0,
                        errMessage: 'Get success',
                        data: users


                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Id does not exist',


                    });
                }

            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleEditOneUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.id || !data.email || !data.password


            ) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {



                let users = await db.Users.findOne({
                    where: { id: data.id, email: data.email, password: data.password }


                })
                if (users) {
                    console.log('edit user', users)
                    users.address = data.address;
                    // users.email = data.email;
                    users.firstName = data.firstName;

                    users.lastName = data.lastName;

                    users.password = data.password;
                    users.phonenumber = data.phonenumber;
                    users.roleId = data.roleId;

                    users.gender = data.gender;
                    users.image = data.image;
                    users.background = data.background;



                    await users.save();

                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                } else (


                    resolve({
                        errCode: 2,
                        errMessage: 'user does not exist',
                    })
                )
            }


        } catch (e) {
            reject(e)


        }
    })

}





module.exports = {
    handleLoginUsers, handleSignup, handleLogout, handleGetOneUser, handleEditOneUser
}