var inputval = document.querySelector('#cityinput')
var longinput = document.querySelector('#longinput')
var latinput = document.querySelector('#latinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var country = document.querySelector("#country")
var minTemp = document.querySelector("#mintemp")
var maxTemp = document.querySelector("#maxtemp")
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var winddirec = document.querySelector('#winddirec')
var feelslike = document.querySelector('#feelslike')
var humiditys = document.querySelector("#humaditys")
var pressure = document.querySelector('#pressure')
var timeAndDate = document.querySelector('#timeanddate')
apik = "8f7daab43adb0468bff443c089dd4b60"

function convertion(val)
{
    return (val - 273).toFixed(2)
}
btn.addEventListener('click', function()
{
  if(inputval.value != null && inputval.value != ""){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())

  .then(data => 
    {
      var nameval = data['name']
      var countryname = data['sys']['country']
      let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
      var cname = regionNames.of(countryname);  // "United States"
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var mintempature = data['main']['temp_min']
      var maxtempature = data['main']['temp_max']
      var feels_like = data['main']['feels_like']
      var humadity_like = data['main']['humidity']
      var pressure_like = data['main']['pressure']
      var timedate = new Date();
      var wndspd = data['wind']['speed']
      var wndsdeg = data['wind']['deg']
      var degrees = wndsdeg;
  
      // Define array of directions
      var directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
  
      // Split into the 8 directions
      degrees = degrees * 8 / 360;
  
      // round to nearest integer.
      degrees = Math.round(degrees, 0);
  
      // Ensure it's within 0-7
      degrees = (degrees + 8) % 8
  
      city.innerHTML=`Weather of <span>${nameval}<span>`
      timeAndDate.innerHTML = `Date & Time: <span>${timedate} C</span>`
      temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
      minTemp.innerHTML = `Min Temperature: <span>${ convertion(mintempature)} C</span>`
      maxTemp.innerHTML = `Max Temperature: <span>${ convertion(maxtempature)} C</span>`
      feelslike.innerHTML = `Feels Like Temperature: <span>${ convertion(feels_like)} C</span>`
      humiditys.innerHTML = `Humadity: <span>${humadity_like} C</span>`
      pressure.innerHTML = `Pressure: <span>${pressure_like} C</span>`
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
      winddirec.innerHTML = `Wind Direction: <span>${wndsdeg}  degrees ${directions[degrees]} <span>`
      country.innerHTML = `Country: <span>${cname}<span>`
  
    })

  .catch(err => alert('You entered Wrong city name'))
}
else{
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latinput.value+'&lon='+longinput.value+'&appid='+apik)
  .then(res => res.json())

  .then(data => 
    {
      var nameval = data['name']
      var countryname = data['sys']['country']
      let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
      var cname = regionNames.of(countryname);  // "United States"
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var mintempature = data['main']['temp_min']
      var maxtempature = data['main']['temp_max']
      var feels_like = data['main']['feels_like']
      var humadity_like = data['main']['humidity']
      var pressure_like = data['main']['pressure']
      var timedate = new Date();
      var wndspd = data['wind']['speed']
      var wndsdeg = data['wind']['deg']
      var degrees = wndsdeg;
  
      // Define array of directions
      var directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
  
      // Split into the 8 directions
      degrees = degrees * 8 / 360;
  
      // round to nearest integer.
      degrees = Math.round(degrees, 0);
  
      // Ensure it's within 0-7
      degrees = (degrees + 8) % 8
  
      city.innerHTML=`Weather of <span>${nameval}<span>`
      timeAndDate.innerHTML = `Date & Time: <span>${timedate} C</span>`
      temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
      minTemp.innerHTML = `Min Temperature: <span>${ convertion(mintempature)} C</span>`
      maxTemp.innerHTML = `Max Temperature: <span>${ convertion(maxtempature)} C</span>`
      feelslike.innerHTML = `Feels Like Temperature: <span>${ convertion(feels_like)} C</span>`
      humiditys.innerHTML = `Humadity: <span>${humadity_like} C</span>`
      pressure.innerHTML = `Pressure: <span>${pressure_like} C</span>`
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
      winddirec.innerHTML = `Wind Direction: <span>${wndsdeg}  degrees ${directions[degrees]} <span>`
      country.innerHTML = `Country: <span>${cname}<span>`
  
    })
  

  .catch(err => alert('You entered Wrong city name'))

}
});

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
   
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid='+apik)
  .then(res => res.json())

  .then(data => 
  {
    var nameval = data['name']
    var countryname = data['sys']['country']
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    var cname = regionNames.of(countryname);  // "United States"
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var mintempature = data['main']['temp_min']
    var maxtempature = data['main']['temp_max']
    var feels_like = data['main']['feels_like']
    var humadity_like = data['main']['humidity']
    var pressure_like = data['main']['pressure']
    var timedate = new Date();
    var wndspd = data['wind']['speed']
    var wndsdeg = data['wind']['deg']
    var degrees = wndsdeg;

    // Define array of directions
    var directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];

    // Split into the 8 directions
    degrees = degrees * 8 / 360;

    // round to nearest integer.
    degrees = Math.round(degrees, 0);

    // Ensure it's within 0-7
    degrees = (degrees + 8) % 8

    city.innerHTML=`Weather of <span>${nameval}<span>`
    timeAndDate.innerHTML = `Date & Time: <span>${timedate} C</span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    minTemp.innerHTML = `Min Temperature: <span>${ convertion(mintempature)} C</span>`
    maxTemp.innerHTML = `Max Temperature: <span>${ convertion(maxtempature)} C</span>`
    feelslike.innerHTML = `Feels Like Temperature: <span>${ convertion(feels_like)} C</span>`
    humiditys.innerHTML = `Humadity: <span>${humadity_like} C</span>`
    pressure.innerHTML = `Pressure: <span>${pressure_like} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
    winddirec.innerHTML = `Wind Direction: <span>${wndsdeg}  degrees ${directions[degrees]} <span>`
    country.innerHTML = `Country: <span>${cname}<span>`

  })
  

  .catch(err => alert('You entered Wrong city name'))
}