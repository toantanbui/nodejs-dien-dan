const mongoose = require('mongoose');
//import mongoose from "mongoose"
const connect = require('../connectDBMongo/connectDBMongo');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema1 = new Schema({
    // id: ObjectId,
    idUser: String,
    firstName: String,
    lastName: String,
    email: String,
    postName: String,
    postContent: String,
    like: {
        type: Number,
        default: 0,
    },

    comment: {
        type: Number,
        default: 0,
    },
    time: Date,
    Comment1: [{
        type: String,
        ref: 'Comment1',


    }],


    avatar: Buffer,





}, { collection: 'object' },
    { timestamps: true }
)

const Posts = mongoose.model('Posts', schema1);

const schema2 = new Schema({
    idPosts: String,
    firstName: String,
    lastName: String,
    email: String,
    content: String,
    like: {
        type: Number,
        default: 0,
    },

    comment: {
        type: Number,
        default: 0,
    },
    Comment2: [{
        type: String,
        ref: 'Comment2',


    }],



    avatar: Buffer,




},
    { timestamps: true }
)

const Comment1 = mongoose.model('Comment1', schema2);

const schema3 = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    content: String,
    like: {
        type: Number,
        default: 0,
    },

    comment: {
        type: Number,
        default: 0,
    },




    avatar: Buffer,




},
    { timestamps: true }
)

const Comment2 = mongoose.model('Comment2', schema3);

module.exports = { Posts, Comment1, Comment2 }