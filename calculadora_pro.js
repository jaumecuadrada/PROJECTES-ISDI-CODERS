let arrayArguments=[];
let arraysumes=[];
let arrayrestes=[];
let arraymultiplicacions=[];
let arraydivisions=[];
let sortir=' ';
let sortir2=' ';
var i=0;

do{
  do{
      arrayArguments[i] = parseFloat(prompt("Introdueix el nombre: "+(i+1)), 10);
      if (isNaN(arrayArguments[i])){
        (alert(`Dada número ${i+1} introduïda no és un nombre... torna-ho a intentar.`));
      }else{
        i++;
        sortir = confirm("Vols introduïr més elements?\n-SI (Prem acceptar)\n-NO (Prem cancelar)");
      }
  }while(sortir==true);  
  
  i=0;

  function suma(){
    let acumula=0
    for (let i=0; i<arguments.length ; i++){
      acumula += arguments[i];
    }
    return acumula;
  }

  function resta(){
    let acumula=arguments[0];
    for (let i=1; i<arguments.length ; i++){
      acumula -= arguments[i];
    }
    return acumula;
  }

  function multiplicacio(){
    let acumula=arguments[0];
    for (let i=1; i<arguments.length ; i++){
      acumula *= arguments[i];
    }
    return acumula; 
  }

  function divisio(){
    let acumula=arguments[0];
    for (let i=1; i<arguments.length ; i++){
      acumula /= arguments[i];
    }
    return acumula; 
  }

  function calculadora(){
    for (let i=0; i<arguments.length ; i++){
      
    }
    alert (`El resultat de la suma és: ${suma.apply(this, arguments).toFixed(3)} 
    \n El resultat de la resta és ${resta.apply(this, arguments).toFixed(3)} 
    \n El resultat de la multiplicació és ${multiplicacio.apply(this, arguments).toFixed(3)} 
    \n El resultat de la divisió és ${divisio.apply(this, arguments).toFixed(3)} `);
    
    arraysumes.push(suma.apply(this, arguments).toFixed(3));
    arrayrestes.push(resta.apply(this, arguments).toFixed(3));
    arraymultiplicacions.push(multiplicacio.apply(this, arguments).toFixed(3));
    arraydivisions.push(divisio.apply(this, arguments).toFixed(3));

  } 

  arrel = a => {
    return (Math.sqrt(a).toFixed(3));
  }
  

if (arrayArguments.length==1 && (!isNaN(arrayArguments[i]))){
alert (`L'arrel cuadrada del nombre introduït és: ${arrel(arrayArguments[i])}`)
}else if (arrayArguments.length!==1 && (!isNaN(arrayArguments[i]))){
calculadora.apply(this,arrayArguments);
}

sortir2 = confirm("Vols començar de nou amb altres nombres?\n-SI (Prem acceptar)\n-NO (Prem cancelar)");
if (sortir2==true){
  arrayArguments=[];
}
}while(sortir2==true);

if (arrayArguments.length>1 && (!isNaN(arrayArguments[0]))){
  alert(`RESULTATS ACUMULATS DE LA SESSIÓ: 
  \n SUMES: ${arraysumes.join(" | ")} 
  \n RESTES: ${arrayrestes.join(" | ")} 
  \n MULTIPLICACIONS: ${arraymultiplicacions.join(" | ")} 
  \n DIVISIONS: ${arraydivisions.join(" | ")}`);
  alert(`FINS AVIAT!`);
}
