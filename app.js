
const express=require('express')
const app=express()

const hbs= require('hbs')
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

console.clear()

const PORT=4000
app.use(express.static('public'))


app.get('/', (req,res)=>{
  res.render('home', {
    title: 'Hola mor',
    subtitle: 'Esta es mi página mor'
  }) //Busca en la carpeta views, no es necesario especificar la extensión hbs
})

app.get('/generic', (req,res)=>{
  res.render('generic', {
    title: 'Hola mor',
    subtitle: 'Esta es mi página mor'
  }) //Busca en la carpeta views, no es necesario especificar la extensión hbs
})

app.get('/elements', (req,res)=>{
  res.render('elements', {
    title: 'Hola mor',
    subtitle: 'Esta es mi página mor'
  }) //Busca en la carpeta views, no es necesario especificar la extensión hbs
})

app.get('*', (req,res)=>{
  res.send('404 not found mor')
})


app.listen(PORT)

 console.log(`Server running on port ${PORT}`)




