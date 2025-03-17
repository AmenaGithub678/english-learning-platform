// // Function 1--- for lesson levels
// function loadLessonLevel() {
//     fetch("https://openapi.programming-hero.com/api/levels/all")
//         .then(res => res.json())
//         .then(data => displayLoadLessonLevel(data.data))
//         .catch(error => console.error("Error loading lesson levels:", error));
// }

// // Function to display lesson levels
// function displayLoadLessonLevel(data) {
//     const levelContainer = document.getElementById("level-container");
//     levelContainer.innerHTML = "";  

//     for (const levData of data) {
//         console.log(levData);

//         const levelDiv = document.createElement("div");
//         levelDiv.innerHTML = `
//         <button class="btn border-[#422AD5] bg-white text-[#422AD5]" data-level="${levData.level_no}">
//             <i class="fas fa-book-open"></i> Lesson -${levData.level_no}
//         </button>
//         `;
     
//         levelDiv.querySelector("button").addEventListener("click", function () {
//             const level = this.getAttribute("data-level"); 
//             loadLesson(level); 
//         });

//         levelContainer.appendChild(levelDiv);
//     }
// }

// // Function-2 to load lessons based on level
// function loadLesson(level) {
//     fetch(`https://openapi.programming-hero.com/api/level/${level}`)
//         .then(res => res.json())
//         .then(data => displayLoadLesson(data.data))
//         .catch(error => console.error(`Error loading lessons for level ${level}:`, error));
// }

// // Function to display lessons
// const displayLoadLesson = (lessons) => {
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = ""; 

//     for (const lesson of lessons) {
//         console.log(lesson);

//         const videoCard = document.createElement("div");
//         videoCard.innerHTML = `
//         <div class="mt-10">
//             <div class="card bg-base-100 card-md shadow-sm">
//                 <div class="card-body">
//                     <h2 class="text-xl font-bold text-[#18181B] text-center">${lesson.word}</h2>
//                     <p class="text-xl font-medium text-[#000000] text-center">Meaning / Pronunciation</p>
//                     <h3 class="font-semibold text-2xl text-[#18181B] text-center font-Hind-Siliguri">
//                         ${lesson.meaning} / ${lesson.pronunciation}
//                     </h3>
//                     <div class="flex justify-between ">
//                         <button class="bg-[#1A91FF10] w-[56px] h-[56px] rounded">
//                             <i class="fas fa-info-circle text-[#374957]"></i>
//                         </button>
//                         <button class="bg-[#1A91FF10] w-[56px] h-[56px] rounded text-[#374957]">
//                             <i class="fas fa-volume-up"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;

//         cardContainer.appendChild(videoCard);
//     }
// }


// document.addEventListener("DOMContentLoaded", () => {
//     loadLessonLevel();
// });
