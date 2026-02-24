let interviewList = [];
let rejectedList = [];

let total =document.getElementById("total");
let interview =document.getElementById("interview");
let rejected =document.getElementById("rejected");



const allFilterBtn = document.getElementById('all-filter-btn');
const interviewBtn = document.getElementById('interview-filter-btn');
const rejectedBtn = document.getElementById('rejected-filter-btn');


const allCards = document.getElementById('all-cards');

const mainContainer = document.querySelector('main');
console.log(mainContainer);


function calculateCount(){
    total.innerText=allCards.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText =rejectedList.length;
}
calculateCount()


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500','text-white');
    interviewBtn.classList.remove('bg-blue-500','text-white');
    rejectedBtn.classList.remove('bg-blue-500','text-white');


    allFilterBtn.classList.add('bg-gray-200','text-black');
    interviewBtn.classList.add('bg-gray-200','text-black');
    rejectedBtn.classList.add('bg-gray-200','text-black');

    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove('bg-gray-200','text-black');
    selectedBtn.classList.add('bg-blue-500','text-white');
}




mainContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    const mobileFirst = parentNode.querySelector('.mobile-first').innerText;
    const reactNative = parentNode.querySelector('.react-native').innerText;
    const deleteBtn = parentNode.querySelector('.delete-btn-1').innerText;
    const remoteFirst = parentNode.querySelector('.remote-1').innerText;
    const statusFirst = parentNode.querySelector('.status').innerText;
    const noteFirst = parentNode.querySelector('.note-1').innerText;

   //console.log(mobileFirst,reactNative,deleteBtn,remoteFirst,statusFirst,noteFirst);

   const cardInfo ={
      mobileFirst,
      reactNative,
      deleteBtn,
      remoteFirst,
      statusFirst,
      noteFirst
   }

   console.log(cardInfo);

});

