
async function getPokeData(name){
      try{
            const api = `https://pokeapi.co/api/v2/pokemon/${name}`
            const response = await fetch(api)
            const data = await response.json()
            return data
      }
      catch(Error){
            console.log(Error);            
      }
};
const loadPokemon = async (name) => {
      const data = await getPokeData(name)
      changeImage(data)
}
async function changeImage(data){
      const url = data['sprites']['other']['official-artwork']['front_default']
      let img = document.getElementById("img")
      img.src = url
      console.log(url)
}
loadPokemon("pikachu")









/* async function loadPokemon(name){
      const data = await getPokeData(name);

      changeImage(data);
      changeHeight(data);
      changeWeight(data);
      changeName(data);
} */
