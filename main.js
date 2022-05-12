const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': 'e2a4189345msheae2b93a6889971p172235jsn828fa5e368f0'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=doctor', options)
	.then(response => response.json())
    
	.then(response =>{

        const list = response.d;
        
        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie =`<li><img src="${poster}"> <h2>${name}</h2>></li>`
            document.querySelector('.movies').innerHTML += movie;
        })

    })
	.catch(err => console.error(err));