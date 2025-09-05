// lesson button data loader
const lessonData = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => displayLesson(json.data))
}

//word lave Lesson function
const wordLesson =(id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayWord(data.data))
}

const displayWord =(words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

    words.forEach(word => {
        const card = document.createElement('div');
        card.innerHTML = `
        
            <div class="card card-dash bg-base-100 w-96 text-center">
                <div class="card-body space-y-4">
                    <h2 class=" text-center text-2xl font-bold">${word.word}</h2>
                    <p class="font-semibold">Meaning /Pronounciation</p>
                    <span class="font-bangla text-2xl  ">${word.meaning} / ${word.pronunciation}"</span>
                    <div class="flex justify-between">
                        <button class="btn btn-outline btn-primary rounded-full"><i class="fa-solid fa-circle-info"></i>
                        </button>

                        <button class="btn btn-outline btn-primary rounded-full"><i
                        class="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            </div>

        `;
        wordContainer.append(card);
        
    });
    
}

// display lesso btn data
const displayLesson = (lessons) => {
    // 1.get the apped container
    const lessonContainer = document.getElementById('lesson-btn-container');
    lessonContainer.innerHTML ="";
    // 2.the looping 
    for(let lesson of lessons){
        // 3. create a element   
         
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML =`
            <button onclick="wordLesson(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>
            lesson - ${lesson.level_no}
            </button>
        `;
    
        // 4. append child 
        lessonContainer.appendChild(btnDiv);
    }    
}
lessonData();
