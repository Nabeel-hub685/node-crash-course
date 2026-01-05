 import express from "express";

 // file ko export krne k lye!

 console.log('nsbeeeeeeeel')
 
 
//  console.log(typeof express)
 const   router = express.Router()

 export default router
 
 //to server publically static files

 
 router.get('/', (req,res)=>{
    res.send("Thi is blog page  Nabeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel!!!")
 })
 
 router.get('/about', (req,res)=>{
     // res.send('Hello from server Nabeel!!!');
     res.send('hey bro! this is all about the blog website!')
 
     // res.sendFile('./pages/index.html', {root: 'nodejs crash course'})
 
 })
 

 
 router.post('/' , (req, res)=>{
     res.send('hello from Nabeel post request from blog file!!!')
 })
 
 // app.put('/' , (req, res)=>{ 
 //     console.log('hey its a putt request coming to browser!!')
 //     res.send('hello from Nabeel post request!!')
 // })
 

 

 
   

 
 // for 404 page that is if the url is incorrect! , and this handler must always be at the very bottom !
 

 
 
 
//  router.listen(3499,()=>{
//      console.log('server is listening now at port 3499!')
//  })