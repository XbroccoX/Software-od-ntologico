"use strict"
//FETCH (peticiones Ajax)y peticiones a servicios/apis rest
var div_usuario= document.querySelector("#usuarios");
var div_leanne= document.querySelector("#leanne");

getUsuarios()
    .then(data=> data.json())
    .then(users=>{
        listUsuarios(users);
        return Leanne();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarLeanne(user);
        return getInfo()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error);
        alert("Error en las peticiones");
    })

function getUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function Leanne() {
    return fetch('https://jsonplaceholder.typicode.com/users/1');
}

function getInfo() {
    var profesor={
        nombre: 'Santiago',
        apellidos: 'Aristizabal',
        url: 'http://portal.senasofiaplus.edu.co/index.php/component/content/article/513-cursos-virtuales-sena'
    };
    
    return new Promise((resolve, reject) =>{
        var profesor_string = JSON.stringify(profesor)
        if(typeof profesor_string != 'string') return reject('error');
        
        return resolve(profesor_string);
        
    });

}

function listUsuarios(usuarios){
    usuarios.map((user,i)=>{
        let nombre=document.createElement("h3");
        nombre.append(i+". "+user.name)
        div_usuario.appendChild(nombre);

        document.querySelector(".load").style.display= 'none';
    });
}
function mostrarLeanne(user){
    let nombre=document.createElement("h4");
    let web1=document.createElement("a");

    nombre.append(user.name+" "+user.username+" "+user.email)
    web1.href = user.website;
    web1.append("link de pagina web");
    div_leanne.appendChild(nombre);
    div_leanne.appendChild(web1);
    document.querySelector("#leanne .load").style.display= 'none';
}
