let count=0;
let img=document.querySelector(".img")
let btn=document.querySelector(".sliding-btn")
let container =document.querySelector(".container")
let option=document.querySelector(".option")
let main=document.querySelector(".main")
let wish= document.querySelector(".wish")
let guSong= new Audio()
guSong.src="assests/Tagadi.mp3"
guSong.currentTime=13;






function slideRandom(button) {
     const maxX = window.innerWidth - button.offsetWidth;
     const maxY = window.innerHeight - button.offsetHeight;
 
     const randomX = Math.random() * maxX;
     const randomY = Math.random() * maxY;
 
     // Ensure it doesn't go outside the visible area
     button.style.left = `${Math.max(0, randomX)}px`;
     button.style.top = `${Math.max(0, randomY)}px`;

   
     
 };
function cake(){
count++    
switch (count) {
case 1:
   
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Awww Cake khayeggi jaa naa </p>`
    
    
    break
case 2:
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Smjh naa arri madam ni milra Cake 🎂</p>`
    break
case 3:
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> aeee jaa ree tu gu kha hat </p>`
    break
case 4:
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Matlab Manegi ni tu </p>`
    break
case 5:
    img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Sahi pit ti hai Ladkiya  </p>`
    break
case 6:
   img.innerHTML =`<img src="assests/gu.jpg" alt="Gobar"></img>
    <p class="p"> Le Button hi hata di  </p>`
    btn.remove()
    break

    }
  
}



function gu() {
    guSong.play();
    option.remove(); // Remove buttons
    container.style.border = "0px";

    img.innerHTML = `<h1 class="up">Happy Birthday Nishita</h1>
                     <div id="content"></div>`;  // Empty div for images/videos

    let content = document.getElementById("content");

    setTimeout(() => {
        content.innerHTML = `<img src="assests/img2.jpg" alt="" style="width: 100%;">`;
        container.style.height = container.scrollHeight + "px"; // Adjust height dynamically

        setTimeout(() => {
            content.innerHTML = `<img src="assests/img.jpg" alt="" style="width: 100%;">`;
            container.style.height = container.scrollHeight + "px";

            setTimeout(() => {
                content.innerHTML = `
                    <video id="birthdayVideo" src="assests/video.mp4" autoplay style="width: 100%;">
                        Your browser does not support the video tag.
                    </video>
                `;
                container.style.height = container.scrollHeight + "px";

                // Wait for the video to finish before removing elements
                let video = document.getElementById("birthdayVideo");
                video.onended = () => {
                    img.remove();
                    container.remove()
                   
                        wish.style.display = "block";
                  
                };

            }, 3000);
        }, 3000);
    }, 3000);
}


              
 



function startConfetti() {
    let canvas = document.getElementById("confetti");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 4 + 1,
            d: 2, // Constant speed for all particles
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.y += p.d;
            if (p.y > canvas.height) p.y = 0;
        });
        requestAnimationFrame(draw);
    }
    draw();
}



let ayeein=new Audio()
ayeein.src=`assests/ayeein.m4a`


let baigan=new Audio()
baigan.src=`assests/baigan.m4a`
let cou=0;
btn.addEventListener("click",()=>{
    
    if (cou==0){
        ayeein.play()
        cou=1;
    }else(
        cou=0,
        baigan.play())
   
})





