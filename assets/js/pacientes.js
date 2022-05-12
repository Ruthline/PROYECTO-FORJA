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
