let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el')
let count = 0;


function add(){
    
    count = count + 1;
    countEl.innerText = count;
}
function dec(){
    let count = parseInt(document.getElementById('count-el').innerText);
    let addCount = count - 1;
    document.getElementById('count-el').innerText = addCount;

}
function save(){
    let countStr = count + ' - ';
    saveEl.textContent += countStr; //textContent is equal to innerText but less restricted, good for reading symbols
    countEl.innerText = 0
    count = 0
}