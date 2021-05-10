// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

  // Pseudo: 

  // 1. Haal alle TV's in voorraad op (originalStock) en tel die bij elkaar op.
  // 2. Haal vervolgens alle verkochte exemplaren op (sold) en tel die bij elkaar op.
  // 3. Gebruik voor beide stappen destructuring.
  // 4. Trek dan vervolgens alle verkochte exemplaren af van alle exemplaren in voorraad. 
  // 5. Uitkomst van functie is een nummer.
  // 6. Kom vervolgens tijdens het programmeren erachter dat je beter .map kunt gebruiken.
  // 7. Schrijf een .map functie die looped over de inventory.
  // 8. Totaal = inventory.
  // 9. Deel = item.
  // 10. Trek per object in inventory sold (item.sold) af van originalStock (item.originalStock) en return de waardes (array).

const nonSoldUnits = inventory.map((item) => {
  return item.originalStock - item.sold;
});

  // 11. Vraag je af of je misschien het totaal aantal niet verkochte exemplaren moet weten.
  // 12. Schrijf een .reduce functie die looped over de nonSoldUnits array en sla deze op in de const totalNonSoldUnits als number.
  // 13. Zou ook kunnen met een for loop.

const totalNonSoldUnits = nonSoldUnits.reduce((a, b) => {
  return a + b;
}, 0);

// Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina

  // Pseudo:

  // 1. Maak een element (H3) in index.html.
  // 2. Lokaliseer de plek van het het element en sla de referentie op.

const totalNonSoldUnitsElement = document.getElementById("total-non-sold-units");

  // 3. Voeg tekstinhoud to aan de node door de textContent property aan te spreken. De textContent staat in dit geval gelijk aan totalNonSoldUnits.

totalNonSoldUnitsElement.textContent = totalNonSoldUnits;

// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.

  // Pseudo:

  // 1. We hoeven in dit geval geen aanpassingen te maken dus we kunnen de .filter methode gebruiken inplaats van de .map methode.
  // 2. Schrijf een .filter functie om alle tv-type namen uit de inventory variabele te halen.
  // 3. Kom erachter dat je console.log niet klopt en dat je toch .map moet gebruiken omdat je alleen de tv types terug wilt ontvangen.
  // 4. Schrijf een .map functie die alle tv-type namen uit de inventory variabele haalt.

const tvTypes = inventory.map((item) => {
  return item.type;
});

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.

  // Pseudo:

  // 1. In dit geval kunnen we wel de .filter methode gebruiken omdat we de hele objecten terug willen ontvangen.
  // 2. We gaan de .filter methode gebruiken om te filteren op de volgende conditie, als stock === sold dan is alles uitverkocht).
  // 3. Maak de filter functie met daarin de vergeljking.

const tvSoldOut = inventory.filter((item) => {
  return item.originalStock === item.sold;
});

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.

  // Pseudo:

  // 1. We gaan weer een .filter methode gebruiken die over alle TV's looped.
  // 2. Deze .filter methode checked voor de conditie ambiLight === true.
  // 3. Deze optie zit nested in het object dus we moeten goed letten op het selecteren hiervan.

const tvAmbiLight = inventory.filter((item) => {
  return item.options.ambiLight === true;
});

// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

  // Pseudo:

  // 1. Voor deze functie kunnen we duidelijk de .sort methode gebruiken.
  // 2. We moeten sorteren op de prijs (price).
  // 3. We moeten sorteren van laag naar hoog dus a - b.

const tvPriceSort = inventory.sort((a, b) => {
  return a.price - b.price;
})

// Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.

  // Pseudo:

  // 1. Eerst gaan we de functionaliteit maken zodat we de gevraagde waarde terug kunnen ontvangen.
  // 2. Daarna gaan we een plek maken om deze waarden te tonen.
  // 3. Totale opbrengst is originalStock * price.
  // 4. .map eerst de totale opbrengst per TV.

const tvTotalYield = inventory.map((item) => {
  return item.originalStock * item.price;
});

  // 5. .reduce vervolgens de array die uit stap 4 is gekomen om de totale opbrengst van alle TV's te krijgen.

const inventoryTotalYield = tvTotalYield.reduce((a, b) => {
  return a + b;
}, 0);

  // 6. Maak een nieuw H3 element in index.html.
  // 7. Lokaliseer de plek van het het element en sla de referentie op.

const inventoryTotalYieldElement = document.getElementById("total-inventory-yield");

  // 8. Voeg tekstinhoud to aan de node door de textContent property aan te spreken.

inventoryTotalYieldElement.textContent = inventoryTotalYield;

// Opdracht 3b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina

  // Pseudo:

  // 1. Eerst gaan we de functionaliteit maken zodat we de gevraagde waarde terug kunnen ontvangen.
  // 2. Daarna gaan we een plek maken om deze waarden te tonen.
  // 3. De hoeveelheid die we tot nu toe verdient hebben is sold * price.
  // 4. .map eerst wat we verdient hebben per TV.

const tvTotalSold = inventory.map((item) => {
  return item.sold * item.price;
});

  // 5. .reduce vervolgens de array die uit stap 4 is gekomen om de totale opbrengst van alle TV's te krijgen.

const inventoryTotalSold = tvTotalSold.reduce((a, b) => {
  return a + b;
}, 0);
  
    // 6. Maak een nieuw H3 element in index.html.
    // 7. Lokaliseer de plek van het het element en sla de referentie op.
  
