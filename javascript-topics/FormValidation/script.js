
error = function(tagid,errmsg){
      const tag = document.getElementById(tagid)
      const span = document.createElement("span")
      span.textContent = errmsg
      span.classList.add("error")
      tag.after(span)
}

function validateForm(event){
      event.preventDefault()
      document.querySelectorAll(".error").forEach(val => val.remove())
      let cond = true;
      let userName = document.getElementById("name").value
      let phone = document.getElementById("phone").value
      let email = document.getElementById("email").value
      let gender = document.querySelector("input[name='gender']:checked")?.value
      if(userName.length < 4 || userName.length > 20 || !(/^[a-zA-Z ]+$/.test(userName)) ){
            cond = false
            error("name","Invalid Name")
      }
      if(phone.length!=10 || !(/^[0-9]+$/.test(phone)) ){
            cond = false
            error("phone","Invalid Phone")
      }
      if( !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ){
            cond = false
            error("email","Invalid email")
      }
      if(!gender){
            cond = false
            error("female","Invalid gender")
      }
      if(cond){
            console.log(userName,phone,email,gender);
      }
      return cond
}

document.querySelector("form").addEventListener("submit",validateForm)