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
  
function airlines (){

let nomusuari=' ';
let costacumulat=0;
let contadorescales=0;
let arrayultims=[];
let idacumulat=0;
nomusuari = prompt ("Introdueix el teu nom: ");
alert (`Benvingut ${nomusuari}! a continuació et mostrem els vols d'avui:`);
for (i=0;i<flights.length;i++){
  if (flights[i].id>idacumulat){
    idacumulat=flights[i].id;
    console.log(idacumulat);
  }
  if (flights[i].scale){
  alert(`El vol amb orígen ${flights[i].from}, i destí ${flights[i].to} té un cost de ${flights[i].cost} dolars i efectua escales.`);
  costacumulat += flights[i].cost;
  contadorescales++;
  }else{
    alert(`El vol amb orígen ${flights[i].from}, i destí ${flights[i].to} té un cost de ${flights[i].cost} dolars i no efectua escales.`);
    costacumulat += flights[i].cost;
  }
}
for (i=0;i<flights.length;i++){
  if (flights[i].id>(idacumulat-5)){
    arrayultims.push(flights[i].to);
  }
}
alert (`El preu mig de tots els vols és de ${costacumulat/flights.length} dolars.`)
alert (`Hi ha ${contadorescales} vols amb escales.`)
alert (`Destinacions dels últims 5 vols:\n${arrayultims.join('\n')}`)
}

airlines();