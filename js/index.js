

$(function(){
  $(".loading").addClass("d-none");
})



$("li a").on("click",function(e){
   $(".navbar .active").removeClass("active");
   $(e.target).addClass("active");
   let category=  $(e.target).attr("data");
   
   getdata(category);

     
})
// $(".item1").siblings().css("color","red");

let data ;
let datalength;

async function getdata(cat){
  if(cat == null){
    cat="MMORPG";
  }
   
  const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '68829c0aafmsh6e92528ea50c196p1f8e69jsnae20f5ec5cef',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
   };
  
const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options)
       data = await response.json();
     console.log(data);
   displaydata();
      
}


function displaydata(){

      let cols =``;
      for(let i= 0; i< data.length; i++){
         cols += `
         <div class="col-md-3 ">
         <div>
           <div class="card group p-3">
             <img src="${data[i].thumbnail}" class="card-img-top mb-2" alt="...">
             <div class="d-flex justify-content-between  align-items-center ">
             <h6 class="card-title text-white ">${data[i].title}</h6>
             <button class="btn btngroup text-white ">Free</button>
           </div>
             <p class="card-text text-center pgroup">${data[i].short_description}</p>
             <hr>
             <div class="card-body d-flex align-content-center justify-content-between p-0">
               <span  class="badge">${data[i].genre}</span>
               <span class="badge">${data[i].platform}</span>
             </div>
           </div>
         </div>
       </div>
         `
      }
      document.getElementById("data").innerHTML=cols ;
}


 document.querySelectorAll(".card").forEach((card)=>{
  card.addEventListener("click" ,() => {
    console.log("hello");
  })
 })




 

 