const item = document.createElement("button");
item.textContent = "Click";

item.addEventListener('click', ((n)=>{     
    return () => {
        console.log(n++);
    }    
})(1))


document.body.appendChild(item)


