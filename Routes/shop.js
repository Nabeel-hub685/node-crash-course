 import express from "express";

 // file ko export krne k lye!

 console.log('nsbeeeeeeeel')
 
 
//  console.log(typeof express)
 const   router = express.Router()

 export default router
 
 //to server publically static files

 
 router.get('/', (req,res)=>{
    res.send("Thi is shoppp page  Nabeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel!!!")
 })
 
 router.get('/about', (req,res)=>{
     // res.send('Hello from server Nabeel!!!');
     res.send('hey bro! this is all about the shop website!')
 
     // res.sendFile('./pages/index.html', {root: 'nodejs crash course'})
 
 })
 

 
 router.post('/' , (req, res)=>{
     res.send('hello from Nabeel post request from shoppp file!!!')
 })


 

 
   
