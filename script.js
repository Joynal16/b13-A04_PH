let interviewList = [];
let rejectedList = [];

let total =document.getElementById("total");
let interview =document.getElementById("interview");
let rejected =document.getElementById("rejected");



const allFilterBtn = document.getElementById('all-filter-btn');
const interviewBtn = document.getElementById('interview-filter-btn');
const rejectedBtn = document.getElementById('rejected-filter-btn');


const allCards = document.getElementById('all-cards');
const filterSection =document.getElementById('filtered-section');
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

   //console.log(cardInfo);
   const interviewExist =interviewList.find(item=> item.mobileFirst == cardInfo.mobileFirst);

   if(!interviewExist){
      interviewList.push(cardInfo);
   }
   renderInterview();

   //console.log(interviewList);

});


function renderInterview (){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview);


        let div = document.createElement('div')
        div.className ='bg-gray-100 rounded-lg shadow-md'
        div.innerHTML = `
          <div class=" p-6 flex justify-between ">
                    <div class="">
                        <h1 class=" mobile-first text-xl font-bold">Mobile First Corp</h1>
                        <p class=" react-native text-gray-500">React Native Developer</p>
                    </div>
                    <div>
                       <p class="delete-btn-1 shadow-md rounded-full p-1"><i class="fa-solid fa-trash-can"></i></p>
                    </div>
                </div>
               <div class="px-6">
                 <p class="remote-1 text-gray-500">Remote
 • 
Full-time 
•
 $130,000 - $175,000</p>
               </div>
                <div class="p-6">
                    <button  class="status bg-blue-100 px-2 py-2 mb-2 rounded-sm shadow-sm">NOT APPLIED</button>
                    <p class="note-1 mb-[-16px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                </div>
                 <div class="p-6">
                    <button id="interview-btn" class="border-2 border-green-500  px-2 py-1 rounded-sm text-green-600 font-semibold mr-1 hover:bg-green-200">INTERVIEW</button>
                    <button id="rejected-btn" class="border-2 border-red-500 px-2 py-1 text-red-500 rounded-sm font-semibold hover:bg-red-200">REJECTED</button>
                </div>
        
        `
    }
}



