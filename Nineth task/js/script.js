window.addEventListener("DOMContentLoaded", function() {

    "use strict";

    let infoHeader = document.querySelector(".info-header"),
        infoHeaderTab = document.querySelectorAll(".info-header-tab"),
        infoTabcontent = document.querySelectorAll(".info-tabcontent");

    function onHide(element) {
        if(element.classList.contains("show")) {
            element.classList.remove("show");
        }

        if(!element.classList.contains("hide")) {
            element.classList.add("hide");
        }
    }

    function onShow(element) {
        if(element.classList.contains("hide")) {
            element.classList.remove("hide");
        }

        if(!element.classList.contains("show")) {
            element.classList.add("show");
        }
    }

    for(let i = 1; i < infoTabcontent.length; i++) {
        onHide(infoTabcontent[i]);
    }
    onShow(infoTabcontent[0]);

    infoHeader.addEventListener("click", function(event) {
        let target = event.target;
        
        if(target && event.target.classList.contains('info-header-tab')) {

            let activeTarget = document.querySelector('.info-tabcontent.show');
            for(let i = 0; i < infoTabcontent.length; i++) {
                if (target === infoHeaderTab[i]) {
                    if (activeTarget !== infoTabcontent[i]) {
                        onHide(activeTarget);
                        onShow(infoTabcontent[i]);
                    }
                    break;
                }
            }
        }
    });

    let deadline = new Date ("2020-03-31T00:41:00");

    function getTimeRemain (deadline) {
        let time = Date.parse(deadline) - Date.parse(new Date()),
            hours = Math.floor(time/1000/60/60),
            minutes = Math.floor((time/1000/60) % 60),
            seconds = (Math.floor(time/1000) % 60);
            
        return {
            time,
            hours,
            minutes,
            seconds
        };
    }

    function setTimer (deadline) {
        let timer = document.querySelector("#timer"),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        let timerIntervals = setInterval(function () {
            let time = getTimeRemain(deadline);
            if (time.time < 0) {
                clearInterval(timerIntervals);
                return;
            }

            if (time.hours < 10) {
                hours.textContent = "0" + time.hours;
            } else {
                hours.textContent = time.hours;
            }

            if (time.minutes < 10) {
                minutes.textContent = "0" + time.minutes;
            } else {
                minutes.textContent = time.minutes;
            }
            
            if (time.seconds < 10) {
                seconds.textContent = "0" + time.seconds;
            } else {
                seconds.textContent = time.seconds;
            }
            
        }, 1000);
    }

    setTimer(deadline);
});