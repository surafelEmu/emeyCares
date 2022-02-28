const Client = require('../model/clientModel') ;

exports.create = async (req , res , next) => {
    try{
        const client = await Client.create(req.body) ;

        res.status(200).json({
            client
        })

    }catch(error) {
        res.json({
            error
        })
    }
}