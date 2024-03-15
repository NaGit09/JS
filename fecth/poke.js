// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then( response => response.json()).then(data => console.log(data))
// .catch(errol =>console.log(errol));
fecthData();
 async function fecthData (){
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok) {
            throw new Error("can't not read");
        }
        const data = await response.json();
        const image = data.sprites.front_default;
       
       const img = document.getElementById("pokemonImg");
       img.src = image;
       console.log(image);
       img.style.display = "block";
    }
    catch (errol) {
        console.error("Errol!");
    }
}