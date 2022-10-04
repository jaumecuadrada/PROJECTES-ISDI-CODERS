const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];
var inici;
var nomusuari=' ';


function airlines(){
  if (nomusuari==' '){
    nomusuari = prompt ("Introdueix el teu nom: ");
    alert (`Benvingut ${nomusuari}!`);
    menu();
  }else{
    menu();
  }
 inici=confirm('VOLS SORTIR DEL PROGRAMA?\n-SI (Prem ACCEPTAR)\n-NO (Prem CANCELAR)');
 if (inici){
  alert('FINS AVIAT!');
 }
}

function menu(){
  let opcio;
  do{
    opcio=prompt(`ISDICODERS AIRLINES - QUÈ DESITGES FER?\n1-MOSTRAR DADES ACTUALS\n2-MENU USER/ADMIN\n3-SORTIR DEL PROGRAMA`);
    if (opcio!='1' && opcio!='2' && opcio!='3'){
      alert ('OPCIÓ INCORRECTE, TORNA-HO A INTENTAR!');
    }else if (opcio=='1'){
      mostradades();
    }else if (opcio=='2'){
      adminuser();
    }
    
  }while (opcio!='1' && opcio!='2' && opcio!='3');
}

function adminuser(){
let opcio;
  do{
    opcio=prompt('Ets usuari o administrador?\n1-USUARI\n2-ADMIN');
    if (opcio!='1' && opcio!='2'){
      alert ('OPCIÓ INCORRECTE, TORNA-HO A INTENTAR!');
    }else if (opcio=='1'){
      usuari();
    }else if (opcio=='2'){
      administrador();
    }
  }while (opcio!='1' && opcio!='2')
}

function mostradades(){
  let costacumulat=0;
  let contadorescales=0;
  
  for (i=0;i<flights.length;i++){
    if (flights[i].scale){
      alert(`El vol amb orígen ${flights[i].from}, i destí ${flights[i].to} té un cost de ${flights[i].cost} dolars i efectua escales.`);
      costacumulat += flights[i].cost;
      contadorescales++;
    }else{
      alert(`El vol amb orígen ${flights[i].from}, i destí ${flights[i].to} té un cost de ${flights[i].cost} dolars i no efectua escales.`);
      costacumulat += flights[i].cost;
      }
  }
  alert (`El preu mig de tots els vols és de ${costacumulat/flights.length} dolars.`);
  alert (`Hi ha ${contadorescales} vols amb escales.`);
  ultims();
 
}

function ultims(){
  let arrayids=[];
  let arrayultims5=[];
  let arrayciutats=[];
  for (let i=0;i<flights.length;i++){
    arrayids.push(flights[i].id);
  }
  function comparar ( a, b ){ return a - b; }
  arrayultims5=arrayids.slice(arrayids.length-5);
  for (i=0;i<flights.length;i++){
    for (let k=0;k<arrayultims5.length;k++){
      if (flights[i].id==arrayultims5[k]){
        arrayciutats.push(flights[i].to)
      }
    }
  }
  alert (`Els últims 5 vols del dia volen a:\n-${arrayciutats.join('\n-')}`)
}



function administrador(){
let opcio;
  do{ 
    opcio = prompt('Que vols fer?\n1-INTRODUÏR VOLS\n2-ELIMINAR VOLS'); 
    if (opcio!='1' && opcio!='2'){
      alert ('OPCIÓ INCORRECTE, TORNA-HO A INTENTAR!');
    }else if (opcio=='1'){
      introduir();
    }else if (opcio=='2'){
      eliminar();
    }
  }while(opcio!='1' && opcio!='2')
}

function usuari(){
  let preu=0;
  let sortir;
  let trobat=false;
  do{
    preu= prompt('Introdueix la quantitat mínima en dolars que vols gastar: ');
    alert (`A continuació et mostrem tots els vols disponibles amb un preu igual o menor a ${preu} dolars:`)
    for (i=0;i<flights.length;i++){
      if (flights[i].cost<=preu){
      trobat=true;
        if (flights[i].scale){
          alert(`El vol amb orígen ${flights[i].from}, i destí ${flights[i].to} té un cost de ${flights[i].cost} dolars i efectua escales.`);
          }else{
            alert(`El vol amb orígen ${flights[i].from}, i destí ${flights[i].to} té un cost de ${flights[i].cost} dolars i no efectua escales.`);
            }
      }
    }
    if (!trobat){
      alert('NO HI HA VOLS TAN BARATS!');
    }
    sortir=confirm('Vols introduïr un altre import?\n-SI (Prem ACCEPTAR)\n-NO (PREM CANCELAR)')
  }while (sortir==true);
}

function introduir(){
  let escales=false;
  let continuar;
  let idmesalta=0;

  for (i=0;i<flights.length;i++){
    if (flights[i].id>idmesalta){
      idmesalta=flights[i].id;     
    }
  }


  do{
    const volnou = {
      id: 0,
      to: "",
      from: "",
      cost: 0,
      scale: false,
    }
    //let contador=idmesalta;
    alert(`A continuació introduirás les dades del vol amb ID ${idmesalta+1}. `)
    volnou.id=(idmesalta+1);
    volnou.to=prompt('Introdueix destinació del vol:');
    volnou.from=prompt('Introdueix orígen del vol:');
    volnou.cost=parseInt(prompt('Introdueix cost en dolars del vol:'));
    escales=confirm('El vol fa alguna escala?\n-SI (Prem ACCEPTAR)\n-NO (Prem CANCELAR)');
    if (escales){
      volnou.scale=true;
    }else{ 
      volnou.scale=false;
    }
      flights.push(volnou);
    idmesalta++;
    continuar = confirm('Vols introduir més vols?\n-SI (Prem ACCEPTAR)\n-NO (Prem CANCELAR)');
    }while(continuar==true && flights.length<15);
}

function eliminar(){
  let eliminar;
  let idborrar=0;
  trobat=false;  
  do{
    idborrar=prompt('Introdueix el ID del vol que desitges borrar.');
    for (i=0;i<flights.length;i++){
      if (flights[i].id==idborrar){
        flights.splice(i,1);
        trobat=true;
      }
    }
    if (trobat==false){
      alert ('Aquest ID no consta a la nostra base de dades. torna-ho a intentar.'); 
    }
    eliminar=confirm('Vols eliminar més vols?\n-SI (Prem ACCEPTAR)\n-NO (Prem CANCELAR)');
  }while(eliminar==true);
}

do{
  airlines(); 
}while(inici==false)
