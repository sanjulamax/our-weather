const btn = document.querySelector("#searchButton") ;
const base = document.querySelector("#base") ;
const body = document.querySelector("body") ;
const icon = document.querySelector("#icon1") ;
const images = document.querySelector("#images1") ;
const info = document.querySelector("#otherInfo")  ;
const temp = document.querySelector("#temp") ;
const wind = document.querySelector("#wind") ;
const states = document.querySelector("#states") ; 
const humidi = document.querySelector("#humidi") ; 
const humidicon = document.querySelector("#humidicon") ;
const stateicon = document.querySelector("#stateicon") ;
const windicon = document.querySelector("#humidicon") ;




btn.onmouseover = () => {

    icon.style.color = "black" ;



    


}

btn.onmouseleave = () => {

        icon.style.color = "white" ;

}

btn.onclick = () => {
    console.log(1) ;


    
    base.style.opacity = 1 ;

    console.log(2) ;

    const APIKey = "0f50032ad6d1a4ccd3aca943054b2d7a" ;


    const city = document.getElementById("searchText").value ;

    console.log(3) ;


    if(city == "")
        return ;
        temp.innerHTML = "LOADING" ;
        temp.innerHTML = ` NOTHING FOUND`
        


      

        
        


    console.log(4) ;

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then (json => {

            if(json.cod == "404" ) {

                images.setAttribute("src" , "404.png") ;
                

            }

            switch(json.weather[0].main) {

                case "Clear" :
                    images.setAttribute("src" , "clear.png") ;
                    break ;
                case "Rain" :
                    images.setAttribute("src" , "rain.png") ;
                    break ;
                case "Snow" :
                     images.setAttribute("src" , "snow.png") ;
                    break ;
                case "Clouds" :
                    images.setAttribute("src" , "cloud.png") ;
                    break ;
                case "Haze" :
                    images.setAttribute("src" , "mist.png") ;
                    break ;
                
                default :
                images.setAttribute("src" , "OIP.jpg") ;


            }

            

            temp.innerHTML = ` ${json.main.temp} c`
            states.innerHTML = `STATES : ${json.weather[0].description}`
            humidi.innerHTML  =` HUMIDITY : ${json.main.humidity}`
            wind.innerHTML  = `  WIND SPEED : ${json.wind.speed} KM/H`

        })



   
       



    




}