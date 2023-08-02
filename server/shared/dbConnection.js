var mongodb=require('mongodb')

async function getConnection(res,cb){
    try{
    var url='mongodb+srv://nit:nit@nit.al1ygb1.mongodb.net/?retryWrites=true&w=majority'
    // var url="mongodb://localhost:27017"
    var mongoClient=mongodb.MongoClient;
    var server=await mongoClient.connect(url)
    var db=server.db('school')
    cb(db)
    }catch(e){
        console.log('getConnection:',e);
        res.send(e)
    }
}

module.exports=getConnection