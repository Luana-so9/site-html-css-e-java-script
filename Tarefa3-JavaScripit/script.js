function idade()
{
    let idade = document.getElementById("caixaok").value;
    if (idade == "")
    {
        alert("Está vazio!");
    }
    else if (idade < 12)
    {
        alert("Criança");
    }
    else if (idade >= 12 && idade < 17)
    {
        alert("Adolescente");
    }
    else if (idade >=17 && idade < 59)
    {
        alert("Adulto!");
    }
    else
    {
        alert("Idoso");
    }
}
 function verificar()  
 {
    let usuario=document.getElementById("user1").value;
    let senha=document.getElementById("user").value;
    let resultado = document.getElementById("local");
    

    if (usuario==="admin" && senha==="1234")
    {
            resultado.textContent= "Login realizado com sucesso";
    }
        
    
else if (usuario==="professor" && senha==="senac")
    {
            resultado.textContent= "Bem-vindo,professor";
    }
        

else if (usuario==="" && senha==="")
    {
            resultado.textContent= "Preencha todos os campo";
    
    }
        

 else{
    alert("úsuario ou senha incorretos");
 }



 }


 function desconto(){
    let valor = document.getElementById("compra").value;
    if ( valor >= 500 && document.getElementById("vip").checked) {
        valor = valor - valor * 0.20;
        alert(valor);
    }
    else if (valor >= 300 && document.getElementById("desconto").value == "DescontoTOP")
    {
        valor = valor - valor * 0.10;
        alert(valor);
    }
 else if (valor <=300 || document.getElementById("desconto").value == "DescontoTOP")
    {
        alert(valor);
    }
 else if (valor <=0)
 {
        alert("Erro, verifique e escreva novamente");
        }
else
{
    alert(valor);
}

}
  



    function avaliacao()
{

  let nota=document.getElementById("aluno").value
        let frequencia=document.getElementById("Frequência").value
        let resultado=document.getElementById("resultado");
    
    
    if  (nota>=60 && frequencia >=75 && nota <= 100 && frequencia <= 100){
        resultado.textContent="Aprovado";
    }
    else if (nota >=40 && nota < 60  && frequencia >=75 && nota <= 100 && frequencia <= 100){
        resultado.textContent="Recuperação";
    }
    else if ((frequencia <=75 || nota < 40) && nota<=100 && frequencia<=100 && nota != 0 && frequencia != 0){
        resultado.textContent="Reprovado";
    } 
    else if (nota ==0 || frequencia == 0){
        resultado.textContent="Preencha todos os campos";
    }
    else if  (nota>=100 || frequencia>=100){
        resultado.textContent="valores inválidos";
    }
}






































