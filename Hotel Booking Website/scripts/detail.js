document.onreadystatechange = function() {
   if (document.readyState !== "complete") {
       document.querySelector("body").style.visibility = "hidden";
       document.querySelector(".loader").style.visibility = "visible";
  } else {
      document.querySelector(".loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
   }
};
console.log(sessionStorage.getItem("ID"));
hotelDetailsClick(sessionStorage.getItem("ID"));



document.getElementById("adult").addEventListener("change",booking);
document.getElementById("toDate").addEventListener("change",booking);
document.getElementById("fromDate").addEventListener("change",booking);


function booking(){
     let adults = document.getElementById("adult").value;
     let fromDate = new Date(document.getElementById("fromDate").value);
     let toDate = new Date(document.getElementById("toDate").value);
     let days = (toDate.getTime()-fromDate.getTime())/(60*60*1000*24);
     let total = (days)*adults*1000;

     sessionStorage.setItem("days", days);
     if(total !== NaN){
        document.getElementById("price").value=total;
     }
    
    
}

function hotelDetailsClick(cityID){
   const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
      detailsData = JSON.parse(this.response);

     // document.getElementById().innerHTML = ``;
      document.getElementById('detailName').innerHTML = `${detailsData.data[0].name}`;
      for(let j=0; j<5;j++){
      document.getElementById('detailAmenities').innerHTML += `<li>${detailsData.data[0].amenities[j].key}</li>`;
      }

      document.getElementsByClassName("slider-image")[0].src = `${detailsData.data[0].photo.images.medium.url}`;
      document.getElementById('detailDesc').innerHTML = `${detailsData.data[0].description}`;
		console.log(detailsData.data[0].name);
      console.log(detailsData.data[0].rating);
      console.log(detailsData.data[0]);
     // console.log(detailsData.data[0].description);
     // console.log(detailsData.data[0].name);
	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${cityID}&adults=1&lang=en_US&child_rm_ages=7%2C10&currency=USD&nights=1`);
xhr.setRequestHeader("x-rapidapi-key", "26c423bc8fmsh92e44b016fae6c7p1fd18fjsna7c38086134c");
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");

xhr.send(data);
}

//document.getElementById('adult').value = 5;
//console.log(document.getElementById('adult').value);

document.getElementById('book-now').addEventListener("click",formData);

function formData(){
   console.log('1');
   sessionStorage.setItem("adult", document.getElementById('adult').value);
   sessionStorage.setItem("name", document.getElementById('name').value);
   sessionStorage.setItem("fromDate", document.getElementById('fromDate').value);
   sessionStorage.setItem("toDate", document.getElementById('toDate').value);
   sessionStorage.setItem("price", document.getElementById('price').value);
}

