
           
 document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader").style.visibility = "visible";
   } else {
       document.querySelector(".loader").style.display = "none";
       document.querySelector("body").style.visibility = "visible";
    }
};
console.log(localStorage.getItem("HHH"));
cityCardsClick(localStorage.getItem("HHH"));


function cityCardsClick(cityName){
    console.log(cityName);
    
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var finalData=JSON.parse(this.response)
           // console.log(finalData.data[6]);

            for(let i=0;i<finalData.data.length ;i++){
                if(finalData.data[i].result_type ==="lodging"){

                    var listCard = `<a class="anchor-tag" id="${finalData.data[i].result_object.location_id}" href = "detail.html" onclick = "getID(this.id)">
                    <div class="hotel">
                        <img src="${finalData.data[i].result_object.photo.images.small.url}" class="hotel-image-small">
                        <div class="hotel-name-rating">
                            <h5>${finalData.data[i].result_object.name}</h5>
                            <div id="rating">
                            <span class="fa fa-star checked" id="1"></span>
                            <span class="fa fa-star checked" id="2"></span>
                            <span class="fa fa-star checked" id="3"></span>
                            <span class="fa fa-star-half-o checked" id="4"></span>
                            <span class="fa fa-star unchecked" id="5"></span>
                            </div>
                            <p>${finalData.data[i].result_object.address}</p>
                        </div>
                    </div>
                </a>`;
                
                var rating = finalData.data[i].result_object.rating;

                
                
               
                document.getElementById('list-view').innerHTML += listCard;

               /* for (let j=1; j<=5 ;j++){
                    document.getElementById(j).className = "fa fa-star unchecked";
                }  */

                console.log(finalData.data[i].result_object.location_id);
            }
            console.log(finalData.data[5].result_object.name);
            
            console.log(finalData.data[5].result_object.location_id);
            console.log(finalData.data[5].result_object.rating);
            console.log(finalData.data[5].result_object.address);
            console.log(finalData.data[5].result_object.photo.images.small);
            
            
            }
        }


    });
    
    xhr.open("GET", `https://travel-advisor.p.rapidapi.com/locations/search?query=${cityName}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`);
    xhr.setRequestHeader("x-rapidapi-key", "26c423bc8fmsh92e44b016fae6c7p1fd18fjsna7c38086134c");
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    
    xhr.send(data);

}

function getID(str){
    console.log(str);
    sessionStorage.setItem("ID",str);
}
