const form = document.querySelector('#form');

form.addEventListener('submit', async (pre) => {
    pre.preventDefault();
    try {
        const searchTerm = form.elements.query.value
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        makeComponent(res); 
    } 
    catch (e) {
        alert("No Pokemon Available! Sorry :(", e);
    }
}) 

//Selects target 
const target = document.querySelector('#target');

const makeComponent = (pokemon) => {   
        const p = document.createElement('P');
        target.append(p);
        p.innerHTML = pokemon.data.name;
        const img = document.createElement('IMG');
        target.append(img);
        img.src = pokemon.data.sprites.front_default;            
}




