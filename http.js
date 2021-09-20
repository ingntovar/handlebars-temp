const http=require('http')
console.clear()
const PORT=4000
http.createServer((req,res)=>{
  

  res.write('Hello world')
  res.end()
})
.listen(PORT)

console.log(`Listening through the port ${PORT}`)