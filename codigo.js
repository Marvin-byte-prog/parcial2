const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=788ff3332f83ce78ece85329a9d322c8";
const urlIMG = "https://image.tmdb.org/t/p/w500";
let html = "";
const generos = []
fetch(api_url)
  .then((response) => response.json())
  .then((data) => {
    let imagen = document.getElementById("img-container");
    console.log(data.results)
    for (let i = 0; i <20; i++) {
      imagen.innerHTML += `
        <h2>Nombre: ${data.results[i].title}</h2>
        <h2>Fecha de Estreno: ${data.results[i].release_date}</h2>
        <img src='${urlIMG}${data.results[i].backdrop_path}' />
        `;
       
    }
    
  })

  .catch((error) => console.log(error));
