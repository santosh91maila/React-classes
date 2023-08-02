var jwt=require('jsonwebtoken')
function validateToken(req,res,next){
        var token=req.headers.authorization
        if(token){
            jwt.verify(token,'my-token',function(e,s){
                if(e){
                    res.send('Invalid Token')
                }else{
                    next()
                }
            })
        }else{
            res.send('Missing Token')
        }
}

module.exports=validateToken