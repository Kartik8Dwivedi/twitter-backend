const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 280
    },
    userEmail: {
        type: String,
        required: true,
        trim: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment" 
        }
    ]
}, {timestamps: true});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;