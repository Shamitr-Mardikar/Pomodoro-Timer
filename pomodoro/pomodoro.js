let studytitle = document.getElementById('study');
let breaktitle = document.getElementById('break');

let studytime = 60;
let breaktime = 10;

let seconds = "00";

window.onload = () => {
    document.getElementById('minutes').innerHTML = studytime;
    document.getElementById('seconds').innerHTML = seconds;

    studytitle.classList.add('active');
}

function start()
{
    document.getElementById('start').style.display ="none";
    document.getElementById('reset').style.display ="block";
    
    seconds = 59;

    let studyminutes = studytime - 1;
    let breakminutes = studytime - 1;

    breakCount = 0;

    let timerfunction = () => {
        document.getElementById('minutes').innerHTML = studyminutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds - 1;

        if(seconds === 0){
            studyminutes = studyminutes - 1;
            if(studyminutes === -1){
                if(breakCount % 2 === 0){
                    studyminutes = breakminutes;
                    breakCount++

                    studytitle.classList.remove('active');
                    breaktitle.classList.add('active');
                }else{
                    studyminutes = studytime;
                    breakCount++
                    
                    breaktitle.classList.remove('active');
                    studytitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    setInterval(timerfunction,1000);
}