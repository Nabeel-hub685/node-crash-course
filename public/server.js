import http from 'http'
import fs from 'node:fs/promises'

const server = http.createServer( async(req,res)=>{
    // console.log('request was made by client');
    // console.log(req.url)
    // console.log(` ${req.method} ` )
     res.statusCode= 200;
    //  res.setHeader("content-type", 'text/html')
     
   if (req.url =='/'){
         const data = await fs.readFile('./pages/index.html'  )
   res.write(data)

    res.end()
} 
  else if(req.url=='/about-me'){
    
         const data = await fs.readFile('./pages/about.html')
   res.write(data)

    res.end()
    
}

  else if(req.url=='/contact'){
    
   const data = await fs.readFile('./pages/contact.html')
   res.write(data)

    res.end()
    
}

  else if(req.url=='/style.css'){
    
   const data = await fs.readFile('./pages/style.css')
   res.write(data)

    res.end()
    
}

 
// this is how we can do redirects!

else if(req.url='about'){
    res.statusCode=301; // means moved permanently to other url!
    res.setHeader("location", '/about-me') // this is how we do redirects!
    // res.end()

}


else {
    
   const data = await fs.readFile('./pages/notFound.html')
   res.statusCode= 404;
   res.write(data)
   res.end()
    }
});


server.listen(4000, ()=>{
    console.log('Server is running at port 4000!')
})




