
import db from '../models/index'
const _ = require('lodash');
import { createJWT } from '../middleware/JWTAction';
import modelsMongo from '../modelsMongo/modelsMongo';



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



let handleCreatePosts = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.firstName || !data.lastName

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {


                await modelsMongo.Posts.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    idUser: data.id,
                    avatar: data.avatar,
                    email: data.email,
                    postName: data.postName,
                    postContent: data.postContent,
                    like: data.like,
                    comment: data.comment,
                    Comment1: data.Comment1,
                    time: new Date(),

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

let handleGetPosts = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            if (!data.id

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let users = await modelsMongo.Posts.find({
                    idUser: data.id

                })
                    .populate('Comment1')
                // .populate({
                //     path: 'Comment1',
                //     populate: { path: 'Comment2' }
                // })
                console.log('gia trị cần tìm', users)

                if (!_.isEmpty(users)) {
                    resolve({
                        errCode: 0,
                        errMessage: 'success',
                        data: users
                    })
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',

                    })
                }
            }





        } catch (e) {
            reject(e)


        }
    })
}

let handleCreateComment1 = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.firstName || !data.lastName

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {

                let users1 = await modelsMongo.Comment1.create({
                    idPosts: data.idPosts,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    avatar: data.avatar,
                    content: data.content,

                    like: data.like,
                    comment: data.comment,

                })
                if (users1) {

                    let users = await modelsMongo.Posts.find({
                        _id: data.idPosts,

                    })
                    console.log('gt users la', users)
                    console.log('gt users la [0]', users[0])
                    if (!_.isEmpty(users[0])) {

                        let abc = await modelsMongo.Posts.update({
                            Comment1: users[0].Comment1,
                            comment: users[0].comment,

                        },
                            {

                                $push: { Comment1: users1._id },
                                comment: users[0].Comment1.length


                            })
                        console.log('gia trị cập nhập là', abc)

                    }

                    resolve({
                        errCode: 0,
                        errMessage: 'create success',

                    });
                }








            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleCreateComment2 = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.firstName || !data.lastName

            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {


                await modelsMongo.Comment2.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    avatar: data.avatar,
                    content: data.content,

                    like: data.like,
                    comment: data.comment,

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

let handleEditPosts = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.idPosts || !data.like

            ) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {




                let users = await modelsMongo.Posts.find({
                    _id: data.idPosts,

                })
                console.log('gt users la', users)
                console.log('gt users la [0]', users[0])
                if (!_.isEmpty(users[0])) {

                    await modelsMongo.Posts.update({
                        like: users[0].like,


                    },
                        {
                            like: data.like,




                        })
                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                }


            }

        } catch (e) {
            reject(e)


        }
    })
}





module.exports = {
    handleLoginUsers, handleSignup, handleLogout, handleGetOneUser, handleEditOneUser,
    handleCreatePosts, handleGetPosts, handleCreateComment1, handleCreateComment2,
    handleEditPosts
}