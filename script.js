let a = document.getElementById("first");
a.addEventListener('mouseenter',function(){
    a.innerHTML = Math.floor(Math.random()*100)
})
a.addEventListener('mouseleave',function(){
    a.innerHTML = 1
})

// second box
let b = document.getElementById("second");
let colour  = 'green'
b.addEventListener('mouseenter',function(){
    if(colour == 'green'){
        b.style.backgroundColor = 'green'
        colour = 'red';
    }
    else {
        b.style.backgroundColor = "red"
        colour = "green";
    }
})
b.addEventListener('mouseleave',function(){
    b.style.backgroundColor = "white"
})

// third box 

let c = document.getElementById("three");
c.addEventListener('mouseenter',function(){
    let x = Math.floor(Math.random()*255)
    let y = Math.floor(Math.random()*255)
    let z = Math.floor(Math.random()*255)
    c.style.backgroundColor = `rgb(${x},${y},${z})`
})
c.addEventListener('mouseleave',function(){
    c.style.backgroundColor = "white"
})

// forth box

let d = document.getElementById("four");
d.addEventListener("click",function(){
    let x = Math.floor(Math.random()*255)
    let y = Math.floor(Math.random()*255)
    let z = Math.floor(Math.random()*255)
    let j = Math.floor(Math.random()*255)
    let k = Math.floor(Math.random()*255)
    let l = Math.floor(Math.random()*255)
    let p = Math.floor(Math.random()*255)
    let q = Math.floor(Math.random()*255)
    let r = Math.floor(Math.random()*255)
    c.style.backgroundColor = `rgb(${x},${y},${z})`
    a.style.backgroundColor = `rgb(${j},${k},${l})`
    b.style.backgroundColor = `rgb(${r},${q},${r})`
    // d.style.backgroundColor = 'red'
})
d.addEventListener('mouseleave',function(){
    c.style.backgroundColor = "white"
    a.style.backgroundColor = "white"
    b.style.backgroundColor = "white"
    d.style.backgroundColor = "white"
})