
const submit= document.getElementById('submitBtn');
const cityname=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const middle_layer=document.getElementById('middle_layer');
const day=document.getElementById('day');
const date=document.getElementById('today_date');

const getshedule= ()=>{
    var d = new Date();
    const day_no = d.getDay();
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day.innerHTML=days[day_no];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    date.innerHTML=`${d.getDate()} ${ months[d.getMonth()]}`;
    return;

}

const getinfo= async (event) =>{
    getshedule();
    
    //to stop reloding of page on clicking btn
   event.preventDefault();
    let cityval=cityname.value;
    if(cityval=="")
    {
            city_name.innerHTML="plz enter the city name!!";
           middle_layer.style.display="none";

    }
    else{
        try{ 
           
        const url="https://api.openweathermap.org/data/2.5/weather?q="+cityval+"&units=metric&appid=132452eb9ca1bd21ebd3656f2ebe95f1";
        console.log(url);
        const response= await fetch(url);
       
        const data=await response.json();
        console.log(data);
        const arrdata= [data];
        //date and time

       
       // console.log(arrdata);

        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        const temperature=(arrdata[0].main.temp);

        temp.innerText=temperature;
        console.log(arrdata[0].main.temp);
       // temp_status.innerText=arrdata[0].weather[0].main;
        const tempMood=arrdata[0].weather[0].main;
        console.log(tempMood);
        //condition to check sunny or cloudy <i class='fa  fa-cloud-rain' style='color: #a4b0be;'></i>
        if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
            "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              //  if(middle_layer.style.display=="none")
              //  {
             //       middle_layer.style.display="block";
             //   }

            }
            if(middle_layer.style.display=="none")
              {
                 middle_layer.style.display="block";
             }
        

        }catch{
            city_name.innerText="plz enter valid city name!!";
            if(middle_layer.style.display=="block")
                {
                    middle_layer.style.display="none";
                }
        }
    }
   
    console.log("hii");
}

submit.addEventListener('click',getinfo);

