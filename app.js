let show = document.getElementById("show");
let pass = document.getElementById('pass');
let text = document.getElementById("text");


show.addEventListener("click",()=>{
  if(pass.value == '') return  
  if(pass.type === 'password'){
    pass.type = 'text';
    show.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
  else{
    pass.type = 'password';
    show.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
})

function btn(){
    alert(`Thank You ${text.value}`)
    text.value = "";
    pass.value = "";
}