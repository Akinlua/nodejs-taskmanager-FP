const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        console.log('yes')
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg:'Sommething went wrong'})
}


module.exports = errorHandlerMiddleware