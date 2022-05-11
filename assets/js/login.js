
//Para el login

let ingreso=document.getElementById("ingreso");

ingreso.addEventListener('submit', ingresar=(e)=>{
        e.preventDefault();

        let usuario = document.getElementById("usuario").value;
        let contrasena = document.getElementById("contrasena").value;

        if (usuario == "Admin" && contrasena == "Kuepa2022") {
            console.log("ejecutado correctamente");
            window.setTimeout(() => { window.location.href = "dasboard.html"; }, 1000);

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
              })

        } else {
            console.log("ejecutado correctamente sin credenciales");
            swal.fire({
                icon: 'error',
                title: 'Las credenciales son incorrectas',
                text: 'Por favor repita la acción'
            });
        }
    });


