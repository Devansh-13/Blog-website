import express from "express";
import { signUpUser , loginUser} from "../controller/userController.js" 
import {uploadImage,getImage} from "../controller/imageController.js";

import upload from "../utils/upload.js";
import { createPost,getAllPosts ,getPost,updatePost,deletePost} from "../controller/postController.js";
import { authenticateToken } from "../controller/jwtController.js";
import { newComment,getComments,deleteComment } from "../controller/commentController.js";



const router =express.Router();

router.post("/signup",signUpUser);
router.post("/login",loginUser);

router.post("/file/upload",upload.single("file"), uploadImage);

router.get("/file/:filename",getImage);

router.post("/create",authenticateToken,createPost);

router.get("/posts",authenticateToken,getAllPosts);

router.get("/post/:id",authenticateToken,getPost);

router.put("/update/:id",authenticateToken,updatePost)

router.delete("/delete/:id",authenticateToken,deletePost)

router.post("/comment/new",authenticateToken,newComment)

router.get("/comments/:id",authenticateToken,getComments)

router.delete("/comment/delete/:id",authenticateToken,deleteComment)


export default router;