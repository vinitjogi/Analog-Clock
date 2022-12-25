setInterval(() => {
    date = new Date();
    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();

    hRotation = 30*hTime + mTime/2;
    mRotation = 6*mTime;
    sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
});

darkMode = () =>{
    document.querySelector('body').classList.toggle('dark-mode');
}


const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{

    if(btn.innerText === "Switch To Dark Mode"){
        btn.innerText = "Switch To Light Mode";
        
    }
    else if(btn.innerText=== "Switch To Light Mode"){
        btn.innerText =  "Switch To Dark Mode";
    }
});