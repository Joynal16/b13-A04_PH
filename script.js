let total =document.getElementById("total");
let interview =document.getElementById("interview");
let rejected =document.getElementById("rejected");




document.getElementById('mobile-btn')
.addEventListener('click', function(){
    // interview
    let interview =document.getElementById("interview");
    interview.innerText = parseInt(interview.innerText) + 1;
    total.innerText = parseInt(total.innerText) + 1;

    // rejected
    let rejected =document.getElementById("rejected");
    rejected.innerText = parseInt(rejected.innerText) + 1;
    total.innerText = parseInt(total.innerText) + 1;
})
