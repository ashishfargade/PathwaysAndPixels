import PostMessage from "../models/PostMessage.js";


export const getPosts = async (req, res) => {
    console.log("get posts api called");
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createPosts = async (req, res) => {
    console.log("post post api called");
    // console.log(req.body);
    try {
        const post = req.body;
        const newPost = new PostMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
        console.log(err.message);
    }
}