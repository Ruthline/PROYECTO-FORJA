
//Para el login

let ingreso=document.getElementById("ingreso");

ingreso.addEventListener('submit', ingresar=(e)=>{
        e.preventDefault();

        let usuario = document.getElementById("usuario").value;
        let contrasena = document.getElementById("contrasena").value;

        if (usuario == "Admin" && contrasena == "Kuepa2022") {
            console.log("ejecutado correctamente");
            window.setTimeout(() => { window.location.href = "dasboard.html"; }, 1000);

        } else {
            console.log("ejecutado correctamente sin credenciales");
            swal.fire({
                icon: 'error',
                title: 'Las credenciales son incorrectas',
                text: 'Por favor repita la acción'
            });
        }
    });
//Para el Dashboard
let searchDoc=document.getElementById("searchDoc");
searchDoc.addEventListener('submit', (e)=>{
    e.preventDefault();
    let documento=document.getElementById("documento").value;

    switch(documento){
        case "52368795":
            Swal.fire({
                title: 'Patricio Calamardo',
                html:
                    '<h3>Tiene una Dosis</h3> ' +'<br>'+
                    '<p><b>Tipo de vacuna:</b> Pfizer </p> ' +
                    '<p><b>Fecha de vacuna:</b> 24/01/2022 </p> ',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Continuar'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href="nuevaDosis.html";
                }
              })
        break;
    }

});