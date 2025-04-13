let button = document.querySelector("button");



setInterval(() => {
    let now = new Date();
    button.innerHTML = now.toLocaleTimeString();
},1000);