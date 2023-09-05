let forms = document.getElementById('form');

fetch("../data/form.json").then((data) => {
  data.json().then((data) => {
    console.log(data);
    console.log(data.Form[0].nome);
    for (let i = 0; i < Object(data).keys.length; i += 1) {
      let campo = document.createElement('input');
      campo.setAttribute('name', `${data.keys[i]}`);
      forms.appendChild(campo);
    }
    
  })
})

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    let formData = new FormData(form);
    console.log(Object.fromEntries(formData));
  });