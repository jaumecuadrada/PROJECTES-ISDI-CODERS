let cartro = [];
let arraypuntuacions = [
{nom: 'Joaquim' , puntuacio: 140},
{nom: 'Marta' , puntuacio: 89},
{nom: 'Joël' , puntuacio: 120},
{nom: 'Martina' , puntuacio: 111},
{nom: 'Alba' , puntuacio: 99},
]
let usuari = {
    nom:' ',
    puntuacio:0,
}
let introduirnombre;
let sortirprograma=true;
let arrayrandoms=[];
let bingoOk=false;      
let torns=0;
let nomusuari='';
let trobat1=false;
let trobat2=false;
let trobat3=false;

function bingo(){

    let nombrerand;
    let repetit;
        do{
            nomusuari = prompt ("Introdueix el teu nom: ");
            if (nomusuari=='' || nomusuari==null){
            alert('No has introduït cap nom. Torna-ho a intentar.')
            }
        }while (nomusuari=='' || nomusuari==null);
        explicacio();

        console.clear();
        console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
        console.log (`      Benvingut al BINGO ISDICODERS ${nomusuari}!`);
        console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
        console.log ("T'ha tocat aquest cartró!\n\n");
        noucartro();
        do{
            introduirnombre = confirm ('Prem acceptar per treure un nombre');
            if (!introduirnombre){
                console.log('Has sortit del joc!');
            }else{
                console.clear()
                console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
                console.log (`---------------- BINGO ISDICODERS ----------------`);
                console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
                torns++;
                do{
                    nombrerand=random();
                    repetit= buscarepes(nombrerand);
                }while(repetit);
                buscanombre(nombrerand);
                actualitzacartro();
                premibingo();    
            }   
        
        }while(introduirnombre && !bingoOk);
        if(introduirnombre){
            const temp={};
            usuari.nom=nomusuari;
            usuari.puntuacio=200-torns;
            Object.assign(temp, usuari);
            arraypuntuacions.push(temp);
            console.clear();
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
            console.log (`---------------- BINGO ISDICODERS ----------------`);
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
            console.log('██████╗░██╗███╗░░██╗░██████╗░░█████╗░');
            console.log('██╔══██╗██║████╗░██║██╔════╝░██╔══██╗');
            console.log('██████╦╝██║██╔██╗██║██║░░██╗░██║░░██║');
            console.log('██╔══██╗██║██║╚████║██║░░╚██╗██║░░██║');
            console.log('██████╦╝██║██║░╚███║╚██████╔╝╚█████╔╝');
            console.log('╚═════╝░╚═╝╚═╝░░╚══╝░╚═════╝░░╚════╝░\n\n');
            console.log('Has necessitat '+torns+' torns per completar el cartró.\n');
            console.log(`PUNTUACIÓ FINAL: ${200-torns}`);
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
            console.log (`----------------     RANKING      ----------------`);
            arraypuntuacions.sort(((a,b) => b.puntuacio - a.puntuacio));
            for (let i=0;i<arraypuntuacions.length;i++){
            console.log (`${i+1} - NOM: ${arraypuntuacions[i].nom} PUNTUACIÓ: ${arraypuntuacions[i].puntuacio} `)
            }
            
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
            console.log('👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻');
            console.log('FELICITATS I FINS UN ALTRE! Has necessitat '+torns+' torns per completar el cartró!');
            console.log('👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻');
            torns=0;
            bingoOk=false;
            sortirprograma=confirm('VOLS JUGAR UN ALTRE CARTRÓ?');
            if (!sortirprograma){
            console.clear();
            console.log('\n\n\n\n███████╗██╗███╗░░██╗░██████╗  ░█████╗░██╗░░░██╗██╗░█████╗░████████╗██╗');
            console.log('██╔════╝██║████╗░██║██╔════╝  ██╔══██╗██║░░░██║██║██╔══██╗╚══██╔══╝██║');
            console.log('█████╗░░██║██╔██╗██║╚█████╗░  ███████║╚██╗░██╔╝██║███████║░░░██║░░░██║');
            console.log('██╔══╝░░██║██║╚████║░╚═══██╗  ██╔══██║░╚████╔╝░██║██╔══██║░░░██║░░░╚═╝');
            console.log('██║░░░░░██║██║░╚███║██████╔╝  ██║░░██║░░╚██╔╝░░██║██║░░██║░░░██║░░░██╗');
            console.log('╚═╝░░░░░╚═╝╚═╝░░╚══╝╚═════╝░  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝\n\n\n\n');  
            }
        }else{
            console.clear();
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
            console.log (`---------------- BINGO ISDICODERS ----------------`);
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
            
            console.log('👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻');
            console.log('      A REVEURE! Has abandonat després de '+torns+' torns!'); 
            console.log('👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻👋🏻');
        }
}

