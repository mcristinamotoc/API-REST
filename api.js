/* Abans de començar, aquí tens la informació de la API que utilitzarem en aquest exercici:
 * 
-    URL de la API:

https://icanhazdadjoke.com/

-    Header per a obtenir les dades en el format que ens interessa:

'Accept': 'application/json'
 * 
 * 
 /- Exercici 1

Crear la web d'acudits, el funcionament dels quals és:
- En entrar no mostrarà cap acudit. Apareixerà el títol i el botó de següent acudit“
- En prémer el botó de “Següent acudit” es farà fetch a la API d'acudits i es mostrarà per consola l'acudit en qüestió.
Nota: En aquest exercici no és necessari maquetar la web, primer farem que funcioni per a passar a aplicar-li els estils.

Tip 1: usar promises o async/await per a esperar la resposta de la API
Tip 2: abans d'usar una API en el codi, és recomanable usar Postman o eines online per a provar la API, per exemple https://apitester.com/. A més de garantir que funciona, veuràs l'objecte que retorna, per a saber utilitzar-lo.

- Exercici 2
Modificar la web anterior perquè l'acudit aparegui en la web, en lloc de per consola.

- Exercici 3
Ben fet! Ja tens una web d'acudits operativa. Ja que està web està pensada per a mostrar acudits als usuaris a primera hora del matí perquè comencin bé el dia, afegirem informació meteorològica ja que els pot ser d'utilitat. 

Consumir una API d'informació meteorològica i mostrar-ho en la web. Aquesta API ha de dir-se en l'obertura, no mitjançant un botó.
Nota: Encara no és necessari maquetar la web, amb mostrar una paraula que indiqui el temps és suficient.

- Exercici 4
Maquetar la web d'acudits i temps meteorològic conforme a la següent pantalla:

- Exercici 5
Atès que els nostres usuaris s'han avorrit de veure sempre els mateixos acudits, buscar una altra API (o APIs) d'acudits i utilitzar-la per a alternar acudits de diferents fonts (bé alternant un de cada o de manera aleatòria).
*/



//Wrap the functions to be connected with the button so that the jokes of the 2 APIs are alternated 
document.getElementById('fetchBtn').addEventListener('click', ()=>{

    btn();
    getJoke();

//Fetch a random joke API call
    async function btn() {
        const response = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
        })
        const data = await response.json();
        console.log(data)
       
    
        document.getElementById("response").innerHTML =
            ` </div class="text-center">
                        <p class=""> ${data.joke} </p>
                     </div>`;
    
    }
//Second jokes API calling
    async function getJoke() {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        console.log(data)
    
        document.getElementById("response").innerHTML =
            ` </div class="text-center">
                        <p class=""> ${data.value} </p>
                     </div>`;
    }
    start().catch(error => {
        console.error(error);
    })
    


});

// Wheather API calling
async function start() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&units=metric&lang=ca&APPID=e50d99da7c6cb79a777875ea8f0a5b6e");
    const data = await response.json();
    console.log(data)


    document.getElementById("wheather").innerHTML =
        ` </div class="text-left">
                    <h5 >${data.name}</h5>
                    <p class=""> ${data.weather[0].description} </p>
                    <p class=""> ${data.main.temp} ºC </p>
                 </div>`;
}

start().catch(error => {
    console.error(error);
})




