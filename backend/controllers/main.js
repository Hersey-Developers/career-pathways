const express = require('express')
const question = require('../models/question')
const mongoose = require('mongoose')


exports.getById = (req, res, next) => {
    const _id = req.params._id;
    question.findById(_id)
        .then(question => {
            if(!question){
                const error = new Error('Could Not Find Question')
                error.statusCode = 404;
                throw error;
            }
            res.statusCode(200).json({question: question})
        })
        .catch(err => {
            if (!err.statusCode){
                err.statusCode = 500;
            };
            next(err);
        });
};

exports.patchById = (req, res, next) => {

}

exports.deleteById = (req, res, next) => {

}