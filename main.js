
while(true){

let saldo=parseInt(prompt("Bienvenido a SUBE. Ingresá tu saldo restante para continuar con la recarga:"))
while (isNaN(saldo)){
  alert("Carácter desconocido, intentá nuevamente.");
  saldo   = parseInt(prompt("Ingresá tu saldo restante:"));
}
while (saldo<-500 || saldo>10000){
  alert("El saldo mínimo es $-500 y máximo $10.000, Intentá nuevamente.");
  saldo = parseInt(prompt("Ingresá tu saldo restante:"));
}

function saldoCheck(saldo){
  if (saldo > 0 && saldo < 10000){
      alert(`Perfecto, tenés ${saldo}. Continuar.`);
  } else if (saldo === 0){
      alert("Estás en 0, ni más ni menos. Continuar.");
  } else if (saldo < 0 && saldo>=-500){
      alert("Cuidado, estás en negativo. El importe se verá afectado... Continuar.");
  } else{
      alert("Saldo desconocido, intentá nuevamente.");
  }
}
saldoCheck(saldo)

let importe=parseInt(prompt("¿Cuánta plata querés cargar?"))

while (isNaN(importe)){
  alert("Por favor, ingresa un número válido para el importe.");
  importe = parseInt(prompt("¿Cuánta plata querés cargar?"));
}
while (importe>5000){
  alert("El importe máximo permitido es de $5.000. Por favor, ingresa un importe menor.");
  importe = parseInt(prompt("¿Cuánta plata querés cargar?"));
}

const conversion = saldo + importe
if(importe+saldo<=-1){
  alert("Tu saldo es negativo. La carga mínima aceptada es aquella que te deje en $0 o más.");
}else{
  alert(`Recargando ${importe} pesos... Saldo final: ${conversion} pesos.`);
}

confirm ("Queres realizar otra recarga?");

while (confirm=true){
  importe2 = parseInt(prompt(`Tu saldo es de: ${conversion} pesos... cuanto queres cargar?`));
  const conversion2 = conversion + importe2
  if(importe2<5000){
    alert(`Recargando ${importe2} pesos... Saldo final: ${conversion2} pesos.`)
    break;
  }else{
    alert("Intenta nuevamente.")
  }
}break;
}