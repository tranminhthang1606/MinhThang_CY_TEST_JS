let box = document.querySelector('.block');

function moveBox(top, left, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            box.style.top = top;
            box.style.left = left;
            resolve();
        }, delay);
    });
}

moveBox("0px", "calc(100% - 100px)", 2000)  
    .then(() => moveBox("calc(100% - 100px)", "calc(100% - 100px)", 2000)) 
    .then(() => moveBox("calc(100% - 100px)", "0px", 2000))               
    .then(() => moveBox("0px", "0px", 2000))                              
    .catch(error => console.error(error));