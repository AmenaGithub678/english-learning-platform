// Function 1--- for lesson levels
function loadLessonLevel() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayLoadLessonLevel(data.data))
        .catch(error => console.error("Error loading lesson levels:", error));
}

// Function to display lesson levels
function displayLoadLessonLevel(data) {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";  
    for (const levData of data) {
        console.log(levData);

        const levelDiv = document.createElement("div");
        levelDiv.innerHTML = `
        <button class="btn border-[#422AD5] bg-white text-[#422AD5] hover:bg-[#422AD5] hover:text-white" data-level="${levData.level_no}">
            <i class="fas fa-book-open"></i> Lesson -${levData.level_no}
        </button>
        `;
     
        levelDiv.querySelector("button").addEventListener("click", function () {
            const level = this.getAttribute("data-level"); 
            loadLesson(level); 
        });

        levelContainer.appendChild(levelDiv);
    }
}

// Function-2 to load lessons based on level
function loadLesson(level) {
    fetch(`https://openapi.programming-hero.com/api/level/${level}`)
        .then(res => res.json())
        .then(data => displayLoadLesson(data.data))
        .catch(error => console.error(`Error loading lessons for level ${level}:`, error));
}

// Function to display lessons
const displayLoadLesson = (lessons) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 
  
 if(lessons.length ==0){
  
    cardContainer.innerHTML=`
    <div class=" flex flex-col col-span-full text-center justify-center items-center 
  bg-[#F8F8F8] mt-10 rounded-3xl">
    <img src="image/assets/alert-error.png" alt="" class="w-[120px] pt-16">
  <div>
      <p class="text-[#79716B] 
      font-normal text-sm ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h2 class="my-4 text-4xl font-medium text-[#292524]font-Hind-Siligur pb-16">নেক্সট Lesson এ যান</h2>
    </div> 
  </div>
        `;
   return;
    }

    for (const lesson of lessons) {
        console.log(lesson);

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
        <div class="mt-10">
            <div class="card bg-base-100 card-md shadow-sm">
                <div class="card-body">
                    <h2 class="text-xl font-bold text-[#18181B] text-center">${lesson.word}</h2>
                    <p class="text-xl font-medium text-[#000000] text-center">Meaning / Pronunciation</p>
                    <h3 class="font-semibold text-2xl text-[#18181B] text-center font-Hind-Siliguri">
                        ${lesson.meaning} / ${lesson.pronunciation}
                    </h3>
    <div class="flex justify-between ">
        <button class="bg-[#1A91FF10] w-[56px] h-[56px] rounded"> 
        <i onclick = "loadLessonDetails('${lesson.id}')" class="fas fa-info-circle text-[#374957]">
        </i>
        </button>
          <button class="bg-[#1A91FF10] w-[56px] h-[56px] rounded text-[#374957]">
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;

        cardContainer.appendChild(videoCard);
    }
}


//loadLessonDetails function for modal
const loadLessonDetails = (id) => {

console.log("Lesson Details:", id); 
 const url = `https://openapi.programming-hero.com/api/word/${id}`;
 fetch(url)
 .then(res=>res.json())
 .then(dat=>displayLoadLessonDetails(dat.data))
}



document.addEventListener("DOMContentLoaded", () => {
    loadLessonLevel();
});

const displayLoadLessonDetails =(data)=>{
    console.log(data);
    document.getElementById("lesson_details").showModal();

    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML=`
    <div class="details-container">
        <h3 class="text-4xl font-bold text-[#000000]">
    ${data.word} 
          (<i class="fas fa-microphone px-1"></i>:
    ${data.pronunciation || ''})
        </h3>
    <p 
    class="text-2xl font-semibold
     text-[#000000]">
     Meaning
    </p>
      <h4 class="text-2xl 
        font-medium text-[#000000] 
        font-Hind-Siliguri">
       ${data.meaning}
    </h4>
      <h4>
      Example <br> ${data.sentence}
      </h4>
    <h3> সমার্থক শব্দ গুলো <br>
        ${data.synonyms && data.synonyms.length >= 3 
        ? data.synonyms.slice(0, 3).map(synonym => `<button class="btn bg-[#D7E4EF] mr-4">${synonym}</button>`).join(' ') 
        : '<p>No synonyms available</p>'
    }
    </h3>
    <div class="modal-action justify-start">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn bg-[#422AD5] text-white rounded">
        Complete Learning</button>
      </form>
    </div>
  </div>`;
}

// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }
// {
// "status": true,
// "message": "successfully fetched a word details",
// "data": {
// "word": "Eager",
// "meaning": "আগ্রহী",
// "pronunciation": "ইগার",
// "level": 1,
// "sentence": "The kids were eager to open their gifts.",
// "points": 1,
// "partsOfSpeech": "adjective",
// "synonyms": [
// "enthusiastic",
// "excited",
// "keen"
// ],
// "id": 5
// }
// }