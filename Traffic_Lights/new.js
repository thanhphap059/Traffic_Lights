$(document).ready(
  function(){
    // send data xuong database
    $(document).on('submit','#info',function(){
                //gui user's input xuong databases
                $.post('traffic.php', $('#info').serialize(),
               function(){
              })})

    // doc du lieu tu database
      $(document).on('submit','#info',function(){
      $.post('getData_traffic.php',function(data){
          let $color = data[0].color;
          let $time = data[0].time;
          console.log(data[0]);
          if($color =='1')
          {
            td1 = 'red';
            td2 = 'black';
            td3 = 'black';
          }
          else if($color=='2')
          {
            td1 = 'black';
            td2 = 'yellow';
            td3 = 'black';
          }
          else if($color=='3')
          {
            td1 = 'black';
            td2 = 'black';
            td3 = 'green';
          }
          else if ($color=='4')
          {  td1 = 'black';
            td2 = 'black';
            td3 = 'black';
          }
          // innner
          document.getElementById('stopLight').style.backgroundColor = td1;
          document.getElementById('slowLight').style.backgroundColor = td2;
          document.getElementById('goLight').style.backgroundColor = td3;
          document.getElementById('time').innerText = 'Timeleft:'+ ' ' + $time

      });
      return false // dont show website
      });
  }
)
function redlight()
{
document.getElementById('text').value = 1;
}
function yellowlight()
{
document.getElementById('text').value = 2;
}
function greenlight()
{
document.getElementById('text').value = 3;
}
function auto()
{
document.getElementById('text').value = 4;
}

function startTrafficSignal () {
  const green = document.getElementById("goLight");
  const red = document.getElementById("stopLight");
  const yellow = document.getElementById("slowLight");
  green.style.backgroundColor= 'black';
  red.style.backgroundColor= 'black';
  yellow.style.backgroundColor= 'black';
setTimeout(function () {
    green.style.backgroundColor= 'black';
    red.style.backgroundColor= 'black';
    yellow.style.backgroundColor= 'yellow';
    document.getElementById('time').innerText = 'Timeleft: 1'
},1000);
  setTimeout(function () {
    green.style.backgroundColor= 'black';
    red.style.backgroundColor= 'black';
    yellow.style.backgroundColor= 'yellow';
    document.getElementById('time').innerText = 'Timeleft: 0'
},2000);
setTimeout(function () {
  green.style.backgroundColor= 'green';
  red.style.backgroundColor= 'black';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 5'
},3000);
setTimeout(function () {
  green.style.backgroundColor= 'green';
  red.style.backgroundColor= 'black';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 4'
},4000);
setTimeout(function () {
  green.style.backgroundColor= 'green';
  red.style.backgroundColor= 'black';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 3'
},5000);
setTimeout(function () {
  green.style.backgroundColor= 'green';
  red.style.backgroundColor= 'black';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 2'
},6000);
setTimeout(function () {
  green.style.backgroundColor= 'green';
  red.style.backgroundColor= 'black';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 1'
},7000);
setTimeout(function () {
  green.style.backgroundColor= 'green';
  red.style.backgroundColor= 'black';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 0'
},8000);
setTimeout(function () {
  green.style.backgroundColor= 'black';
  red.style.backgroundColor= 'red';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 5'
},9000);
setTimeout(function () {
  green.style.backgroundColor= 'black';
  red.style.backgroundColor= 'red';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 4'
},10000);
setTimeout(function () {
  green.style.backgroundColor= 'black';
  red.style.backgroundColor= 'red';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 3'
},11000);
setTimeout(function () {
  green.style.backgroundColor= 'black';
  red.style.backgroundColor= 'red';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 2'
},12000);
setTimeout(function () {
  green.style.backgroundColor= 'black';
  red.style.backgroundColor= 'red';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 1'
},13000);
setTimeout(function () {
  green.style.backgroundColor= 'black';
  red.style.backgroundColor= 'red';
  yellow.style.backgroundColor= 'black';
  document.getElementById('time').innerText = 'Timeleft: 0'
},14000);

let timer = setInterval(function () {
  startTrafficSignal();
},14000);
}



function timer()
{
  if(document.getElementById('text').value =='4')
  {
    startTrafficSignal();
  }
}
