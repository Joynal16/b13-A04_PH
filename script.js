let total =document.getElementById("total");
let interview =document.getElementById("interview");
let rejected =document.getElementById("rejected");




document.getElementById('interview-btn')
.addEventListener('click', function(){
    // interview
    let interview =document.getElementById("interview");
    interview.innerText = parseInt(interview.innerText) + 1;


})

document.getElementById('rejected-btn')
.addEventListener('click', function(){

      // rejected
    let rejected =document.getElementById("rejected");
    rejected.innerText = parseInt(rejected.innerText) + 1;
})
