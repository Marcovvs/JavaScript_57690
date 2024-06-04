// const recargar = document.querySelector("#recargar");
// recargar.addEventListener("click", verRecarga);

// function verRecarga () {
//     alert("hola");
// }


// while (true){
//   let saldo = parseInt(prompt("Bienvenido a SUBE... 1) Ingresá tu saldo restante para continuar con la recarga:"));
  
//   while (isNaN(saldo)){
//       alert("Carácter desconocido, intentá nuevamente.");
//       saldo = parseInt(prompt("Ingresá tu saldo restante:"));
//   }
//   while (saldo < -500 || saldo > 10000){
//       alert("ALERTA. El saldo mínimo es $-500 y máximo $10.000, Intentá nuevamente.");
//       saldo = parseInt(prompt("Ingresá tu saldo restante:"));
//   }
  
//   function saldoCheck(saldo){
//       if (saldo > 0 && saldo < 10000){
//           alert(`Perfecto, tenés $${saldo} en tu tarjeta SUBE. Continuar.`);
//       } else if (saldo === 0) {
//           alert("Estás en 0, ni más ni menos. Continuar.");
//       } else if (saldo < 0 && saldo >= -500){
//           alert("Cuidado, estás en negativo. El importe se verá afectado... Continuar.");
//       } else {
//           alert("**Saldo desconocido, intentá nuevamente.**");
//       }
//   }
  
//   saldoCheck(saldo);
  
//   const opciones = [
//       { plan: "Minimo", importe: 500 },
//       { plan: "Basico", importe: 1500 },
//       { plan: "Estandar", importe: 2500 },
//       { plan: "Premium", importe: 5000 }
//   ];
  
//   function elegirPlan(){
//       let opcionUser = prompt(`Elegí tu plan de carga ideal:
//       Mínimo($500). // Básico($1500). // Estándar($2500). // Premium($5000).
//       Escribí 'Otro' para agregar otro importe.`).toLowerCase().trim();

//       let elegido = opciones.find(plan => plan.plan.toLowerCase() === opcionUser);
//       let importe = 0;
      
//       if (opcionUser === "otro"){
//           importe = parseInt(prompt("¿Cuánta plata querés recargar?"));
//           if (isNaN(importe) || importe <= 0) {
//               alert("Importe inválido. Intentá nuevamente.");
//               return;
//           }
//           alert(`Ingresaste un monto de $${importe}. Aceptar para continuar`);
//       } else if (elegido){
//           importe = elegido.importe;
//           alert(`Acreditaremos el plan '${elegido.plan}' con un importe de '$${elegido.importe}'. Aceptar para continuar.`);
//       } else {
//           alert(`Actualmente el plan '${opcionUser}' no existe.`);
//           return;
//       }

//       const nuevoSaldo = saldo + importe;
//       if (nuevoSaldo < 0){
//           alert("**Tu saldo es negativo. La carga mínima aceptada es aquella que te deje en $0 o más.**");
//       } else if (nuevoSaldo > 10000){
//           alert("**El saldo máximo permitido es de $10000. Por favor, ingresa un importe menor.**");
//       } else{
//           alert(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ*...recargando $${importe} pesos...*ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSaldo final: $${nuevoSaldo} pesos en tu tarjeta SUBE.`);
//           saldo = nuevoSaldo;
//       }
//   }

//   elegirPlan();

//   let otraRecarga = confirm("¿Querés realizar otra recarga?");
//   while (otraRecarga){
//       let importe2 = parseInt(prompt(`Tu saldo actual es de: $${saldo}... ¿Cuánto querés cargar?`));
//       if (isNaN(importe2) || importe2 <= 0){
//           alert("Importe inválido. Intentá nuevamente.");
//           continue;
//       }

//       const nuevoSaldo = saldo + importe2;
//       if (nuevoSaldo > 10000){
//           alert("**El saldo máximo permitido es de $10000. Por favor, ingresa un importe menor.**");
//           continue;
//       }
//       alert(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ*...recargando $${importe2} pesos...*ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSaldo final: $${nuevoSaldo} en tu tarjeta SUBE.`);
//       saldo = nuevoSaldo;
//       otraRecarga = confirm("¿Querés realizar otra recarga?");
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const recargar = document.querySelector("#recargar");
//     recargar.addEventListener("click", verRecarga);

