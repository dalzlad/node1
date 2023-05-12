
const validar =() =>{
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}



document.querySelector('#registrar')
.addEventListener('click', () => {
    validar()
})