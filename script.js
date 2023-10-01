const remainTime = document.querySelector("#clock");
const flower = document.querySelector("#wheel");
let degree =0;                                      
                                      
function diffDay() {
  const str = document.getElementById("two").value;
  const arr = str.split(/[. :]/).map(Number);
  const masTime = new Date(arr[0]+2000, arr[1]-1, arr[2],arr[3],arr[4]);
  const todayTime = new Date();
  const diff = todayTime - masTime;
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);
  remainTime.innerHTML = ` ${diffDay}일<br>${String(diffHour).padStart(2,"0")} : ${String(diffMin).padStart(2, "0")} : ${String(diffSec).padStart(2, "0")}`;
}
function rot() {
  flower.style.rotate = `${degree}deg`;
  degree+=15;
  }
diffDay();
rot();
setInterval(diffDay, 1000);
setInterval(rot, 100);