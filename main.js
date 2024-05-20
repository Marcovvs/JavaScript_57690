while (true){
  let saldo = parseInt(prompt("Bienvenido a SUBE... 1) Ingresá tu saldo restante para continuar con la recarga:"));
  
  while (isNaN(saldo)){
      alert("Carácter desconocido, intentá nuevamente.");
      saldo = parseInt(prompt("Ingresá tu saldo restante:"));
  }
  while (saldo < -500 || saldo > 10000){
      alert("ALERTA. El saldo mínimo es $-500 y máximo $10.000, Intentá nuevamente.");
      saldo = parseInt(prompt("Ingresá tu saldo restante:"));
  }
  
  function saldoCheck(saldo){
      if (saldo > 0 && saldo < 10000){
          alert(`Perfecto, tenés ${saldo} en tu tarjeta SUBE. Continuar.`);
      } else if (saldo === 0) {
          alert("Estás en 0, ni más ni menos. Continuar.");
      } else if (saldo < 0 && saldo >= -500){
          alert("Cuidado, estás en negativo. El importe se verá afectado... Continuar.");
      } else {
          alert("**Saldo desconocido, intentá nuevamente.**");
      }
  }
  
  saldoCheck(saldo);
  
  const opciones = [
      { plan: "Minimo", importe: 500 },
      { plan: "Basico", importe: 1500 },
      { plan: "Estandar", importe: 2500 },
      { plan: "Premium", importe: 5000 }
  ];
  
  function elegirPlan(){
      let opcionUser = prompt(`Elegí tu plan de carga ideal:
      Mínimo($500). // Básico($1500). // Estándar($2500). // Premium($5000).
      Escribí 'Otro' para agregar otro importe.`).toLowerCase().trim();

      let elegido = opciones.find(plan => plan.plan.toLowerCase() === opcionUser);
      let importe = 0;
      
      if (opcionUser === "otro"){
          importe = parseInt(prompt("¿Cuánta plata querés recargar?"));
          if (isNaN(importe) || importe <= 0) {
              alert("Importe inválido. Intentá nuevamente.");
              return;
          }
          alert(`Ingresaste un monto de $${importe}. Aceptar para continuar`);
      } else if (elegido){
          importe = elegido.importe;
          alert(`Acreditaremos el plan '${elegido.plan}' con un importe de '$${elegido.importe}'. Aceptar para continuar.`);
      } else {
          alert(`Actualmente el plan '${opcionUser}' no existe.`);
          return;
      }

      const nuevoSaldo = saldo + importe;
      if (nuevoSaldo < 0){
          alert("**Tu saldo es negativo. La carga mínima aceptada es aquella que te deje en $0 o más.**");
      } else if (nuevoSaldo > 10000){
          alert("**El saldo máximo permitido es de $10000. Por favor, ingresa un importe menor.**");
      } else{
          alert(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ*...recargando ${importe} pesos...*ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSaldo final: ${nuevoSaldo} pesos.`);
          saldo = nuevoSaldo;
      }
  }

  elegirPlan();

  let otraRecarga = confirm("¿Querés realizar otra recarga?");
  while (otraRecarga){
      let importe2 = parseInt(prompt(`Tu saldo actual es de: $${saldo}... ¿Cuánto querés cargar?`));
      if (isNaN(importe2) || importe2 <= 0){
          alert("Importe inválido. Intentá nuevamente.");
          continue;
      }

      const nuevoSaldo = saldo + importe2;
      if (nuevoSaldo > 10000){
          alert("**El saldo máximo permitido es de $10000. Por favor, ingresa un importe menor.**");
          continue;
      }
      alert(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ*...recargando $${importe2} pesos...*ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSaldo final: $${nuevoSaldo} en tu tarjeta SUBE.`);
      saldo = nuevoSaldo;
      otraRecarga = confirm("¿Querés realizar otra recarga?");
  }
}