const { ObjectID, ObjectId } = require('bson');
var express=require('express')
var router=express.Router()
var objectId=require('mongodb').ObjectId
var getConnection=require('../shared/dbConnection');
var jwt=require('jsonwebtoken');
var validateToken=require('../shared/validateToken')
router.get('/get-std',function(req,res,next){
    try{
        getConnection(res,async function(db){
        var collection=db.collection('students')
        var result=await collection.find({}).toArray()
        res.send(result);
      })
    }catch(e){
        console.log('Error',e)
        res.send(e)
    }
})

router.get('/get-std-by-id',validateToken,function(req,res,next){
    var id=req.query.id
    var obj={
        _id:objectId(id)
    }
    try{
        getConnection(res,async function(db){
        var collection=db.collection('students')
        var result=await collection.find(obj).toArray()
        res.send(result);
      })
    }catch(e){
        console.log('Error',e)
        res.send(e)
    }
})


router.post('/reg-std',function(req,res,next){
    try{
    //take the data from request
    var data=req.body.data
    // connect with db
    getConnection(res,async function(db){
        var collection=db.collection('students')
        //do required operations
        const result=await collection.insertOne(data)
        //send response back to client
        res.send(result);
    })
    }catch(e){
        console.log("Error",e);
        res.send(e)
    }
})

router.put(
    '/update-std',
    validateToken,
    function(req,res,next){
    var id=  req.query.id 
    var data=req.body.data
    var obj={
        _id:objectId(id)
    }
    getConnection(res,async function(db){
        try{
          var collection=  db.collection('students')
          const result=await collection.updateOne(obj,{$set:data})
          res.send(result);
        }catch(e){
            res.send(e)
        }
    })
})

router.delete('/del-std/:id',validateToken,function(req,res,next){
   var id=req.params.id
   var obj={
    _id:ObjectId(id)
   }
   getConnection(res, async function(db){
       var collection= db.collection('students')
       var result=await collection.deleteOne(obj)
       res.send(result);
   })
})

router.post('/login', function(req,res,next){
    var data=req.body.data
    getConnection(res,async function(db){
          var collection=db.collection('students')
          var result=await collection.find(data).toArray()
          if(result.length){
            var token=jwt.sign(data,'my-token');
            result[0].token=token
          }
          res.send(result)
    })
})
module.exports=router;