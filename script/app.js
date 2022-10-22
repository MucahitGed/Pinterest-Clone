const key = 'tWQPoTzgmp0SaGyATulPvRlo0wLAyl3KADtbxkrO6ug'
const API_URL = 'https://api.unsplash.com'
const cards = document.querySelectorAll('.card')
const input_populers = document.querySelectorAll('.dropdown-grid li')
const container = document.querySelector('.content-container');
const input = document.querySelector('.dropdown-search')

for(let i = 0; i < cards.length ; i++){
    cards[i].innerHTML = `
    <div class="card-header card-item">
            <div></div>
            <button class="saveBtn">Save</button>
    </div>
    <div class="card-footer card-item">
        <div class="card-user">
            <div class="logo-user"><i class="fa-solid fa-user"></i></div>
            <div class="name-user">User</div>
        </div>
    <div class="downloadIcon">
            <i class="fa-thin fa-arrow-down-to-line"></i>
    </div>
  </div>`
}
// ${API_URL}/photos/?client_id=${key}
    const url = `${API_URL}/photos/?client_id=${key}`;


    fetch(`${API_URL}/photos/?client_id=${key}&per_page=31`)
    .then((req) => req.json())
    .then((data) => {
        loadImages(data)
        populers(data)
    }
    )


function loadImages(data){
        for(let i = 0; i < cards.length ; i++){ 
            cards[i].style.backgroundImage = `url('${data[i].urls.full}')`
         }
}


function populers(data){
    for(let i = 0; i < input_populers.length ; i++){
        input_populers[i].style.backgroundImage = `url('${data[i].urls.full}')`
    }
}

focusInput()
function focusInput(){
    input.addEventListener('focus' , ()=> {
        
        container.style.setProperty('--disp' , 'block')
    })
    input.addEventListener('blur' , ()=> {
        
        container.style.setProperty('--disp' , 'none')
    })
}

// login