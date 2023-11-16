let arrayFormulario = []; //* Donde se va a almacenar todo el formulario y donde se va a hacer el push del "json".
function pad(n) { 
    return n < 10 ? '0' + n : n; //? Si n es menor que 10, pongo un 0 + el numero (2 es menor que 10 por lo tanto --> 02), si no devuelve el numero 10 , 11 12 ....
  }

  //? Funcion para que se guarde la cookie una hora
function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + 1 * 60 * 60 * 1000); // Añadir 1 hora en milisegundos
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }



function validarDatos(){
    
  let problemaValidacion = false;

  let nombreCliente = document.getElementById("nombreCliente").value.trim();

  let marcaCocheInput = document.getElementById("marcaVehiculo").value.trim().toUpperCase();

  //! Validacion para el nombre 

  let longitudCadena = 4

  if (nombreCliente.length < longitudCadena){
    console.log("%cError: El nombre debe tener al menos " + longitudCadena + " caracteres. Por favor, verifica e intenta de nuevo.", "color: orange; font-size: 16px; ");
    problemaValidacion = true;

  }


  let ApellidosCliente = document.getElementById("apellidosCliente").value.trim();
  console.log(ApellidosCliente)

/*   if (ApellidosCliente.length < longitudCadena){
    console.log("%cError: El Apellido debe tener al menos " + longitudCadena + " caracteres. Por favor, verifica e intenta de nuevo.", "color: orange; font-size: 16px; ");
    errorValidacion = true;
  } */

  let NombreCoche = document.getElementById("nombreVehiculo").value.trim();

  let radioSeleccionadoElement = document.querySelector("input[name='tipoModelo']:checked")

  if (radioSeleccionadoElement){
    let radioSeleccionado = radioSeleccionadoElement.value.toUpperCase();
    console.log("Has elegido un coche " + radioSeleccionado);
  } else {
    problemaValidacion = true;
  }

  //! Validacion para el dni

    //!  Validacion de dni 

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

      let input_dni = document.getElementById("dni").value.trim().toUpperCase(); //? Recojo lo que escribe el usuario por el input, le quito los espacios

      console.log('%cEl dni que ha introducido el usuario es: ' + input_dni, 'color: green; font-size: 16px;');


      let dniSinLetra = parseInt(input_dni.slice(0, -1)); //? Elimino el ultimo caracter que es la letra del dni

      console.log('%cEl dni sin la letra es: ' + dniSinLetra, 'color: green; font-size: 16px;');

      let letraDelDni = input_dni.slice(-1) //? Almaceno solamente la letra

      console.log('%cLa letra del dni es: ' + letraDelDni, 'color: green; font-size: 16px;');

      //todo Hacemos la division y nos quedamos con el resto, para saber en que posicion del array letras esta mi letra, con mi dni es la posicion 17 que es la V  
      let posicionLetraDni = dniSinLetra % 23; //? Calculamos la posicion donde esta la letra del dni, esto lo sabemos por el resto de la division

      console.log('%cEl resto de la division es: ' + posicionLetraDni, 'color: green; font-size: 16px;'); 
      
      let calcularLetraDni = letras[posicionLetraDni]; //? Aqui estamos buscando que letra hay en el indice 17 del array. Basicamente hace: me meto dentro del array letras y voy recorriendo hasta llegar al indice 17 en mi caso y devuelvo la letra que hay en el indice 17.

      console.log('%cEn la posicion ' + posicionLetraDni + ' del el array letras  esta la letra: ' + calcularLetraDni, 'color: green; font-size: 16px;');

      //todo Comprobamos que la letra que he calculado sea igual a la que me ha pasado el usuario por teclado (pero la diferencio con la variable letraDelDni que solo tiene la letra del dni).

      if (calcularLetraDni === letraDelDni) { //? Comparamos si la letra que he calculado es igual a la letra del dni que me ha pasado el usuario por el input 
        console.log('%c Las letras son iguales', 'color: green; font-size: 16px;');
        console.log('%c El dni es valido ', 'color: green; font-size: 16px;');
        /* return calcularLetraDni === letraDelDni; //? devuelve true, porque son iguales */
    } else {
        problemaValidacion = true;
        console.log('%c El dni  NO es valido, te has equivocado al poner el dni porque he calculado la letra: ' + calcularLetraDni + ' y la letra que has introducido en el input es ' + letraDelDni , 'color: red; font-size:16x;');
    }

  //! Fin  Validacion para el dni


    //! Validacion para la matricula del coche 

    let InputMatriculaCoche = document.getElementById("matriculaVehiculo").value.trim().toUpperCase();

    const expresMatricula = /^(\d{4}-?[A-Z]{3})$/; //* Expresion regular de la matricula.

    if (expresMatricula.test(InputMatriculaCoche)){ //* Si la matricula introducida pasa la expresion regular.

        console.log('%c La matricula es valida', 'color: green; font-size: 16px;');

    } else {
        console.log('%c La matricula no es valida', 'color: red; font-size: 16px;');
        problemaValidacion = true;
    }

    //! Fin Validacion para la matricula del coche 

    //! Validacion para el email

    let input_email = document.getElementById("input_email").value.trim();

     //* Primero tengo que sacar en que posicion esta el @
    
     var arroba = input_email.indexOf("@");
    
     //*  y sacar la posicion de donde esta el ultimo punto.
     var ultimoPunto = input_email.lastIndexOf(".");
     
     if (arroba === -1 && ultimoPunto === -1) { //! si no existe ni el . , ni el @ te muestra el siguiente mensaje de error
       console.log("%cError: el correo no tiene ni la @ , ni el .", "color: red; font-size: 16px;");
       problemaValidacion = true //? Existe un problema de validacion
     } else if (arroba === -1) { //!si no esta el @ mostramos el error
       console.log("%cError: el correo no tiene un @", "color: red; font-size: 16px;");
       problemaValidacion = true; //? Existe un problema de validacion
     } else if (ultimoPunto === -1) { //! si no existe el punto mostramos el error.
       console.log("%cError: el correo no tiene un .", "color: red; font-size: 16px;");
       problemaValidacion = true; //? Existe un problema de validacion
     } else if (arroba === input_email.length - 1) { //! si el arroba esta en la ultima posicion, es porque despues del arroba no hay ninguna cadena
       console.log(
         "%c Error: el @ no puede estar en la ultima posción",
         "color:red; font-size: 16px;"
         );
         problemaValidacion = true; //? Existe un problema de validacion
       } else if (arroba === 0) {//! si el arroba esta en la posicion 0 es porque delante del arroba no hay una cadena
         console.log(
           "%cError: el @ no puede estar en la primera posición",
           "color: red; font-size: 16px;"
           );
           problemaValidacion = true; //? Existe un problema de validacion
         } else if (ultimoPunto <= arroba + 1) { //! Si entre el punto y el arroba no hay ningun texto muestro el siguiente mensaje 
           console.log("%cError:  No hay texto entre el @ y el punto", "color: red; font-size: 16px; ");
           problemaValidacion = true; //? Existe un problema de validacion
         } else { //* Si no es porque el correo esta bien 
           console.log("%cEl gmail es valido", "color: green; font-size:16px;");
         }
    //! Fin Validacion para el email

    //! Validacion para la fecha 


    let fechaInput = document.getElementById("fechaNacimiento").value.trim(); //* Recogemos la fecha que el usuario ha introducido por teclado

    const partesFecha = fechaInput.split("/");  //* Dividimos la fecha en partes usando el separador /, devuelve un array con 3 indices [0] => dia, [1] => mes , [2] => año

    //console.log(partesFecha);

    if (partesFecha.length === 3){ //* Si la fecha tiene 3 partes 

      const dia = parseInt(partesFecha[0] , 10); //? Tomamos el primer indice del array en este caso el dia y lo pasamos a entero, el 10 indica que la conserviosn se debe hacer en base decimal, para que ponga 8 en decimal
      const mes = parseInt(partesFecha[1] , 10) //? tomamos el segundo indice en este caso el mes y lo pasamos a enteero, el 10 indica que la conversion se debe hacer en base decimal.
      const anio = parseInt(partesFecha[2] , 10) //? Tomamos el tercer indice en este caso el año y lo pasamos a entero, el 10 indica que la conversion se debe hacer en base decimal.

      console.log("Día:", dia, "Mes:", mes, "Año:", anio);


      //todo Empezamos con las validaciones

      if (dia < 1 || dia > 31){ //* Si el dia se pasa del rango de 1 y 31, tenemos un error de validacion 
        problemaValidacion = true;
        console.log("Error de validación: El día está fuera de rango.");

      }

      if (mes < 1 || mes > 12){ //* Si el mes se pasa del rango de 1-12, tenemos un error de validacion
        problemaValidacion = true;
        console.log("Error de validación: El mes está fuera de rango.");
      }

      if (anio.toString().length != 4){ //* Pasamos el año a string si el numero de caracteres de anio es distinto de 4, tenemos un error de validacion (porque el año tiene 4 numeros).
        problemaValidacion = true;
        console.log("Error de validación: El año no tiene cuatro dígitos.");

      }

      if ((mes === 4 || mes === 6 || mes === 9 || mes === 11 ) && dia === 31){ //* Verifica si el mes es abril, junio, septiembre o noviembre, que son los meses que tienen 30 días. Si alguno de estos meses tiene asignado el día 31, marca un error de validación,ya que estos meses solo deben tener hasta 30 días.
        problemaValidacion = true;
        console.log("Error de validación: El mes no tiene 31 días.");

      }
     // Verifica si el mes es febrero (mes 2).
    if (mes === 2){
    // Calcula si el año es bisiesto. Un año es bisiesto si es divisible por 4,
    // excepto aquellos años que son divisibles por 100, a menos que también sean divisibles por 400.
    const esBisiesto = (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0));

    // Si el día es mayor a 29, o si es 29 y el año no es bisiesto (febrero solo tiene 29 días en un año bisiesto),
    // entonces hay un problema de validación.
    if (dia > 29 || (dia === 29 && !esBisiesto)) {
    problemaValidacion = true;
    console.log("Error de validación: Febrero no tiene más de 29 días o no es año bisiesto y se está intentando poner el día 29.");
    }
  } else {
    console.log("La fecha es correcta");
  }

    } else { //* Si la fecha no tiene 3 partes 

      console.log("Error, la fecha no tiene 3 partes");

    }


    //! FIN Validacion para la fecha 



            //!  ------------------------------------- VALIDACION PARA QUE LOS CAMPOS NO ESTEN VACIOS ----------------------------------------
            if (nombreCliente == "" || ApellidosCliente == "" || input_dni == "" || fechaInput == "" || input_email == "" || NombreCoche == "" || marcaCocheInput == ""){
                problemaValidacion = true;
                console.log("%cError: No puede haber ningun campo vacio", "color: orange; font-size:17px;");
              }
      
              //!  ------------------------------------- FIN VALIDACION PARA QUE LOS CAMPOS NO ESTEN VACIOS ----------------------------------------
      

              if (!problemaValidacion){ //* Si no hay problemas de validacion

                //* Comprobamos que no se pueda almacenar una matricula que ya esta almacenada en el array, para ello utilizamos el metodo existeMatricula

                if (!existeMatricula(InputMatriculaCoche)){
                    setCookie("nombre_cliente",nombreCliente ,1);
                    setCookie("apellidos_cliente",ApellidosCliente ,1);
                    setCookie("dni",input_dni ,1);
                    setCookie("fecha",fechaInput ,1);
                    setCookie("email",input_email ,1);
                    setCookie("nombre_coche",NombreCoche ,1);
                    setCookie("marca_coche",marcaCocheInput ,1);
                    abrirVentanaValidacionCorrecta();
                } else { //* Es porque hay un error, porque la matricula ya existe en el array.
                    console.log("%cError: Ya existe un coche con esta matricula", "color: orange; font-size: 16px; ");
                    problemaValidacion = true;
                    abrirVentanaValidacionErronea();
                }
              }else {
                //* controlamos cualquier otro error.
                abrirVentanaValidacionErronea();
              } 

}




