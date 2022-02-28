const Comment = require('../model/commentModel')
const Caregiver = require('../model/caregiversModel')
const catchAsync = require('../middleware/catchAsync') ;

const caregiversModel = require('../model/caregiversModel');
const Blog = require('../model/blogModel');
const ErrorHandler = require('../util/errorHandler');

exports.create = catchAsync(async (req , res , next) => {
   

        let typed ;

        const {type , type_id} = req.body

        req.body.userId = req.user._id ;


        const comment = await Comment.create(req.body) ;


        // caregiver id: 61ebaab26f676b71173d72a0


        // check if the comment is for the caregivers, post or replay for another comment

        if(type === 'caregiver') {
            typed = await Caregiver.findById('61ebaab26f676b71173d72a0') ;


            console.log(typed.comments.push(type_id)) ;
    
            // comments.push(comment._id) ;
    
            console.log(typed.comments) ;
    
            await typed.save() ;
    
        }else if(type === 'post') {
            typed = await Blog.findById(type_id) ;

            typed.comments.push(comment._id) ;

            console.log(typed.comments)

            await typed.save() ;
        }else if(type === 'comment') {
            typed = await Comment.findById(type_id) ;

            typed.repalycomments.push(comment._id) ;

            console.log(typed.repalycomments) ;

            await typed.save() ;

        }


       
        res.status(200).json({
            comment ,
            typed
        })
    }) ;

    exports.removeComment = catchAsync(async (req , res , next) => {
        
        console.log(req.params.id) ;

        const comment = await Comment.findByIdAndDelete(req.params.id) ;


        if(!comment ) {
            return next(new ErrorHandler('The comment to be deleted is not found' , 404)) ;
        }

        res.status(200).json({
            success: true ,
            comment
        })
    })
