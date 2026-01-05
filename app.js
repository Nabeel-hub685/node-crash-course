import express from "express";

import blog from './Routes/Blog.js'
import shop from './Routes/shop.js'
import birds from './Routes/birds.js'

// console.log(blog)







// console.log(router)


// console.log(typeof express)

const app= express();

// we're using this for handling different routes from separate files!
app.use('/blog', blog)
app.use('/shop', shop)
app.use('/birds', birds)

//to server publically static files
app.use(express.static('public'))// express.static is a middleware actually!

app.get('/', (req,res)=>{
    // res.send('Hello from server Nabeel!!!');
    res.sendFile('C:\\Nabeel\\nodejs crash course\\pages\\index.html')

    //req.query ka use
    console.log(req.query)
      console.log(req.query.name)

    // res.sendFile('./pages/index.html', {root: 'nodejs crash course'})

})

app.get('/about', (req,res)=>{
    // res.send('Hello from server Nabeel!!!');
    res.sendFile('C:\\Nabeel\\nodejs crash course\\pages\\about.html')

    // res.sendFile('./pages/index.html', {root: 'nodejs crash course'})

})

app.get('/about-us', (req,res)=>{
    res.redirect('/about')

})

app.post('/' , (req, res)=>{
    console.log('hey its a post request coming to browser!!')
    res.send('hello from Nabeel post request!!!')
})

// app.put('/' , (req, res)=>{ 
//     console.log('hey its a putt request coming to browser!!')
//     res.send('hello from Nabeel post request!!')
// })

app.get('/style.css', (req,res)=>{
    res.sendFile('C:\\Nabeel\\nodejs crash course\\pages\\style.css')

})


app.get('/api', (req,res)=>{
  console.log('hello this is api end point!')
  res.json({a:1,b:2,c:4})
})

  
app.get('/:slug', (req, res)=>{
   res.send(`This is ${req.params.slug} page!`)
})

// for 404 page that is if the url is incorrect! , and this handler must always be at the very bottom !

app.use((req,res)=>{
    res.statusCode='404';
   res.sendFile('C:\\Nabeel\\nodejs crash course\\pages\\notFound.html')
})



app.listen(3499,()=>{
    console.log('server is listening now at port 3499!')
})