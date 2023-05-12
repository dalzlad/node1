const express = require('express')
const path = require('path')
const Swal = require('sweetalert2')

const app = express()
const hbs = require('hbs')

//Servidor de contenido estático
app.use(express.static('public'))


const puerto = 8585

app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('home',{
        titulo: 'Home',
        nombre: 'Diego López'
    })
})

app.get('/contacto', (req, res) => {
    res.render('contacto',{
        titulo: 'Contacto',
        nombre: 'Diego López'
    })
})

app.listen(puerto, () => 
console.log(`Escuchando por el puerto ${puerto}`))


const validar =() =>{
    const Swal = require('sweetalert2')
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}



