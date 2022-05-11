let form_pacientes=document.getElementById("form_pacientes");
form_pacientes.addEventListener('submit', (e)=>{
    e.preventDefault();
    Swal.fire({
        icon:'success',
        title: '¡Nueva vacuna registrada!',
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

//Para cerrar formulario
let closeForm=document.getElementById("closeForm");
closeForm.addEventListener('click', (e)=>{
  e.preventDefault();
  Swal.fire({
    icon:'warning',
    title: '¿Esta seguro de cerrar el formulario?',
    showCancelButton: true,
    confirmButtonColor: '#2CA3AB',
    cancelButtonColor: '#a40101',
    confirmButtonText: 'Si',
    cancelButtonText:'No'
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
