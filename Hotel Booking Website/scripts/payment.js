

bookClick(sessionStorage.getItem("ID"));
document.getElementById("pay-button").addEventListener("click",payClick);

   
   sessionStorage.getItem("fromDate");
   sessionStorage.getItem("toDate");
   sessionStorage.getItem("price");

function payClick(){
    alert("Hi Your Payment is successful!!")
}

function bookClick(cityID){
    const data = null;
 
 const xhr = new XMLHttpRequest();
 xhr.withCredentials = false;
 
 xhr.addEventListener("readystatechange", function () {
     if (this.readyState === this.DONE) {
       paymentData = JSON.parse(this.response);
      // console.log(paymentData);

       document.getElementById('paymentName').innerHTML = `${paymentData.data[0].name}`;
       document.getElementById('paymentSerial').innerHTML = `${paymentData.data[0].ranking}`;
       document.getElementById('paymentAddress').innerHTML = `${paymentData.data[0].address}`;
       document.getElementById('paymentImg').src = `${paymentData.data[0].photo.images.small.url}`;

      
    
     }
 });
 
 xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${cityID}&adults=1&lang=en_US&child_rm_ages=7%2C10&currency=USD&nights=1`);
 xhr.setRequestHeader("x-rapidapi-key", "26c423bc8fmsh92e44b016fae6c7p1fd18fjsna7c38086134c");
 xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
 
 xhr.send(data);
 }

 document.getElementById('formName').innerHTML += ` ${sessionStorage.getItem("name")}`;
 document.getElementById('formAdults').innerHTML += ` ${sessionStorage.getItem("adult")}`;
 document.getElementById('formIn').innerHTML += ` ${sessionStorage.getItem("fromDate")}`;
 document.getElementById('formOut').innerHTML += ` ${sessionStorage.getItem("toDate")}`;
 document.getElementById('formBreak').innerHTML += ` Rs1000 x ${sessionStorage.getItem("adult")} adults x ${sessionStorage.getItem("days")} nights`;
 document.getElementById('formAmount').innerHTML += ` Rs.${sessionStorage.getItem("price")}`;