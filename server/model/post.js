import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
    
});

const Post=mongoose.model("Post",postSchema);

export default Post;

