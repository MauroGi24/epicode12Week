function search(){
    let ricerca = document.getElementById('ricerca').value
    let tipologia = document.getElementById('type').value
    let urlFetch = ""
    urlFetchPhoto ="https://api.pexels.com/v1/search?query="
    urlFetchVideo ="https://api.pexels.com/videos/search?per_page=8&query="
    if (tipologia === "Photo"){
        urlFetch = urlFetchPhoto
    }
    else {
        urlFetch = urlFetchVideo
    }
    fetch(urlFetch + ricerca, {
        headers: {
            "authorization": "PoczZ33v8RuXerOLXclc9ESuWLH1xtDtQfytdZ226opp5oXeri2R64IU",
        }
    })
    .then(response => {
        return response.json()
    })
    .then(result =>{
        ricerca= document.getElementById('ricerca').value= ""   
        let image = document.getElementById('image')
    switch(tipologia) {
        case 'Photo':
            for (i of result.photos)  {  
                
                image.innerHTML += "<div class='col-6 col-md-3 gy-3'><img class='img-fluid' src="+ i.src.medium + "></div>"
            }
            break
        case 'Video':
            for (i of result.videos) {
                console.log(i)
                 image.innerHTML += "<video class='col-6 col-md-3 gy-3' src=" + i.video_files[0].link + " controls>" 
            }
            break
        default: 
         alert('What are you looking for?')
        }           
    });
        image.innerHTML=""
}
