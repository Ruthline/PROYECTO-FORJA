//Para el Dashboard
let searchDoc=document.getElementById("searchDoc");
searchDoc.addEventListener('submit', (e)=>{
    e.preventDefault();
    let documento=parseInt(document.getElementById("documento").value);

    switch(documento){
        case 52368795:
            Swal.fire({
                title: 'Patricio Calamardo',
                html:
                '<b>CC.</b>'+documento+'<br>'+
                '<table width="100%"><th>Tipo</th> <th>Fecha</th> <th>Dosis</th> <tr><td>Pfizer</td> <td>24/01/2022</td> <td>1</td> </tr></table>',
                showCancelButton: true,
                confirmButtonColor: '#2CA3AB',
                cancelButtonColor: '#a40101',
                confirmButtonText: 'Nueva Dosis'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href="nuevaDosis.html";
                }
              })
        break;
        case 1001235478:
            Swal.fire({
                title: 'Bob Esponja',
                html:
                '<b>CC.</b>'+documento +'<br>'+
                '<table width="100%"><th>Tipo</th> <th>Fecha</th> <th>Dosis</th> <tr><td>Pfizer</td> <td>24/01/2022</td> <td>1</td> </tr> <tr><td>Pfizer</td> <td>16/02/2022</td> <td>1</td> </tr></table>',
                showCancelButton: true,
                confirmButtonColor: '#2CA3AB',
                cancelButtonColor: '#a40101',
                confirmButtonText: 'Nueva Dosis'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href="nuevaDosis.html";
                }
              })
        break;
        case 25413574:
            Swal.fire({
                title: 'Arenita del mar',
                html:
                '<b>CC.</b>'+documento+'<br>'+'<b>Esquema Completo</b> '+'<br>'+
                '<table width="100%"><th>Tipo</th> <th>Fecha</th> <th>Dosis</th> <tr><td>Pfizer</td> <td>24/01/2022</td> <td>1</td> </tr> <tr><td>Pfizer</td> <td>16/02/2022</td> <td>1</td> </tr> <tr><td>Pfizer</td> <td>12/03/2022</td> <td>1</td> </tr></table>',
                showCancelButton: false,
                confirmButtonColor: '#2CA3AB',
                cancelButtonColor: '#a40101',
                confirmButtonText: 'Aceptar'
              })
        break;
        case 1007203506:
            Swal.fire({
                title: '<b>CC.</b>'+documento,
                html:
                    '<h3>NO tiene ningun registro de vacunación</h3> ' +'<br>',
                showCancelButton: true,
                confirmButtonColor: '#2CA3AB',
                cancelButtonColor: '#a40101',
                confirmButtonText: 'Registrar'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href="pacientesadd.html";
                }
              })
        break;
    }
    

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
