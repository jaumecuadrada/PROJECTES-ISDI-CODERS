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
  var inici='s';
  var nomusuari=' ';
  function airlines (){
    let adminuser=' ';
    let costacumulat=0;
    let contadorescales=0;
    let arrayultims=[];
    let idacumulat=0;
    if (nomusuari==' '){
      nomusuari = prompt ("Introdueix el teu nom: ");
      alert (`Benvingut ${nomusuari}! a continuació et mostrem els vols d'avui:`);
    }else{
    alert ('LLISTAT DE VOLS ACTUALITZATS:');
    }
    for (i=0;i<flights.length;i++){
      if (flights[i].id>idacumulat){
        idacumulat=flights[i].id;
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
    alert (`El preu mig de tots els vols és de ${costacumulat/flights.length} dolars.`);
    alert (`Hi ha ${contadorescales} vols amb escales.`);
    alert (`Destinacions dels últims 5 vols:\n${arrayultims.join('\n')}`);

    adminuser=prompt('Ets administrador o usuari?\n-USUARI (introdueix una \'u\')\n-ADMIN (introdueix una \'a\')');
    switch (adminuser){
        case 'a': administrador();
        break;
        case 'u': usuari();
        break;
        default: alert('LLETRA INTRODUÏDA INCORRECTA');
    }
    inici=prompt('VOLS SORTIR DEL PROGRAMA?\n-SI (introdueix una \'s\')\n-NO (introdueix una \'n\')');
  }



function administrador(){
  opcio=' ';
  opcio = prompt('Que vols fer?\n-INTRODUÏR VOLS (introdueix \'v\')\n-ELIMINAR VOLS (introdueix \'e\')'); 
  switch (opcio){
      case 'v': introduir();
      break;
      case 'e': eliminar();
      break;
      default: alert('LLETRA INTRODUÏDA INCORRECTA');
  }
}

function usuari(){
  let preu=0;
  let sortir='';
  trobat=false;
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
    sortir=prompt('Vols introduïr un altre import?\n-SI (introdueix \'s\')\n-NO (introdueix \'n\')')
  }while (sortir=='s');
}

function introduir(){

    let escales=' ';
    let continuar=' ';
    
        do{
          const volnou = {
            id: 0,
            to: "",
            from: "",
            cost: 0,
            scale: false,
            }
            volnou.id=parseInt(prompt('Introdueix ID del vol:'));
            volnou.to=prompt('Introdueix destinació del vol:');
            volnou.from=prompt('Introdueix orígen del vol:');
            volnou.cost=parseInt(prompt('Introdueix cost en dolars del vol:'));
            escales=prompt('Introdueix \'s\' si el vol té escales o \'n\' si no en té');
            if (escales=='s'){
                volnou.scale=true;
            }else if (escales=='n'){
                volnou.scale=false;
            }
            flights.push(volnou);
            continuar = prompt('Vols introduir més vols?\n-SI (introdueix \'s\')\n-NO (introdueix \'n\')');
        }while(continuar=='s' && flights.length<15);
    
    console.log(flights);
}

function eliminar(){
  let eliminar='';
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
  eliminar=prompt('Vols eliminar més vols?\n-SI (introdueix \'s\')\n-NO (introdueix \'n\')');
  console.log(eliminar);
  }while(eliminar=='s');
}

do{
  airlines(); 
}while(inici=='n')