//https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}
//https://api.unsplash.com/search/photos?page=1&query=gonnabeinput

const searchApi = 'https://api.unsplash.com/search/photos?page=1&query'
input.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });


input.addEventListener('change' , (e)=>{
    console.log(e.target.value)
    
    let value = e.target.value.toLowerCase()
    
    console.log(value)

    fetch(`${searchApi}=${value}&client_id=${key}&per_page=31`)
    .then(res => res.json())
    .then(data_input => {
        console.log(data_input)  
         searchImages(data_input)
    })
    
})

function searchImages(data_input){
    for(let i = 0; i < cards.length ; i++){ 
        cards[i].style.backgroundImage = `url('${data_input.results[i].urls.full}')`
     }
     input.value = ''
}
