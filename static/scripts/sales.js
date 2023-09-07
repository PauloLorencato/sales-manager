let forms = document.getElementById('form');

fetch("../data/form.json").then((data) => {
  data.json().then((data) => {
    let empty = document.getElementById('empty');
    forms.removeChild(empty);
    for (let i = 0; i < data.form.length; i += 1) {
      let objeto = data.form[i];
      let campo = document.createElement('div');
      campo.classList += 'campo';
      console.log(objeto.texto);
      if (typeof(objeto.texto) === 'object') {
        let drop = document.createElement('label');
        drop.setAttribute('for', `${objeto.nome}`);
        drop.innerText = `${objeto.nome}: `;
        campo.append(drop);
        drop = document.createElement('select');
        drop.setAttribute('name', `${objeto.nome}`);
        let option;
        for (let i = 0; i < objeto.texto.length; i += 1) {
          option = document.createElement('option');
          option.setAttribute('name', `${objeto.nome}`);
          option.setAttribute('value', `${objeto.nome}`);
          option.innerHTML = objeto.texto[i];
          drop.append(option);
          console.log(option);  
          campo.append(drop);
        }
      }
      else {
        campo. innerHTML = `<label for = ${objeto.nome}>${objeto.nome}: </label>
        <input type = ${objeto.tipo} name = ${objeto.nome} placeholder = ${objeto.texto}>`
      }
      forms.prepend(campo);
      // let campo = document.createElement('div');
      // campo.classList = 'campo';
      // let label = document.createElement('label');
      // label.setAttribute('for', `${objeto.nome}`);
      // label.innerText = 
      // let input = document.createElement('input');
      // input.setAttribute('name', `${objeto.nome}`);
      // campo.appendChild(input);
      // forms.appendChild(campo);
    }
    
  })
})

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    let formData = new FormData(form);
    console.log(Object.fromEntries(formData));
  });