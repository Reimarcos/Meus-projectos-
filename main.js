var op =document.querySelectorAll('li')
var caixa =document.getElementById('caixa')

op[0].onclick=()=>{
  op[0].style.backgroundColor="#005d45"
  op[1].style.backgroundColor="rgba(255,255,255,.2)"
  op[2].style.backgroundColor="rgba(255,255,255,.2)"
  op[3].style.backgroundColor="rgba(255,255,255,.2)"
 
  caixa.style.backgroundImage="url('imagem/1.jpg')"
}

op[1].onclick=()=>{
  op[1].style.backgroundColor="#005d45" 
  op[0].style.backgroundColor="rgba(255,255,255,.2)"
  op[2].style.backgroundColor="rgba(255,255,255,.2)"
  op[3].style.backgroundColor="rgba(255,255,255,.2)"
  
  
  caixa.style.backgroundImage="url('imagem/2.jpg')"
}

op[2].onclick=()=>{
  op[2].style.backgroundColor="#005d45" 
  op[0].style.backgroundColor="rgba(255,255,255,.2)"
  op[1].style.backgroundColor="rgba(255,255,255,.2)"
  op[3].style.backgroundColor="rgba(255,255,255,.2)"
  
  caixa.style.backgroundImage="url('imagem/3.jpg')"
}


op[3].onclick=()=>{
  op[3].style.backgroundColor="#005d45" 
  op[0].style.backgroundColor="rgba(255,255,255,.2)"
  op[1].style.backgroundColor="rgba(255,255,255,.2)"
  op[2].style.backgroundColor="rgba(255,255,255,.2)"
  
  caixa.style.backgroundImage="url('imagem/4.jpg')"
}