var count = 15;var redirect = "https://xndtricks.blogspot.com";function countDown(){    var timer = document.getElementById("timer");    if(count > 0){        count--;        timer.innerHTML = "<span class='redirecttoxndtricks'>This page will redirect in "+count+" seconds.</span>";        setTimeout("countDown()", 1000);}else{      window.location.href = redirect;    }} 
