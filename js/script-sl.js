/* VARIAVEIS */
const form = document.getElementById('form');
const campos = document.querySelectorAll ('.required');
const spans = document.querySelectorAll ('.span-required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* Validação de campos em branco */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    
});

/* FUNÇOES */

/* Função seta Error */
function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

/* Função remove Error */
function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

/* Validação de Nome */
function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

/* Validação Email */

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

/* Validação Password */

function mainPasswordValidate(){
    if(campos[2].value.length < 8)
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}

/* VALIDADO */
/*
document.querySelector("form")
.addEventListener("submit", event =>{
    location.href = "home.html";
}); */