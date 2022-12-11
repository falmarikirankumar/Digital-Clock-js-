// console.log("Hello");
let h = document.getElementById("hours");
let m = document.getElementById("mins");
let s = document.getElementById("secs");
let a = document.getElementById("ap");
const ShowTime = () => {
  const d = new Date();
  let hours = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();
  if (hours === 12) {
    a.innerHTML = "PM";
    h.innerHTML = hours;
  } else if (hours === 0) {
    hours = 12;
    a.innerHTML = "AM";
    h.innerHTML = hours;
  } else if (hours > 12) {
    hours = hours - 12;
    a.innerHTML = "PM";
    if (hours < 10) {
      h.innerHTML = "0" + hours;
    } else {
      h.innerHTML = hours;
    }
  } else {
    a.innerHTML = "AM";
    if (hours < 10) {
      h.innerHTML = "0" + hours;
    } else {
      h.innerHTML = hours;
    }
  }

  if (mins < 10) {
    m.innerHTML = "0" + mins;
  } else {
    m.innerHTML = mins;
  }

  if (secs < 10) {
    s.innerHTML = "0" + secs;
  } else {
    s.innerHTML = secs;
  }
  setInterval(ShowTime, 1000);
};

ShowTime();

const ShowAlarmTime = () => {
  let wt = document.getElementById("watvalue").value;
  let lt = document.getElementById("latvalue").value;
  let nt = document.getElementById("natvalue").value;
  let nnt = document.getElementById("nitvalue").value;
  if (wt === "Select Time") {
    document.getElementById("setWT").innerText = "---------------";
  } else {
    document.getElementById("setWT").innerText = wt;
  }
  if (lt === "Select Time") {
    document.getElementById("setLT").innerText = "---------------";
  } else {
    document.getElementById("setLT").innerText = lt;
  }
  if (nt === "Select Time") {
    document.getElementById("setNT").innerText = "---------------";
  } else {
    document.getElementById("setNT").innerText = nt;
  }
  if (nnt === "Select Time") {
    document.getElementById("setNiT").innerText = "---------------";
  } else {
    document.getElementById("setNiT").innerText = nnt;
  }
};

const ShowMsgs = () => {
  let wt = document.getElementById("watvalue").value;
  let lt = document.getElementById("latvalue").value;
  let nt = document.getElementById("natvalue").value;
  let nnt = document.getElementById("nitvalue").value;
  let ph = parseInt(h.innerText);
  //   console.log(wt);
  let arr1 = wt.split(" ");
  let arr2 = lt.split(" ");
  let arr3 = nt.split(" ");
  let arr4 = nnt.split(" ");
  console.log(arr1[0], "morming");
  console.log(arr2[0], "lunch");
  console.log(arr3[0], "nap");
  console.log(arr4[0], "night");
  console.log(ph);
  //   console.log(arr1[1], a.innerText);
  if (arr1[0] == ph && arr1[1] == a.innerText) {
    console.log("if Morning");
    document.getElementById("timeMsg1").textContent = "Good Morning";
    document.getElementById("timeMsg2").innerHTML =
      "<h2>Hey Its Time To Wake Up</h2>";
    document.getElementById("images").style.backgroundImage =
      "url('./assets/images/Morning.png')";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
    document.getElementById("images").innerText = " ";
  } else if (arr2[0] == ph && arr2[1] == a.innerText) {
    console.log("if Lunch");
    document.getElementById("timeMsg1").textContent = "Good Afternoon";
    document.getElementById("timeMsg2").innerHTML = "<h2>Eat Your Lunch</h2>";
    document.getElementById("images").style.backgroundImage =
      "url('./assets/images/Lunch.png')";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
    document.getElementById("images").innerText = " ";
  } else if (arr3[0] == ph && arr3[1] == a.innerText) {
    console.log("if Nap");
    document.getElementById("timeMsg1").textContent = "Good Evening";
    document.getElementById("timeMsg2").innerHTML =
      "<h2>Time to take a nap</h2>";
    document.getElementById("images").style.backgroundImage =
      "url('./assets/images/Night.png')";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
    document.getElementById("images").innerText = " ";
  } else if (arr4[0] == ph && arr4[1] == a.innerText) {
    console.log("if night");
    console.log(arr4[1]);
    document.getElementById("timeMsg1").textContent = "Good Night";
    document.getElementById("timeMsg2").innerHTML =
      "<h2>Its Night Time,Close Your Eyes And Sleep</h2>";
    document.getElementById("images").style.backgroundImage =
      "url('./assets/images/Night1.png')";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
    document.getElementById("images").innerText = " ";
  } else {
    document.getElementById("timeMsg1").textContent = "Welcome";
    document.getElementById("timeMsg2").innerHTML =
      "<h2>Choose Time and Click on Button to Start</h2>";
    // document.getElementById("images").style.backgroundImage =
    //   "url('/assets/images/332740.jpg')";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
    document.getElementById("images").innerHTML = "";
  }
  setInterval(ShowMsgs, 108000);
};

let btn = document.getElementById("setAlarmBtn");
btn.addEventListener("click", ShowAlarmTime);
btn.addEventListener("click", ShowMsgs);
