const mongoose = require('mongoose');

const optionsSchema = new mongoose.Schema({
    options: String,
    votes: {
        type: Number,
        default: 0
    }
});

const pollSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: String,
    options: [optionsSchema],
    voted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    created: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Poll', pollSchema);