const day = document.querySelector(".day");
const month = document.querySelector(".month");
const generateZodiac = document.querySelector(".b-1");
const updateButton = document.querySelector(".b-2");
const result = document.querySelector(".out");

updateButton.onclick = function(){
    window.location.reload();
}

generateZodiac.onclick = function() {
    if(
       day.value != "" && (+day.value >= 1 && +day.value <= 31) &&
       month.value != "" && (+month.value >= 1 && +month.value <= 12) ) {
        
        let m = +month.value;
        let d = +day.value;

        if((m==3 && d >=21) || (m==4 && d<=20)) {
            result.innerHTML = "<img src='img/oven.png'>";
        }

        if((m==4 && d >=21) || (m==5 && d<=20)) {
            result.innerHTML = "<img src='img/telec.png'>";
        }

        if((m==5 && d >=21) || (m==6 && d<=20)) {
            result.innerHTML = "<img src='img/bliznec.png'>"
        }
        
        if((m==6 && d>=21) || (m==7 && d<=22)){
            result.innerHTML = "<img src = 'img/rak.png'>"
        }

        if((m==7 && d>=23) || (m==8 && d<=22)){
            result.innerHTML = "<img src = 'img/lion.png'>"
        }

        if((m==8 && d>=23) || (m==9 && d<=22)){
            result.innerHTML = "<img src = 'img/diva.png'>"
        }

        if((m==9 && d>=23) || (m==10 && d<=22)){
            result.innerHTML = "<img src = 'img/vesu.png'>"
        }
        
        if((m==10 && d>=23) || (m==11 && d<=22)){
            result.innerHTML = "<img src = 'img/scorpion.png'>"
        }
        
        if((m==11 && d>=23) || (m==12 && d<=22)){
            result.innerHTML = "<img src = 'img/strelec.png'>"
        }

        if((m==12 && d>=22) || (m==1 && d<=19)){
            result.innerHTML = "<img src = 'img/kozel.png'>"
        }
        
        if((m==1 && d>=20) || (m==2 && d<=19)){
            result.innerHTML = "<img src = 'img/vodoley.png'>"
        }

        if((m==2 && d>=20) || (m==3 && d<=20)){
            result.innerHTML = "<img src = 'img/rubu.png'>"
        }

        


       

    } else {
        result.innerText = "Ошибка вводных данных";
    }
}
