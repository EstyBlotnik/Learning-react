
const gwtAllPosts = (req, res,next) => {
    res.send('get all posts');
}

const AddNewPost = (req, res,next) => {
    console.log(req.body.message);
    res.send('add a new post');
}


export = {gwtAllPosts,AddNewPost};