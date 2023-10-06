let cuentas = [
    {nombre: "Mali", saldo: "200", contraseña:"123"},
    {nombre: "Gera", saldo: "290",contraseña:"456"},
    {nombre: "Maui", saldo: "67",contraseña:"789"},
  ];

function loguear()
{
    let user=document.getElementById("usuario").value;
    let password=document.getElementById("clave").value;
    let validacion = cuentas.find(cuentaUsuario => cuentaUsuario.nombre === user && cuentaUsuario.contraseña === password);
    
        
    if(validacion)
        {
        localStorage.setItem("nombreUsuario",user);
        window.location="cajero.html";
       // console.log(localStorage)
    }

    else
    {
        alert("Usuario o contraseña incorrectos");    }
}

let usuarioLogueado = localStorage.nombreUsuario
let indiceUsuario = cuentas.findIndex((elemento, indice) => {
  if(elemento.nombre === usuarioLogueado) {
    localStorage.setItem("indiceUsuario", indice)
  }
})  

let balance = parseInt(cuentas[localStorage.indiceUsuario].saldo);

  // Funcion consulta saldo
  function consultaSaldo(){
    if (balance<=10){
      alert("Tu saldo es el monto mínimo " + balance);
      //Revisar else if
    } else if (balance>=990) {
      alert("Tu saldo es el monto Máximo " +balance );

    } 
    else{
      alert('tu saldo es' + ' ' + balance);

    }

  }

  // Funcion retiro 
  function retiro(){
    let cantidad = parseInt(document.getElementById('Cant').value);
    if (balance > cantidad && balance > 10 ){
      balance -= cantidad;
      alert(`Retiro de ${cantidad} exitoso, su nuevo saldo es: ${balance}`)
     
    } 
    else {
      alert("Fondos insuficientes");   

    }
  }
 // Function deposito
 function deposito() {
  let cantidad = parseInt(document.getElementById('Cant').value);
  if (balance>=990){
    alert("Deposito inválido, tu saldo es el monto máximo " + balance);
  }
  else {
  balance += cantidad;
  alert(`Deposito de  ${cantidad} exitoso. Su nuevo saldo es: ${balance}`);       
}
}

function bye(){
  window.location="index.html";
  localStorage.clear();
  // console.log(localStorage)
}