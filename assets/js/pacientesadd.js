let form_pacientes=document.getElementById("form_pacientes");
form_pacientes.addEventListener('submit', (e)=>{
    e.preventDefault();

    let nombre=document.getElementById("nombre").value;
    let lastname=document.getElementById("lastname").value;
    let documento=document.getElementById("documento").value;

    Swal.fire({
        title: nombre+' <span> '+lastname,
        html:
        +documento+'<br>'+
        '<h5>¡Usted ha sido registrado!</h5>',
        showCancelButton: false,
        confirmButtonColor: '#2CA3AB',
        cancelButtonColor: '#a40101',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href="dasboard.html";
        }
      })

});

//Para cerrar sesión
let cerrar=document.getElementById("cerrar");
cerrar.addEventListener('click', (e)=>{
  e.preventDefault();
  Swal.fire({
    icon:'warning',
    title: '¿Esta seguro de cerrar sesión?',
    showCancelButton: true,
    confirmButtonColor: '#2CA3AB',
    cancelButtonColor: '#a40101',
    confirmButtonText: 'Si',
    cancelButtonText:'No'
  }).then((result) => {
    if (result.isConfirmed) {
        window.location.href="../index.html";
    }
  })
});
