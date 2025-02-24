let btn=document.querySelector("#btn")
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");
function speak(text){
    let textspeak=new SpeechSynthesisUtterance(text);
    textspeak.rate=1;
    textspeak.volume=1;
    textspeak.pitch=1;
    textspeak.lang='hi-GB';;
    window.speechSynthesis.speak(textspeak)
}


function wishme(){


    let day=new Date();
    let hours= day.getHours();
    // console.log(hours);
    
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}

window.addEventListener('load',()=>{
    wishme()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recog= new speechRecognition()
recog.onresult=(event)=>{
let currentIndex=event.resultIndex;
let transcript=event.results[currentIndex][0].transcript;
content.innerText=transcript;
takeCommand(transcript.toLowerCase())

}
 
btn.addEventListener("click",function(){
 recog.start();
 btn.style.display="none";
 voice.style.display="block"
})
function takeCommand(msg){
     btn.style.display="flex";
 voice.style.display="none"
    if(msg.includes("hello")||msg.includes("hey")){
        speak("hello sir, how i can help you?")
    }
    else if(msg.includes("who are you")){
        speak("i am virtual assistant, created by kashaf mam")
    }
    else if(msg.includes("open youtube")){
        speak("open youtube....");
        window.open("https://www.youtube.com","_blank")
    }

    else if(msg.includes("open google")){
        speak("open google....");
        window.open("https://www.google.com/","_blank")
    }
    else if(msg.includes("open facebook")){
        speak("open facebook....");
        window.open("https://www.facebook.com/","_blank")
    }
    else if(msg.includes("open instagram")){
        speak("open instagram....");
        window.open("https://www.instagram.com/","_blank")
    }
    else if(msg.includes("open whatsapp")){
        speak("open whatsapp....");
        window.open("https://www.whatsapp.com/","_blank")
    }
    else if(msg.includes("open calculator")){
        speak("open calculator....");
        window.open("calculator://")
    }
    else if(msg.includes("time")){
let time = new Date(). toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
speak(time)
    }
    else if(msg.includes("date")){
        let date = new Date(). toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
            }
    else{
        let finaltxt="this is what i found on internet regarding"+ msg.replace("flexi"," ")||msg.replace("alexi"," ")
        speak(finaltxt)
        window.open(`https://www.google.com/search?q=${msg.replace("flexi"," ")||msg.replace("alexi"," ")}`)
    }
}