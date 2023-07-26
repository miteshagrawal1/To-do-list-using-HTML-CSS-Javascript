let btn = document.getElementById('btn')
let todocontainer = document.getElementById('todocontainer')
let input = document.getElementById('input')

btn.addEventListener('click' , ()=>{

    if(input.value == ''){
        alert("Enter some Task")
    }
    else{
        var paragraph = document.createElement('p');
        paragraph.innerText = input.value;
        todocontainer.appendChild(paragraph);
        input.value = "  ";
        paragraph.addEventListener('click',()=>{
            paragraph.style.textDecoration = "line-through";
            paragraph.style.color = "green";
        })
        paragraph.addEventListener('dblclick',()=>{
            todocontainer.removeChild(paragraph);
        })
    }
})
