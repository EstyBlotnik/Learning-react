
const gwtAllPosts = (req, res,next) => {
    res.send('get all posts');
}

const AddNewPost = (req, res,next) => {
    res.send('add a new post');
}


module.exports = {gwtAllPosts,AddNewPost};