//todo metodo que busca por dni y devuelve el nombre del cliente y la matricula del coche.

const buscarDni = () => {
    let dniABuscar = document.getElementById("buscarDniInput").value.trim().toUpperCase();

    let dniUsuarioEncontrado = arrayFormulario.find(jsonDatos => jsonDatos.dni === dniABuscar) //* find() devuelve el primer elemento que cumple con la condición especificada.Cuando alumnoEncontrado es asignado con el resultado de .find(), se convierte en una referencia al objeto del array alumnos que coincidió con el criterio de búsqueda. Dicho objeto tiene una estructura que has definido anteriormente al crearlo, que incluye las propiedades nombre, Apellidos, email, dni, y fecha_nacimiento. Dado que alumnoEncontrado es uno de estos objetos, puedes acceder a sus propiedades directamente usando la notación de punto.

    if (dniUsuarioEncontrado){
        console.log('%cEl DNI ' + dniABuscar + ' es de ' + dniUsuarioEncontrado.nombre, 'color: green; font-size: 20px;');
        document.getElementById("mostrar_mensaje_dni").textContent = " El DNI -> " + dniABuscar + " es del cliente/a " + dniUsuarioEncontrado.nombre + " con vehiculo " + dniUsuarioEncontrado.nombre_coche;

      } else { //* Si no se ha encontrado el dni 
        console.log('%cNo ha sido encontrado un cliente con el DNI ' + dniABuscar, 'color: red; font-size: 20px;');
        document.getElementById("mostrar_mensaje_dni").textContent = " El DNI -> " + dniABuscar + " no ha sido encontrado, verifica el dni y vuelve a intentarlo";
    }

}


