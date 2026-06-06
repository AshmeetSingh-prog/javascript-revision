
async function getPokeData(name){
      try{
            const api = `https://pokeapi.co/api/v2/pokemon/${name}`
            const response = await fetch(api)
            const data = await response.json()
            if(!response.ok){
                  throw new Error("Pokemon not found")
            }
            return data
      }
      catch(Error){
            console.log(Error);   
            return null         
      }
};
const loadPokemon = async () => {
      const inpbox = document.getElementById("Pokeser")
      const inp = inpbox.value.toLowerCase().trim()
      inpbox.value = ""
      const data = await getPokeData(inp)
      if(data){
            changeImage(data)
            changInfo(data)
      }
      else{  
            showErr()          
      }
      
}
function changeImage(data){
      const url = data['sprites']['other']['official-artwork']['front_default']
      let img = document.getElementById("img")
      img.src = url
      console.log(url)
}
function changInfo(data) {
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
const showErr = ()=>{
      let errDiv = document.getElementById("err")
      errDiv.classList.add("errL")
      errDiv.textContent = "Enter valid pokemon name"
      setTimeout(()=>{
            errDiv.textContent = ""
            errDiv.classList.remove("errL")
      },4000)
}
function showDefault(){
      loadPokemon()
}
showDefault()
document.getElementById('Pokebut').addEventListener('click',()=>{
      loadPokemon()
})
document.getElementById('Pokeser').addEventListener('keydown',(event)=>{
      if(event.key == "Enter"){
            loadPokemon()
      }
})