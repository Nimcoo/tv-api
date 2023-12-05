document.querySelector("#search").addEventListener("click",function(){
   let movie =document.querySelector(".searche-box").value;
   console.log(movie)
   fetch(" https://api.tvmaze.com/search/shows?q=presion")
   .then((res)=>{
    return res.json()
   })
   .then((date)=>{
    console.log(date)
    document.querySelector(".movies-section").innerText =date.name
    document.querySelector(".movie-card").innerText =date.movie
    
   })

})
