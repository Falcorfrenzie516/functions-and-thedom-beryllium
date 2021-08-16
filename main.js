// FUNCTIONS

//write code which we can reuse later

function add (x, y) {
    return x + y
}

let pokemonImageURLs = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png']

for (let index = 0; index< pokemonImageURLs.length; index += 1) {
    let imageURL = pokemonImageURLs[index];
    document.write(`<img src="${imageURL}">`)
}

let iChooseYouPika = document.querySelector(".iChooseYou")
console.log(iChooseYouPika)
let pokemonImgage = document.createElement("img")
console.log(pokemonImgage)
pokemonImgage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
iChooseYouPika.append(pokemonImgage)

let firstParagraphElement = document.querySelector("p")
firstParagraphElement.append(pokemonImgage)


//  let allParagraphElements =document.querySelectorAll("p")
// console.log(allParagraphElements)
