
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
      changInfo(data)
}
async function changeImage(data){
      const url = data['sprites']['other']['official-artwork']['front_default']
      let img = document.getElementById("img")
      img.src = url
      console.log(url)
}
async function changInfo(data) {
      const name = data['name']
      const id = data['id']
      const height = data['height']
      const weight = data['weight']
      const type = data['types'][0]['type']['name']
      const ability = data['abilities'][0]['ability']['name'] 
      // getting html elements
      const infoSec = document.getElementById("infoSec");
      const infoArr = [name,id,type,height,weight,ability]
      const spans = infoSec.querySelectorAll("span");
      for (let i = 0; i < spans.length; i++) {
            spans[i].textContent = infoArr[i]            
      }
      console.log(spans)
}
loadPokemon("lucario")









/* async function loadPokemon(name){
      const data = await getPokeData(name);

      changeImage(data);
      changeHeight(data);
      changeWeight(data);
      changeName(data);
} */