//     function verRecarga() {
//         let saldo = parseInt(prompt("Ingresá tu saldo restante para continuar con la recarga:"));

//         while (isNaN(saldo)){
//             alert("Carácter desconocido, intentá nuevamente.");
//             saldo = parseInt(prompt("Ingresá tu saldo restante:"));
//         }
//         while (saldo < -500 || saldo > 10000){
//             alert("ALERTA. El saldo mínimo es $-500 y máximo $10.000, Intentá nuevamente.");
//             saldo = parseInt(prompt("Ingresá tu saldo restante:"));
//         }

//         function saldoCheck(saldo) {
//             if (saldo > 0 && saldo < 10000){

//                 const saldoIncial = document.querySelector("#saldoInicial");
//                 saldoInicial.textContent = `Perfecto, tenés $${saldo} en tu tarjeta SUBE. Continuar.`;

//                 // alert(`Perfecto, tenés $${saldo} en tu tarjeta SUBE. Continuar.`);
//             } else if (saldo === 0) {
//                 alert("Estás en 0, ni más ni menos. Continuar.");
//             } else if (saldo < 0 && saldo >= -500){
//                 alert("Cuidado, estás en negativo. El importe se verá afectado... Continuar.");
//             } else {
//                 alert("**Saldo desconocido, intentá nuevamente.**");
//             }
//         }

//         saldoCheck(saldo);

//         const opciones = [
//             { plan: "Minimo", importe: 500 },
//             { plan: "Basico", importe: 1500 },
//             { plan: "Estandar", importe: 2500 },
//             { plan: "Premium", importe: 5000 }
//         ];

//         function elegirPlan() {
//             let opcionUser = prompt(`Elegí tu plan de carga ideal:
//             Mínimo($500). // Básico($1500). // Estándar($2500). // Premium($5000).
//             Escribí 'Otro' para agregar otro importe.`).toLowerCase().trim();

//             let elegido = opciones.find(plan => plan.plan.toLowerCase() === opcionUser);
//             let importe = 0;

//             if (opcionUser === "otro"){
//                 importe = parseInt(prompt("¿Cuánta plata querés recargar?"));
//                 if (isNaN(importe) || importe <= 0) {
//                     alert("Importe inválido. Intentá nuevamente.");
//                     return;
//                 }
//                 alert(`Ingresaste un monto de $${importe}. Aceptar para continuar`);
//             } else if (elegido){
//                 importe = elegido.importe;
//                 alert(`Acreditaremos el plan '${elegido.plan}' con un importe de '$${elegido.importe}'. Aceptar para continuar.`);
//             } else {
//                 alert(`Actualmente el plan '${opcionUser}' no existe.`);
//                 return;
//             }

//             const nuevoSaldo = saldo + importe;
//             if (nuevoSaldo < 0){
//                 alert("**Tu saldo es negativo. La carga mínima aceptada es aquella que te deje en $0 o más.**");
//             } else if (nuevoSaldo > 10000){
//                 alert("**El saldo máximo permitido es de $10000. Por favor, ingresa un importe menor.**");
//             } else{
//                 alert(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ*...recargando $${importe} pesos...*ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSaldo final: $${nuevoSaldo} pesos en tu tarjeta SUBE.`);
//                 saldo = nuevoSaldo;
//             }
//         }

//         elegirPlan();

//         let otraRecarga = confirm("¿Querés realizar otra recarga?");
//         while (otraRecarga){
//             let importe2 = parseInt(prompt(`Tu saldo actual es de: $${saldo}... ¿Cuánto querés cargar?`));
//             if (isNaN(importe2) || importe2 <= 0){
//                 alert("Importe inválido. Intentá nuevamente.");
//                 continue;
//             }

