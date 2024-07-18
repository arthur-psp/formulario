    const form = document.getElementById("form");
    const nameUser = document.getElementById("name")
    const email = document.getElementById("email")
    const number = document.getElementById("number")
    const msg = document.getElementById("msg");
    const btn = document.getElementById("btn");
    var soma = 0

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        checkInputName()
        checkInputEmail()
        checkNumber()
        checkMesssage()

        if(soma === 4){
            alert("Seu formulário foi enviado!")
        }
    });



function checkInputName(){
    const nameValue = nameUser.value;
    console.log(nameValue);

    if(nameUser.value === ""){
        error(nameUser, "Campo obrigatório!")
        alert("Por favor, preencha todos os campos, antes de enviar.")
        return
    }else{
        const formItem = nameUser.parentElement
        formItem. className = "item-campo"

        soma = soma + 1
        
  
    }
}

function checkInputEmail(){
    const emailValue = email.value;
    console.log(emailValue);

    if(email.value === ""){
        error(email, "Campo obrigatório!")
        return
    }else{
        const formItem = email.parentElement
        formItem.className = "item-campo"

        soma = soma + 1
    
        
    }
}

function checkNumber(){
    const numberValue = number.value;
    console.log(numberValue);
    
    if(number.value === ""){
        error(number, "Campo obrigatório!")
        return
    }else{
        const formItem = number.parentElement
        formItem.className = "item-campo"

        soma = soma + 1
    }
}

function checkMesssage(){
    const msgValue = msg.value;
    console.log(msgValue);
    
    if(msg.value === ""){
        error(msg, "Campo obrigatório!")
        return
    }else{
        const formItem = msg.parentElement
        formItem.className = "item-campo"

        soma = soma + 1
    }
}

function error(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelectorAll("a")

    textMessage.innerText = message;

    formItem.className = "campoObrigatorio error"
}

