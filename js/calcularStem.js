function calcularVelocidadOrbital() {
  
 
const G = 6.67430e-11;
  
 
const Ms = 1.989e30;
  
 
const r = 1.5e11;

  

const v = Math.sqrt((G * Ms) / r);

  

 var d=document.getElementById("resultadoA");
    d.innerHTML='  La velocidad orbital de la Tierra es:  '+v+'  m/s';


return v;
}