//             const nuevoSaldo = saldo + importe2;
//             if (nuevoSaldo > 10000){
//                 alert("**El saldo máximo permitido es de $10000. Por favor, ingresa un importe menor.**");
//                 continue;
//             }
//             alert(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ*...recargando $${importe2} pesos...*ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSaldo final: $${nuevoSaldo} en tu tarjeta SUBE.`);
//             saldo = nuevoSaldo;
//             otraRecarga = confirm("¿Querés realizar otra recarga?");
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const recargar = document.querySelector("#recargar");
    const saldoInicial = document.querySelector("#saldoInicial");
    const inputContainer = document.querySelector("#input-container");

    recargar.addEventListener("click", mostrarInputSaldo);

    saldoInicial.className = "text-white";

    function mostrarInputSaldo() {
        
        const h2 = document.createElement("h2");
        h2.textContent = "Ingresá tu saldo restante:";
        h2.className = "text-white"
        const input = document.createElement("input");
        input.className = "me-5";
        input.type = "number";
        input.id = "saldoInput";
        input.placeholder = "0";
        const btnConfirmar = document.createElement("button");
        btnConfirmar.textContent = "Confirmar";
        btnConfirmar.className = "btn btn-primary btn-outline-light";
        btnConfirmar.addEventListener("click", verRecarga);

        inputContainer.innerHTML = "";
        inputContainer.appendChild(h2);
        inputContainer.appendChild(input);
        inputContainer.appendChild(btnConfirmar);
    }

    function verRecarga() {
        const saldoInput = document.querySelector("#saldoInput");
        let saldo = parseInt(saldoInput.value);

        if (isNaN(saldo) || saldo < -500 || saldo > 10000) {
            if (isNaN(saldo)) {
                alert("Carácter desconocido, intentá nuevamente.");
            } else {
                alert("ALERTA. El saldo mínimo es $-500 y máximo $10.000, Intentá nuevamente.");
            }
            return;
        }

        saldoCheck(saldo);
        mostrarPlanes(saldo);
    }

    function saldoCheck(saldo) {
        if (saldo > 0 && saldo < 10000) {
            saldoInicial.textContent = `Perfecto, tenés $${saldo} en tu tarjeta SUBE. Continuá eligiendo tu 'plan de recarga' ideal:`;
        } else if (saldo === 0) {
            saldoInicial.textContent = "Estás en 0, ni más ni menos. Continuá eligiendo tu 'plan de recarga' ideal:";
        } else if (saldo < 0 && saldo >= -500) {
            saldoInicial.textContent = "Cuidado, estás en negativo. El importe se verá afectado... Continuá eligiendo tu 'plan de recarga' ideal:";
        } else {
            saldoInicial.textContent = "**Saldo desconocido, intentá nuevamente.**";
        }
    }

    function mostrarPlanes(saldo) {
        const opciones = [
            { plan: "Mínimo", importe: 500 },
            { plan: "Básico", importe: 1500 },
            { plan: "Estándar", importe: 2500 },
            { plan: "Premium", importe: 5000 }
        ];

        const planesContainer = document.createElement("div");
        planesContainer.id = "planesContainer";

        opciones.forEach(opcion => {
            const btnPlan = document.createElement("button");
            btnPlan.textContent = `${opcion.plan} ($${opcion.importe})`;
            btnPlan.className = "btn btn-secondary m-2";
            btnPlan.addEventListener("click", () => acreditarSaldo(saldo, opcion.importe));
            planesContainer.appendChild(btnPlan);
        });

        const btnOtro = document.createElement("button");
        btnOtro.textContent = "Otro";
        btnOtro.className = "btn btn-secondary m-2";
        btnOtro.addEventListener("click", () => {
            const importe = parseInt(prompt("¿Cuánta plata querés recargar?"));
            if (isNaN(importe) || importe <= 0) {
                alert("Importe inválido. Intentá nuevamente.");
                return;
            }
            acreditarSaldo(saldo, importe);
        });
        planesContainer.appendChild(btnOtro);

        inputContainer.innerHTML = "";
        inputContainer.appendChild(planesContainer);
    }

    function acreditarSaldo(saldo, importe) {
        const nuevoSaldo = saldo + importe;
        if (nuevoSaldo < 0) {
            alert("**Tu saldo es negativo. La carga mínima aceptada es aquella que te deje en $0 o más.**");
        } else if (nuevoSaldo > 10000) {
            alert("**El saldo máximo permitido es de $10000. Por favor, ingresa un importe menor.**");
        } else {
            alert(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ*...recargando $${importe} pesos...*ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSaldo final: $${nuevoSaldo} pesos en tu tarjeta SUBE.`);
            saldo = nuevoSaldo;

            mostrarInputSaldo();

            let otraRecarga = confirm("¿Querés realizar otra recarga?");
            if (otraRecarga) {
                saldoInicial.textContent = `Saldo actual: $${nuevoSaldo} pesos en tu tarjeta SUBE. ¿Cuánto querés recargar?`;
            } else {
                saldoInicial.textContent = `Saldo actual: $${nuevoSaldo} pesos en tu tarjeta SUBE.`;
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const verModelosButton = document.querySelector("#verModelos");
    const modelosSection = document.querySelector("#modelosSection");
    const carritoCantidad = document.querySelector("#carritoCantidad");
    const modalCarritoContenido = document.querySelector("#modalCarritoContenido");

    let modelosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

verModelosButton.addEventListener("click", function() {
    if (modelosSection.style.display === "none" || modelosSection.style.display === "") {
            modelosSection.style.display = "block";
            verModelosButton.textContent = "OCULTAR MODELOS";
    }else {
            modelosSection.style.display = "none";
            verModelosButton.textContent = "VER MODELOS";
    }
});

    const modelos = [
        {
            id: "sube-01",
            titulo: "SUBE EDICIÓN: NEGRO",
            imagen: "/sube-modelo.jpg",
            precio: 500,
        },
        {
            id: "sube-02",
            titulo: "SUBE EDICIÓN: BLANCO",
            imagen: "/sube-modelo.jpg",
            precio: 500,
        },
        {
            id: "sube-03",
            titulo: "SUBE EDICIÓN: COPA AMERICA 2024",
            imagen: "/sube-modelo.jpg",
            precio: 1000,
        },
        {
            id: "sube-04",
            titulo: "SUBE EDICIÓN: ARGENTINA",
            imagen: "/sube-modelo.jpg",
            precio: 1000,
        }
    ];
    
    actualizarCarrito();

    function actualizarCarrito() {
        const btnAgregar = document.querySelectorAll(".producto-agregar");
        btnAgregar.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        });
    }

    function agregarAlCarrito(e) {
        const id = e.currentTarget.id;
        const modeloSeleccionado = modelos.find(modelo => modelo.id === id);

        if (modeloSeleccionado) {
            modelosEnCarrito.push(modeloSeleccionado);
            localStorage.setItem("carrito", JSON.stringify(modelosEnCarrito));
            console.log(modelosEnCarrito);
            actualizarCarritoCantidad();
            renderizarCarrito();
        }else {
            alert("Modelo no encontrado");
        }
    }

    function actualizarCarritoCantidad() {
        carritoCantidad.textContent = modelosEnCarrito.length;
    }

    function calcularTotalPrecio() {
        return modelosEnCarrito.reduce((total, modelo) => total + modelo.precio, 0);
    }

    function renderizarCarrito() {
        modalCarritoContenido.innerHTML = "";
        if (modelosEnCarrito.length === 0) {
            modalCarritoContenido.innerHTML = "<p>No hay productos en el carrito.</p>";
        }else {
            modelosEnCarrito.forEach(modelo => {
            const modeloHTML = `
                <div class="producto-en-carrito">
                    <img src="${modelo.imagen}" alt="${modelo.titulo}" class="img-fluid" width="50">
                    <div>
                        <h6>${modelo.titulo}</h6>
                        <p>Precio: $${modelo.precio}</p>
                        <button class="btn btn-danger btn-eliminar mb-2">Eliminar</button>
                    </div>
                </div>
            `;
            modalCarritoContenido.insertAdjacentHTML("beforeend", modeloHTML);
        });

            const totalPrecio = calcularTotalPrecio();
            document.querySelector("#totalPrecio").textContent = `Total: $${totalPrecio}`;

            const botonesEliminar = document.querySelectorAll(".btn-eliminar");
            botonesEliminar.forEach(boton => {
                boton.addEventListener("click", eliminarDelCarrito);
            });
        }
    }

    function eliminarDelCarrito(e) {
        const index = e.currentTarget.closest(".producto-en-carrito").dataset.index;
        modelosEnCarrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(modelosEnCarrito));
        actualizarCarritoCantidad();
        renderizarCarrito();
    }

    actualizarCarrito();
    actualizarCarritoCantidad();
    renderizarCarrito();
});