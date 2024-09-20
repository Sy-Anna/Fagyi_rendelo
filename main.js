import { fagyik } from './jegkrem'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#orderForm input[name=userID]').addEventListener('change', (e) => {
    if (e.currentTarget.value == null || e.currentTarget.value == ' ') {
      document.getElementById('userCheck').textContent='Nem megfelelő jelszó!';
    } else {
      document.getElementById('userCheck').textContent=null;
    }
  });

  document.querySelector('#orderForm input[name=pass]').addEventListener('input', (e) => {
    if (e.currentTarget.value.length<8) {
      var value = e.currentTarget.value.length;
      document.getElementById('passCheck').textContent='Túl rövid jelszó!';
      document.getElementById('passLen').textContent=value + '/8 karakter';
      
      document.getElementById('passCheck').style.color = 'red';
    } else {
      document.getElementById('passCheck').textContent = ''
    };
  });

  document.querySelector('#orderForm input[name=fagyi]').addEventListener('change', (e) => {
    for (let fagyi of fagyik) {
      if (e.currentTarget.value === fagyi.nev) {
        e.currentTarget.style.backgroundColor = 'lightgreen'
        break
      }
      else {
        e.currentTarget.style.backgroundColor = 'yellow'
      }
    }
  })
 document.getElementById('subBtn').addEventListener('click',(e)=>{
    const fagyikeres = document.getElementById('fagyi')
    for (let fagyi of fagyik) {
      if (fagyikeres.value === fagyi.nev) {
        document.getElementById('fagyiCheck').innerHTML = "Fagylalt státusza: Elérhető<br>Ár:" + fagyi.ar;
        break
      }
      else {
        document.getElementById('fagyiCheck').innerHTML = "Fagylalt státusza: Beszerzés folyamatban"
      }
    }
  })
  document.getElementById('subBtn').addEventListener('submit', (e) => {
    e.preventDefault();
  })
})