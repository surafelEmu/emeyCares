const Blog = require('../model/blogModel') ;

exports.create = async (req , res , next) => {
    try{const blog = await Blog.create(req.body) ;

    res.status(200).json({
        blog
    })}catch(error) {
        res.json({
            error
        })
    }
}