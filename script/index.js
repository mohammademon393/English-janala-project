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
    .then(data => displayWord(data))
}

const displayWord =(words) => {
    console.log(words);
    
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