//todo metodo que devuelve todos los coches que son de una marca buscada.

const buscarNombreCochesPormarca = () => {
    let arrayNombresCochesMarca = [];
    let MarcaABuscar =  document.getElementById("buscarPorMarcaCoche").value.trim().toUpperCase();

    arrayFormulario.forEach(jsonDatos => {
        if (jsonDatos.marca_coche === MarcaABuscar){
            arrayNombresCochesMarca.push(jsonDatos.nombre_coche)
        }

        if (arrayFormulario.length === 0){
            console.log('%c No se ha encontrado ningun vehiculo de la marca ' + MarcaABuscar, 'color: red; font-size: 20px;');
            document.getElementById("mostrar_mensaje_asignatura").textContent = " No se ha encontrado ningun vehiculo de la marca  " +  MarcaABuscar ;
        }else {
            console.log('%c De la marca ' + MarcaABuscar + ' tenemos el ' + arrayNombresCochesMarca.join(', '), 'color: green; font-size: 20px;');
            document.getElementById("mostrar_mensaje_asignatura").textContent = " De la marca  -> " + MarcaABuscar + " tenemos los siguientes vehiculos " + arrayNombresCochesMarca;
        }

    })
}








//todo borrar por matricula:


function existeMatriculaCoche (comprobarMatricula){
    for (let i = 0; i < arrayFormulario.length; i++) {
        
        if (arrayFormulario[i].matricula === comprobarMatricula){
            return i;
        }
    }
    return -1;
}


