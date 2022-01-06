import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
    username: {
        type: String,
        required: true
    },
    
    createdDate: {
        type: Date
    }
});


const post = mongoose.model('post', PostSchema);

export default post;