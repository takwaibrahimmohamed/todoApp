let inp=document.querySelector(".inp")
let add=document.querySelector(".add")
let addlist = document.querySelector('.addlist')
let list = document.querySelector('.list')
add.addEventListener(('click'),()=>{
   
    additem()
})
function additem(){
    let div =document.createElement('div')
    
    div.className = 'addlist'
    
    let text = document.createElement('span')
    text.className = "textspan"
    text.textContent = inp.value
    div.appendChild(text)
    let span = document.createElement('span')
    
    span.className = 'del'
    div.appendChild(span)
    span.innerHTML = 'delete'
if(inp.value !=''){
list.appendChild(div)
inp.value =""
}
else{
    alert("please fill input")
}
}


list.addEventListener(('click'),(e)=>{
    if(e.target.classList.contains('del')){
        
        e.target.parentNode.remove()
        console.log(e.target.parentNode)
    }
    if(e.target.classList.contains('textspan')){
        e.target.style.textDecoration = "line-through"
console.log(e.target.textContent)
    }
   
})