function borrarPorMatricula(){

    let inputMatriculaCoche = document.getElementById("inputMatricula").value.trim().toUpperCase();
    /* console.log(inputMatriculaCoche); */

    //* Sacamos el indice donde esta la matricula 

    let indiceMatriculaBorra = existeMatriculaCoche(inputMatriculaCoche);

    if (indiceMatriculaBorra !== -1){ //* Es porque existe la matricula 
        document.getElementById("mostrar_mensaje_eliminado").textContent = "La matricula  " + inputMatriculaCoche + " ha sido  eliminada con exito, cliente borrado correctamente.";
        arrayFormulario.splice(indiceMatriculaBorra,1);
        console.log(arrayFormulario);

    } else {
        document.getElementById("mostrar_mensaje_eliminado").textContent = "***** Error no se ha podido borrar el cliente porque la matricula  " + inputMatriculaCoche + " no existe.";
    }


}




//todo ventanan cuando hay 1 error, como minimo.
  function abrirVentanaValidacionErronea(){

    const url = "problemas_validacion.html";
  
      // Dimensiones de la ventana que quieres abrir
      var ancho = 550;
      var alto = 800;
  
      // Calcula la posición x e y para centrar la ventana
      var posicionX = (window.screen.width / 2) - (ancho / 2);
      var posicionY = (window.screen.height / 2) - (alto / 2);
  
      // Asegúrate de que las posiciones no sean negativas
      posicionX = posicionX < 0 ? 0 : posicionX;
      posicionY = posicionY < 0 ? 0 : posicionY;
  
      // Abre la nueva ventana centrada
      var nuevaVentana = window.open(url, "ventana1", "width=" + ancho + ",height=" + alto + ",left=" + posicionX + ",top=" + posicionY + ",scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");
  
      // Enfoca la nueva ventana en caso de que el navegador lo permita
      if (window.focus) {
          nuevaVentana.focus();
      }
  
      console.log('%c ***** Error no se ha podido almacenar el usuario en el vector, verifica tus datos con los errores mostrados por consola e intenta de nuevo  ', 'color: red; font-size: 16px;');
  
  }


 //todo Funcion que comprueba si una matricula esta ya almacenada en el array.

 function existeMatricula(MatriculaAComprobar){

    for (let i = 0; i < arrayFormulario.length; i++) {
        
        if (arrayFormulario[i].matricula === MatriculaAComprobar){
            return true; //* //* Devuelvo true, he encontrado la matricula por lo tanto esta ya almacenada, no se puede repetir
        }
        
    }
    return false; //* Devuelve false porque no esta almacenada en el array.
}




//todo Recorrer las cookies almacenadas
function mostrarCookies() {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        let [name, value] = cookie.split('=');
        console.log(`Clave: ${name}, Valor: ${value}`);
    }  
}

