window.onload = function(){
  let button = document.getElementById('clickButton');
  let button1 = document.getElementById('clickButton1');
  let button2 = document.getElementById('clickButton2');
  setInterval(function(){
      button.click();
      button1.click();
      button2.click();
  }, 500);  
};




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
          {  
            td1 = 'black';
            td2 = 'black';
            td3 = 'black';
          }
          // innner
          document.getElementById('stopLight').style.backgroundColor = td1;
          document.getElementById('slowLight').style.backgroundColor = td2;
          document.getElementById('goLight').style.backgroundColor = td3;
          document.getElementById('time').innerText = 'TIMELEFT:'+ ' ' + $time

      });
      return false // dont show website
      });
  }
)
function redlight()
{
document.getElementById('text').value = 1;
document.getElementById('timeleft').value = 99;
document.getElementById('timechance').value = 1;

}
function yellowlight()
{
document.getElementById('text').value = 2;
document.getElementById('timeleft').value = 99;
document.getElementById('timechance').value = 1;

}
function greenlight()
{
document.getElementById('text').value = 3;
document.getElementById('timeleft').value = 99;
document.getElementById('timechance').value = 1;

}
function auto()
{
document.getElementById('text').value = 4;
document.getElementById('timeleft').value = 00;
document.getElementById('timechance').value = 1;
}
function show() {
  let checkBox = document.getElementById("checkb");
  let text = document.getElementById("text");
  let timeleft = document.getElementById("timeleft");
  let timechance = document.getElementById("timechance");

  if (checkBox.checked == true){
    text.type = 'text';
    timeleft.type = 'text';
    timechance.type = 'text';
  } else 
  {
    text.type = 'hidden';
    timeleft.type = 'hidden';
    timechance.type = 'hidden';

  }
}




$(document).ready(
  function(){
    // send data xuong database
    $(document).on('submit','#info1',function(){
      //gui user's input xuong databases
      $.post('traffic1.php', $('#info1').serialize(),
     function(){ 
    })})
    // doc du lieu tu database
      $(document).on('submit','#info1',function(){
      $.post('getData_traffic.php',function(data){
          let $color1 = data[1].color;
          let $time1 = data[1].time;
          console.log(data[1]);
          if($color1 =='1')
          {
            td4 = 'red';
            td5 = 'black';
            td6 = 'black';
          }
          else if($color1=='2')
          {
            td4 = 'black';
            td5 = 'yellow';
            td6 = 'black';
          }
          else if($color1=='3')
          {
            td4 = 'black';
            td5 = 'black';
            td6 = 'green';
          }
          else if($color1=='4')
          {
            td4 = 'black';
            td5 = 'black';
            td6 = 'black';
          }

          // innner
          document.getElementById('stopLight1').style.backgroundColor = td4;
          document.getElementById('slowLight1').style.backgroundColor = td5;
          document.getElementById('goLight1').style.backgroundColor = td6;
          document.getElementById('time1').innerText = 'TIMELEFT:'+ ' ' + $time1

      });
      
      return false // dont show website
      });
  }
)
function redlight1()
{
document.getElementById('text1').value = 1;
document.getElementById('timeleft1').value = 99;
document.getElementById('timechance1').value = 1;

}
function yellowlight1()
{
document.getElementById('text1').value = 2;
document.getElementById('timeleft1').value = 99;
document.getElementById('timechance1').value = 1;

}
function greenlight1()
{
document.getElementById('text1').value = 3;
document.getElementById('timeleft1').value = 99;
document.getElementById('timechance').value = 1;

}
function auto1()
{
document.getElementById('text1').value = 4;
document.getElementById('timeleft1').value = 00;
document.getElementById('timechance1').value = 1;

}
function show1() {
  let checkBox1 = document.getElementById("checkb1");
  let text1 = document.getElementById("text1");
  let timeleft1 = document.getElementById("timeleft1");
  let timechance1 = document.getElementById("timechance1");

  if (checkBox1.checked == true){
    text1.type = 'text';
    timeleft1.type = 'text';
    timechance1.type = 'text';
  } else
  {
    text1.type = 'hidden';
    timeleft1.type = 'hidden';
    timechance1.type = 'hidden';
  }
}






$(document).ready(
  function(){
    // send data xuong database
    $(document).on('submit','#info2',function(){
      //gui user's input xuong databases
      $.post('traffic2.php', $('#info2').serialize(),
     function(){ 
    })})
    // doc du lieu tu database
      $(document).on('submit','#info2',function(){
      $.post('getData_traffic.php',function(data){
          let $color2 = data[2].color;
          let $time2 = data[2].time;
          console.log(data[2]);
          if($color2 =='1')
          {
            td7 = 'red';
            td8 = 'black';
            td9 = 'black';
          }
          else if($color2=='2')
          {
            td7 = 'black';
            td8 = 'yellow';
            td9 = 'black';
          }
          else if($color2=='3')
          {
            td7 = 'black';
            td8 = 'black';
            td9 = 'green';
          }
          else if($color2 == '4')
          {
            td7 = 'black';
            td8 = 'black';
            td9 = 'black';
          }

          // innner
          document.getElementById('stopLight2').style.backgroundColor = td7;
          document.getElementById('slowLight2').style.backgroundColor = td8;
          document.getElementById('goLight2').style.backgroundColor = td9;
          document.getElementById('time2').innerText = 'TIMELEFT:'+ ' ' + $time2

      });
      
      return false // dont show website
      });
  }
)
function redlight2()
{
document.getElementById('text2').value = 1;
document.getElementById('timeleft2').value = 99;
document.getElementById('timechance2').value = 1;

}
function yellowlight2()
{
document.getElementById('text2').value = 2;
document.getElementById('timeleft2').value = 99;
document.getElementById('timechance2').value = 1;

}
function greenlight2()
{
document.getElementById('text2').value = 3;
document.getElementById('timeleft2').value = 99;
document.getElementById('timechance2').value = 1;


}
function auto2()
{
document.getElementById('text2').value = 4;
document.getElementById('timeleft2').value = 00;
document.getElementById('timechance2').value = 1;
}


function show2() {
  let checkBox2 = document.getElementById("checkb2");
  let text2 = document.getElementById("text2");
  let timeleft2 = document.getElementById("timeleft2");
  let timechance2 = document.getElementById("timechance2");
  if (checkBox2.checked == true){
    text2.type = 'text';
    timeleft2.type = 'text';
    timechance2.type = 'text';
  } 
  else
  {
    text2.type = 'hidden';
    timeleft2.type = 'hidden';
    timechance2.type= 'hidden';
  }
}
