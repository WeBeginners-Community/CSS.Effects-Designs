let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");






window.addEventListener("load" ,()=>{

let long;
let lat;

if(navigator.getlocation)
{   

    navigator.geolocation.getCurrentPosition((position)=>)
    {



        long=position.coords.longitude;
        lat=position.coords.latitude;
        const proxy="https://cors-anywhere.herokuapp.com/"
           
        const api=`$(proxy)https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=5f4e8e5d84d2fc081a0b008d7460923a`
           
           fetch(api).then((response))=>{
            
           return response.json();
           

           })

           .then (data =>
            {

                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];


                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
                if(id<300 && id>200)
                {
                    tempicon.src="C:\kush\Documents\Users\thunderstorms.jpg"
                }
                else if(id<400 && id>300)
                {
                    tempicon.src="C:\kush\Documents\Users\cloud-solid.jpg"
                }
                else if(id<600 && id>500)
                {
                    tempicon.src="C:\kush\Documents\Users\rain.jpg"
                }
                else if(id<700 && id>600)
                {
                    tempicon.src="C:\kush\Documents\Users\snow.jpg"
                }
                else if(id<800 && id>700)
                {
                    tempicon.src="C:\kush\Documents\Users\clouds.jpg"
                }
                else if(id==800)
                {
                    tempicon.src="C:\kush\Documents\Users\clouds-and-sun .jpg"
                }

                console.log(data);

            })