const inventoryTotalSoldElement = document.getElementById("total-inventory-sold");
  
    // 8. Voeg tekstinhoud to aan de node door de textContent property aan te spreken.
  
inventoryTotalSoldElement.textContent = inventoryTotalSold;

// Opdracht 4: Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

  // Pseudo

  // 1. Twee TV's uit de inventory halen opslaan als variabelen (destructuring).

const [firstTV, secondTV, thirdTV, fourthTV, fifthTV, sixthTV, seventhTV, eightTV] = inventory;

  // 2. Container voor de TV's lokaliseren

const productList = document.getElementById("product-list");

  // 3. Nieuwe nodes maken voor de TV types.

const firstTvType = document.createElement("p");
const secondTvType = document.createElement("p");

  // 4. De tekstinhoud van de nodes aanpassen.

firstTvType.textContent = firstTV.type;
secondTvType.textContent = secondTV.type;

  // 5. Elementen toevoegen aan de DOM tree, appenden aan de product-list.

  // 6. Heb het appenden uitgezet omdat ik de vormgeving van het dashboard ook wilde maken.

// productList.appendChild(firstTvType);
// productList.appendChild(secondTvType);

// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.

  // Pseudo

  // 1. We maken een functie die één TV object als parameter verwacht.
  // 2. Vervolgens returnen we in een line het editen en samenvoegen van de brand, type en name strings.

function tvName(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
}

// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.

  // Pseudo

  // 1. We maken een functie die één TV object als parameter verwacht.
  // 2. Vervolgens returnen we in een line het editen van de prijs zoals gevraagd.

function tvPrice(tv) {
  return `€${tv.price},-`;
}

// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58] geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.

  // Pseudo

  // 1. We maken een functie die een TV object als parameter verwacht. Hier zit namelijk ook de screen sizes array in die we kunnen aanspreken.
  // 2. We declareren een variabele tvSizesString als lege string.
  // 3. Vervolgens schrijven we een for loop die over de sizes looped in een TV object.
  // 4. We declaren een variabele sizeCM wat gelijkstaat aan het omrekenen van de sizes in inches naar CM.
  // 5. Daarna schrijven we een if else statement om de string net anders te generaten voor de laatste entry in de for loop.
  // 6. Als laatste returnen we de aangevulde tvSizesString.

function tvSizes(tv) {
  let tvSizesString = "";
  for (let i = 0; i < tv.availableSizes.length; i++) {
    let sizeCM = tv.availableSizes[i] * 2.54;     
    if (i === tv.availableSizes.length - 1) {
      tvSizesString += `${tv.availableSizes[i]} inches (${sizeCM} cm)`
    } else {
      tvSizesString += `${tv.availableSizes[i]} inches (${sizeCM} cm) | `
    }
  }
  return tvSizesString;
}

// Opdracht 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

  // Pseudo

  // 1. Maak een functie die de informatie generate genaamd tvInformationGenerator(tv).
  // 2. Deze functie accepteert een TV object als parameter.
  // 3. Maak een nieuwe node (article) aan om de informatie te bevatten.
  // 4. Maak nieuwe nodes aan (p) voor de naam, prijs en afmetingen.
  // 5. Append de article aan de productList die we eerder in het document al hadden gelokaliseerd.
  // 6. Append vervolgens de p elementen aan de article
  // 7. Kom erachter dat er nog problemen zijn met het generaten van de informatie.
  // 8. tvName functie werkt.
  // 9. tvPrice werkt nog niet, de prijs zelf komt niet goed op de pagina.
  // 10. De sizes zijn helemaal niet te zien.

function tvInformationGenerator(tv) {
  const tvContainerElement = document.createElement("article");
  const tvNameElement = document.createElement("p");
  const tvPriceElement = document.createElement("p");
  const tvSizeElement = document.createElement("p");
  tvNameElement.textContent = tvName(tv);
  tvPriceElement.textContent = tvPrice(tv);
  tvSizeElement.textContent = tvSizes(tv);
  productList.appendChild(tvContainerElement);
  tvContainerElement.appendChild(tvNameElement);
  tvContainerElement.appendChild(tvPriceElement);
  tvContainerElement.appendChild(tvSizeElement);
}

tvInformationGenerator(fourthTV);

// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

  // Pseudo

  // 1. 

function tvGenerator(inventory) {
  const tvList = inventory.map((tv) => {
    const tvContainerElement = document.createElement("article");
    const tvNameElement = document.createElement("p");
    const tvPriceElement = document.createElement("p");
    const tvSizeElement = document.createElement("p");
    tvNameElement.textContent = tvName(tv);
    tvPriceElement.textContent = tvPrice(tv);
    tvSizeElement.textContent = tvSizes(tv);
    productList.appendChild(tvContainerElement);
    tvContainerElement.appendChild(tvNameElement);
    tvContainerElement.appendChild(tvPriceElement);
    tvContainerElement.appendChild(tvSizeElement);
  });
  return tvList;
};

tvGenerator(inventory);

// Bonusopdracht

// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: Google eens naar het onclick event van buttons!

document.getElementById('price').onclick = function sortPrice() {
  console.log(tvPriceSort);
}

document.getElementById('ambilight').onclick = function sortAmbiLight() {
  console.log(tvAmbiLight);
}

document.getElementById('nostock').onclick = function sortNoStock() {
  console.log(tvSoldOut);
}