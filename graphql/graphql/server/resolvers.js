const db = require('./db')

const resolvers = {
  Query: {
    hello: (root,args,context,info) => {
      // console.log(root)
      // console.log(args)
      // console.log(context)
      // console.log(info)
      return `Hello ...${args.name} !`
    },
    students:()=>{
      return db.students.list()
    }
  },
  Mutation:{
    createStudent:(root,args,context,info) => {
       return db.students.create({collegeId:args.collegeId,
       firstName:args.firstName,
       lastName:args.lastName})
    }
 },
  Student :{
    fullName:(root,args,context,info) => {
       return root.firstName+":"+root.lastName
    },
    college:(root) => {
      return db.colleges.get(root.collegeId);
   }
  }
};

/*
 hello(name:"Sachin")
 */
 module.exports = resolvers