function actualitzacartro(){
    
        if (cartro[0]==' X ' && cartro[1]==' X ' && cartro[2]==' X ' && cartro[3]==' X ' && cartro[4]==' X ' && !trobat1){
            trobat1=true;
            console.log('A MÉS A MÉS HAS CANTAT LINIA! (LINIA 1)');
        }
        if (cartro[5]==' X ' && cartro[6]==' X ' && cartro[7]==' X ' && cartro[8]==' X ' && cartro[9]==' X ' && !trobat2){
            trobat2=true;
            console.log('A MÉS A MÉS HAS CANTAT LINIA! (LINIA 2)');
        }
        if (cartro[10]==' X ' && cartro[11]==' X ' && cartro[12]==' X ' && cartro[13]==' X ' && cartro[14]==' X ' && !trobat3){
            trobat3=true;
            console.log('A MÉS A MÉS HAS CANTAT LINIA! (LINIA 3)');
        }
    console.log('⎡‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⎤');
    console.log('⎜ '+cartro.slice(0,5).join(" ⎟ ")+'  |');
    console.log('⎜ '+cartro.slice(5,10).join(" ⎟ ")+'  |');
    console.log('⎜ '+cartro.slice(10,15).join(" ⎟ ")+'  |');
    console.log('⎣______________________________⎦\n\n');
}

function noucartro(){
    let sortir='no';
    let contador=1;
    do{        
        if (sortir=='no'){
            omplircartro();
            console.log(`⎡‾‾‾‾‾‾‾‾‾‾ CARTRÓ ${contador} ‾‾‾‾‾‾‾‾‾‾⎤`);
            console.log('⎡‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⎤');
            console.log('⎜ '+cartro.slice(0,5).join(" ⎟ ")+'  |');
            console.log('⎜ '+cartro.slice(5,10).join(" ⎟ ")+'  |');
            console.log('⎜ '+cartro.slice(10,15).join(" ⎟ ")+'  |');
            console.log('⎣______________________________⎦\n\n');
            contador++;
        }

        sortir = prompt (`T'agrada aquest cartró?\n-SI (escriu 'si')\n-NO, en vull un altre! (escriu 'no')`);
        if (sortir!==null){
            sortir = sortir.toLowerCase();
        }
        if (sortir=='si'){
            console.clear();
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
            console.log (`---------------- BINGO ISDICODERS ----------------`);
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
            console.log('HAS ESCOLLIT AQUEST CARTRÓ!\n\n');
            console.log('COMENCEM A JUGAR!!!!\n\n');
            console.log('⎡‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⎤');
            console.log('⎜ '+cartro.slice(0,5).join(" ⎟ ")+'  |');
            console.log('⎜ '+cartro.slice(5,10).join(" ⎟ ")+'  |');
            console.log('⎜ '+cartro.slice(10,15).join(" ⎟ ")+'  |');
            console.log('⎣______________________________⎦\n\n');
        }else if (sortir=='no'){
            console.clear();
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
            console.log (`      Benvingut al BINGO ISDICODERS ${nomusuari}!`);
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
            console.log('Què tal aquest altre?\n\n');
        }else{
            alert('OPCIÓ INCORRECTA, TORNA-HO A INTENTAR!');
        }
    }while(sortir!='si');
}

function omplircartro(){
cartro = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let x;
let j=0
let trobat;
    while (j<cartro.length){
    x=random();
    trobat=false;
        for (i=0;i<cartro.length;i++){
            if (cartro[i]==x){
                trobat=true;
            }
        }  
        if (!trobat){
            if (x<10){
                cartro[j]=' 0'+x;
            }else{
                cartro[j]=' '+x;
            }
        j++;
        }  
    }    
    
}

function buscarepes(x){
let trobat=false;    
    for (i=0;i<arrayrandoms.length;i++){
        if (arrayrandoms[i]==x){
            trobat=true;
        }
    }
    arrayrandoms.push(x);
return trobat;

}

function random(){
    do{
    x=(Math.round(Math.random()*90));
    }while(x==0)
    
    return x;
}



function buscanombre(x){
    let trobat=false;
    for (i=0;i<cartro.length;i++){
        if (cartro[i]==x){
            cartro[i]=' X ';
            trobat=true;
        }
    }
    if (trobat){
        console.clear();
        console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
        console.log (`---------------- BINGO ISDICODERS ----------------`);
        console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
        console.log('🁙🁙🁙   HA SORTIT EL '+x+'!!!  🁙🁙🁙\n\n');
        console.log('FELICITATS! EL TENS! ACTUALITZEM EL CARTRÓ:\n\n');
        
    }else{
        console.clear();
        console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
        console.log (`---------------- BINGO ISDICODERS ----------------`);
        console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`);
        console.log('🁙🁙🁙   HA SORTIT EL '+x+'!!!  🁙🁙🁙\n\n');
        console.log('LLÀSTIMA! No el tens!\n\n');
    }
}

function premibingo(){
contador=0;
    for (i=0;i<cartro.length;i++){
        if (cartro[i]==' X '){
            contador++;
        }
    }
    if (contador==15){
        bingoOk=true;
         
    }
}

function explicacio(){
let acceptar=false;
   do{
    console.clear();
    console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`)
    console.log (`      Benvingut al BINGO ISDICODERS ${nomusuari}!`);
    console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`)
    console.log (`         SISTEMA DE PUNTUACIÓ`);
    console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`)
    console.log ('- CADA USUARI COMENÇA AMB 200 PUNTS');
    console.log ('- PER CADA TORN ES RESTA 1 PUNT');
    console.log ("- L'USUARI QUE CONSEGUEIX UN BINGO AMB MENYS TORNS TINDRÀ LA PUNTUACIÓ MÉS ALTA!");
    console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺\n\n`)
    acceptar=confirm('PREM ACCEPTAR SI HO HAS ENTÈS !!!')
   }while(!acceptar);
}
do{
    bingo();
    cartro = [];
    arrayrandoms=[];
    trobat1=false;
    trobat2=false;
    trobat3=false;
}while(sortirprograma && introduirnombre);
  
