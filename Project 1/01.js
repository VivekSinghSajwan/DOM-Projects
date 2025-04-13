let body = document.querySelector("body");
console.log(body)
spans = document.querySelectorAll('span');
spans.forEach((span) => {
    span.addEventListener('click',function(e){
        console.log(e.target);
        let color = e.target.className;
        console.log(color);
        body.style.backgroundColor = color;
    })
})