document.addEventListener("DOMContentLoaded", function() {
    const recargar = document.querySelector("#recargar");
    const saldoInicial = document.querySelector("#saldoInicial");
    const inputContainer = document.querySelector("#input-container");
    const historialSection = document.querySelector("#historialSection");
    const historialRecargasDiv = document.querySelector("#historialRecargas");
    const eliminarHistorialBtn = document.querySelector("#eliminarHistorialBtn");
    const verModelosButton = document.querySelector("#verModelos");
    const modelosSection = document.querySelector("#modelosSection");
    const carritoCantidad = document.querySelector("#carritoCantidad");
    const modalCarritoContenido = document.querySelector("#modalCarritoContenido");

    let seccionesVisibles = false;
    let modelosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let modelos = [];

    if (!localStorage.getItem("historialRecargas")) {
        localStorage.setItem("historialRecargas", JSON.stringify([]));
    }

    recargar.addEventListener("click", toggleSecciones);
    saldoInicial.className = "text-white";

    function toggleSecciones() {
        seccionesVisibles = !seccionesVisibles;
        if (seccionesVisibles) {
            mostrarInputSaldo();
            historialSection.style.display = "block";
            mostrarHistorial();
        }else {
            inputContainer.innerHTML = "";
            saldoInicial.textContent = "";
            historialSection.style.display = "none";
        }
    }

    function mostrarInputSaldo() {
        const h2 = document.createElement("h2");
        h2.textContent = "Ingresá tu saldo restante:";
        h2.className = "text-white";
        const input = document.createElement("input");
        input.className = "me-5 hvr-box-shadow-inset";
        input.type = "number";
        input.id = "saldoInput";
        input.placeholder = "0";
        const btnConfirmar = document.createElement("button");
        btnConfirmar.textContent = "Confirmar";
        btnConfirmar.className = "btn btn-primary btn-outline-light hvr-grow";
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
            }else {
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
        }else if (saldo === 0) {
            saldoInicial.textContent = "Estás en 0, ni más ni menos. Continuá eligiendo tu 'plan de recarga' ideal:";
        }else if (saldo < 0 && saldo >= -500) {
            saldoInicial.textContent = "Cuidado, estás en negativo. El importe se verá afectado... Continuá eligiendo tu 'plan de recarga' ideal:";
        }else {
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
            btnPlan.className = "btn btn-secondary m-2 hvr-float";
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
        }else if (nuevoSaldo > 10000) {
            alert("**El saldo máximo permitido es de $10000. Por favor, ingresa un importe menor.**");
        }else {
            alert(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ*...recargando $${importe} pesos...*ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSaldo final: $${nuevoSaldo} pesos en tu tarjeta SUBE.`);
            saldo = nuevoSaldo;

            const historialRecargas = JSON.parse(localStorage.getItem("historialRecargas")) || [];
            const nuevaRecarga = {
                monto: importe,
                fecha: new Date().toLocaleString(),
                saldo: nuevoSaldo
            };
            historialRecargas.push(nuevaRecarga);
            localStorage.setItem("historialRecargas", JSON.stringify(historialRecargas));

            mostrarInputSaldo();
            mostrarHistorial();

            let otraRecarga = confirm("¿Querés realizar otra recarga?");
            if (otraRecarga) {
                saldoInicial.textContent = `Saldo actual: $${nuevoSaldo} pesos en tu tarjeta SUBE. ¿Cuánto querés recargar?`;
            }else {
                saldoInicial.textContent = `Saldo actual: $${nuevoSaldo} pesos en tu tarjeta SUBE.`;
            }
        }
    }

    function mostrarHistorial() {
        const historialRecargas = JSON.parse(localStorage.getItem("historialRecargas")) || [];
        if (historialRecargas.length === 0) {
            historialRecargasDiv.innerHTML = "<p>No hay recargas en el historial.</p>";
        } else {
            historialRecargasDiv.innerHTML = historialRecargas.map(recarga =>
                `<div class="recarga bg-dark p-2 mb-2 rounded">
                    <p>Monto: $${recarga.monto}</p>
                    <p>Fecha: ${recarga.fecha}</p>
                    <p>Saldo después de la recarga: $${recarga.saldo}</p>
                </div>`).join('');
        }
    }

    eliminarHistorialBtn.addEventListener("click", function() {
        localStorage.removeItem("historialRecargas");
        historialRecargasDiv.innerHTML = "No hay recargas en el historial.";
        historialRecargasDiv.className = "mb-3 text-white"
    });

    fetch('modelos.json')
        .then(response => response.json())
        .then(data => {
            modelos = data;
            actualizarCarrito();
            actualizarCarritoCantidad();
            renderizarCarrito();
        })
        .catch(error => console.error('Error', error));

    verModelosButton.addEventListener("click", function() {
        if (modelosSection.style.display === "none" || modelosSection.style.display === "") {
            modelosSection.style.display = "block";
            verModelosButton.textContent = "OCULTAR MODELOS";
        }else {
            modelosSection.style.display = "none";
            verModelosButton.textContent = "VER MODELOS";
        }
    });

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
            document.querySelector("#totalPrecio").textContent = "Total: $0";
        }else {
            modelosEnCarrito.forEach((modelo, index) => {
                const modeloHTML =
                `<div class="producto-en-carrito bg-primary mb-2 rounded p-2" data-index="${index}">
                        <img src="${modelo.imagen}" alt="${modelo.titulo}" class="img-fluid" width="50">
                        <div>
                            <h6 class="mt-2 mb-0">${modelo.titulo}</h6>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="mb-1">Precio: $${modelo.precio}</p>
                                <button class="btn btn-danger btn-eliminar mb-1 hvr-wobble-horizontal">Eliminar</button>
                            </div>
                        </div>
                    </div>`;
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

    const datainfo = document.querySelector("#datainfo");

    const sweetAlertExit = () => {
        Swal.fire({
            title: "<strong>Tener en cuenta:</strong>",
            icon: "info",
            html:
            `<ul class="text-start">
                <li>El límite del saldo es de $10.000</li>
                <li>El mínimo de saldo es de $-500</li>
                <li>El importe máximo es de $5.000</li>
                <li>No utilizar 'símbolo peso' ($), puntos, ni comas.</li>
                <li>La carga mínima aceptada es aquella que da $0.</li>
            </ul>`,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: `Ok!`,
            confirmButtonColor: `gray`,
          });
    }

    datainfo.addEventListener("click", sweetAlertExit)
});
