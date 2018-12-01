function AeropuertosA(){
    let URL = "/users"
    fetch(URL, {
        headers :{'Content-type': aplication/json},
        method:'GET'
    }).then(res => res.json())
    .catch(err => console.log(err))
    .then(response => {
        let tobody = document.querySelector("#Registrar");
        let Filas = "";
        response.forEach(element => {
            Filas = Filas + `<tr>
            <td>${element.id}</td>
            <td>${element.AeropuertoName}</td>
            <td>${element.Ubicacion}</td>
            <td>${element.Terminales}</td>
            <td>
            <a href = "/Aeropuerto/${element._id}" class="update btn btn-warning" data-toggle="modal" data-target = "#exampleModal">Actualizar</a>
            <a href = "/Aeropuerto/${element._id}" class = "delete btn btn-danger">Eleminar</a>
            </td>
            </tr>`
        });

    });
}

AeropuertosA();//falta el formulario
document.forms.FormRegistrar = addEventListener("submit", function(e){
    e.preventDefault();
    var data = {
         AeropuertoName: document.querySelector("#AeropuertoName").value,
         Ubicacion: document.querySelector("#Ubicacion").value,
         Terminales: document.querySelector("#Terminales").value
    }
    this.console.log(data);
    let URL = "/users";
    fetch(URL, {
        headers:{
            'content-type': 'Aplication/json'
        },
        metoth: "POST",
        body: JSON.stringify(data),
    }).then(res => res.json()).catch(err=>console.log(err)).then(response => {alert + "insertado con exito"})
});