function existeCookie(){

    let comprobar_cookie = document.getElementById("existencia_cookie").value; //? Almaceno en la variable comprobar_cookie  lo que escribe el usuario por el input con nombre existencia_cookie, basicamente escribe la cookie que quiere comprobar si existe o no.

    if (getCookie(comprobar_cookie) != ""){ //* Si el valor que almacena la cookie que escribe el usuario por el input NO esta vacia, es porque existe
      console.log('%c La cookie ' + comprobar_cookie + " existe", 'color: green; font-size: 20px;');
    } else { //! Si no, Es porque la cookie no existe
      console.log('%cLa cookie ' + comprobar_cookie + " no existe", 'color: red; font-size: 20px;');
    }
    
  }


 


//todo Eliminar las cookies, que en realidad no la estamos borrando, solamente estamos quitando el valor de esa cookie, pero el nombre de la cookie sigue existiendo. 
function eliminar_cookies(){
    setCookie("nombre_cliente","");
    setCookie("apellidos_cliente","");
    setCookie("dni","");
    setCookie("fecha","");
    setCookie("email","");
    setCookie("nombre_coche","");
  console.log('%cSe han borrado las cookies de forma exitosa', 'color: green; font-size: 20px;');
}



  //TODO TODOS LOS METODOS PARA Validacion_correcta.html

  function abrirVentanaValidacionCorrecta(){

    const url = "validacion_correcta.html";
  
      // Dimensiones de la ventana que quieres abrir
      var ancho = 550;
      var alto = 800;
  
      // Calcula la posición x e y para centrar la ventana
      var posicionX = (window.screen.width / 2) - (ancho / 2);
      var posicionY = (window.screen.height / 2) - (alto / 2);
  
      // Asegúrate de que las posiciones no sean negativas
      posicionX = posicionX < 0 ? 0 : posicionX;
      posicionY = posicionY < 0 ? 0 : posicionY;
  
      // Abre la nueva ventana centrada
      var nuevaVentana = window.open(url, "ventana1", "width=" + ancho + ",height=" + alto + ",left=" + posicionX + ",top=" + posicionY + ",scrollbars=YES,toolbar=NO,status=NO,resizable=YES,menubar=NO,location=NO,directories=NO");
  
      // Enfoca la nueva ventana en caso de que el navegador lo permita
      if (window.focus) {
          nuevaVentana.focus();
      }
  
  }


  //! ------------------------------ FUNCION QUE DEVUELVE LO QUE ALMACENAS EN LOS INPUTS EN OTRA PAGINA (VALIDACION_CORRECTA.HTML) -----------
function mostrarDatosValidacionCorrecta(){
    //todo Devolvemos lo que almacenan los inputs. 
  
    //! Eliminar los getCookies
    return{
  
      nombre:document.getElementById("nombreCliente").value.trim(),
      apellidos:document.getElementById("apellidosCliente").value.trim(),
      dni:document.getElementById("dni").value.trim().toUpperCase(),
      nombre_coche:document.getElementById("nombreVehiculo").value.trim(),
      matricula: document.getElementById("matriculaVehiculo").value.trim().toUpperCase(),
      email:document.getElementById("input_email").value.trim(),
      fechaNacimiento:document.getElementById("fechaNacimiento").value.trim(),
      tipo_coche:document.querySelector("input[name='tipoModelo']:checked").value.toUpperCase(),
      marca_coche:document.getElementById("marcaVehiculo").value.trim().toUpperCase()
  
     /*  nombre:getCookie("nombre"),
      apellidos:getCookie("apellidos"),
      dni:getCookie("dni"),
      edad:getCookie("edad"),
      telefono:getCookie("telefono"),
      email:getCookie("email"),
      fechaNacimiento:getCookie("fecha_nacimiento"),
      asignatura:getCookie("asignatura") */
    };
  }

  function añadirDatosArrayFormulario(datos){
    let jsonDatos = {
      nombre:datos.nombre,
      apellidos:datos.apellidos,
      dni:datos.dni,
      nombre_coche:datos.nombre_coche,
      matricula:datos.matricula,
      email:datos.email,
      fecha_nacimiento: datos.fechaNacimiento,
      tipo_coche:datos.tipo_coche,
      marca_coche:datos.marca_coche
    };
  
    //todo cada vez que le damos a guardar añadimos al vector el json de ese usuario: 
  
    arrayFormulario.push(jsonDatos); //* Añadimos al array el json con los datos de la ventana emergente, cuando el usuario pulsa el boton de si.
    console.log(arrayFormulario);
    document.getElementById("mensaje_añadido_user_array").textContent = "El usuario " + jsonDatos.nombre + " ha sido añadido al vector exitosamente";
  }
  



