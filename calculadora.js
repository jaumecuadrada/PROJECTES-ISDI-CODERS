let numero1;
let numero2;
let comptador=0;
let comptadorarrels=0;
let sortir='';
let arraysumes=[];
let arrayrestes=[];
let arraymultiplicacions=[];
let arraydivisions=[];
let arrayarrels=[];


do{
    numero1 = parseFloat(prompt("Introdueix el primer nombre: "), 10);
        if (isNaN(numero1)){
        (alert("Primera dada introduïda no és un nombre... Prem intro i introdueix el segón"));
        }
    numero2 = parseFloat(prompt("Introdueix el segón nombre: "), 10);
        if (isNaN(numero2)){
        (alert("Segona dada introduïda no és un nombre... Prem intro"));
        }



    suma = (a,b) => a+b;
    resta = (a,b) => a-b;
    multiplica = (a,b) => a*b;
    divideix = (a,b) => a/b;
    arrel = a => {
        arrayarrels.push(Math.sqrt(a).toFixed(3));
        return (Math.sqrt(a).toFixed(3));
    }

    calculadora = (a,b) =>{
        alert(`La suma d'aquests dos nómbres és: ${suma(a,b).toFixed(3)} 
        \nLa resta d'aquests dos nómbres és: ${resta(a,b).toFixed(3)} 
        \nLa multiplicació d'aquests dos nómbres és: ${multiplica(a,b).toFixed(3)} 
        \nLa divisió d'aquests dos nómbres és: ${divideix(a,b).toFixed(3)} `);

        arraysumes.push(suma(a,b).toFixed(3));
        arrayrestes.push(resta(a,b).toFixed(3));
        arraymultiplicacions.push(multiplica(a,b).toFixed(3));
        arraydivisions.push(divideix(a,b).toFixed(3));
        
    }

    if (isNaN(numero1) && isNaN(numero2) ){
        alert("No has introduït cap nombre. A reveure!");
    }else if (!isNaN(numero1) && isNaN(numero2)){
        alert("L'arrel cuadrada d'el primer nombre és: " + arrel(numero1));
        comptadorarrels++;
        sortir = prompt("Vols Sortir? s = si , n = no");
    }else if (!isNaN(numero2) && isNaN(numero1)){
        alert("L'arrel cuadrada d'el segón nombre és: " + arrel(numero2));
        comptadorarrels++;
        sortir = prompt("Vols Sortir? s = si , n = no");
    }else{
        calculadora(numero1,numero2);
        comptador++;
        sortir = prompt("Vols Sortir? s = si , n = no");
    }
}while((!isNaN(numero1) || !isNaN(numero2)) && sortir=='n');

alert(`HAS INTRODUÏT UN SOL NOMBRE VÀLID EN ${comptadorarrels} OCASIONS! `);
alert(`HAS INTRODUÏT DOS NOMBRES VÀLIDS EN ${comptador} OCASIONS! `);

alert("RESULTATS GUARDATS EN AQUESTA SESSIÓ:");

alert("ARRELS CUADRADES: "+ arrayarrels.join(" | "));
alert(`CALCULADORA: \n SUMES: ${arraysumes.join(" | ")} \n RESTES: ${arrayrestes.join(" | ")} \n MULTIPLICACIONS: ${arraymultiplicacions.join(" | ")} \n DIVISIONS: ${arraydivisions.join(" | ")}`)
alert("FINS AVIAT");



