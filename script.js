function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({

    behavior:"smooth"

  });

}





document.querySelectorAll(".opcoes").forEach(grupo=>{


  const botoes = grupo.querySelectorAll(".opcao");


  botoes.forEach(botao=>{


    botao.addEventListener("click",()=>{


      botoes.forEach(b=>{

        b.classList.remove("ativa");

      });



      botao.classList.add("ativa");


    });


  });


});






async function enviarMensagem(event){


event.preventDefault();



const nome =
document.querySelector("input[name='nome']").value;



const telefone =
document.querySelector("input[name='telefone']").value;



const ambiente =
document.querySelector("[data-grupo='ambiente'] .ativa")?.innerText || "";



const estilo =
document.querySelector("[data-grupo='estilo'] .ativa")?.innerText || "";



const cor =
document.querySelector("[data-grupo='cor'] .ativa")?.innerText || "";



const investimento =
document.querySelector("[data-grupo='investimento'] .ativa")?.innerText ||"";



const prazo =
document.querySelector("[data-grupo='prazo'] .ativa")?.innerText || "";





try{


const resposta = await fetch("/enviar", {


method:"POST",


headers:{


"Content-Type":"application/json"


},



body:JSON.stringify({


nome,

telefone,

ambiente,

estilo,

cor,

investimento,

prazo


})


});




const data = await resposta.json();




if(data.ok){


alert("Orçamento enviado com sucesso!");



setTimeout(()=>{


location.reload();


},2000);



}



else{


document.getElementById("msg").innerText =
"Erro ao enviar orçamento.";


}



}catch(erro){


console.log(erro);


document.getElementById("msg").innerText =
"Erro ao enviar orçamento.";


}



}





const btnWhatsapp =
document.getElementById("btnWhatsapp");


const menuWhatsapp =
document.querySelector(".whatsapp-menu");



if(btnWhatsapp){


btnWhatsapp.addEventListener("click",()=>{


menuWhatsapp.classList.toggle("ativo");


});


}






document.addEventListener("click",(e)=>{


const container =
document.querySelector(".whatsapp-container");


if(container && !container.contains(e.target)){


menuWhatsapp.classList.remove("ativo");


}


});




const menuToggle =
document.getElementById("menuToggle");


const menuArea =
document.querySelector(".menu-area");



if(menuToggle){


menuToggle.addEventListener("click",()=>{


menuArea.classList.toggle("ativo");


});


}