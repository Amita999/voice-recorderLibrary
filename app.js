const btn=document.querySelector('.talk');
const content= document.querySelector('.content');
let textArea = document.getElementById('ToDisplaySpeech');
var synth = window.speechSynthesis;


let recognition;
let speech = new SpeechSynthesisUtterance();

try{//If browser supports the speech recognition feature.
	const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
	recognition = new SpeechRecognition(); //The recognition variable will give us access to all the API's methods and properties. 
	console.log(recognition);
}
catch(e){
	console.error(e);
	alert("No browser support. Try Opening This Demo In Google Chrome !");
};


recognition.onstart = function() {
	//voice recognition activated.
  console.log('Voice recognition activated. Try speaking into the microphone.');
};

recognition.onspeechend = function() {
	//You were quiet for a while so voice recognition turned itself off.
//   instruction.text('You were quiet for a while so voice recognition turned itself off.');
console.log('You were quiet for a while so voice recognition turned itself off.');
};

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {//If the speech was not detected.
	// instruction.text('No speech was detected. Try again.');  
	console.log('No speech was detected. Try again.');
  }
};

recognition.onresult=function(event){
	const current=event.resultIndex;
	const transcript=event.results[current][0].transcript;
	const textContent=transcript;
	console.log("textContent: ",textContent);
	// readOutLoud(textContent);
	console.log("speech: ",speech);
	speech.text = textContent;
	speech.volume=2;
	speech.rate=1.5;
	speech.pitch=7.222;
	synth.speak(speech);
};

btn.addEventListener('click', ()=>{
	recognition.start();
});
  



// function readOutLoud(message){
// 	//passing the transcript into this funtion.
// 	speech= new SpeechSyntesisUtterance();
// 	var synth = window.speechSynthesis;
// 	speech.text = message;
// 	speech.volume=1;
// 	speech.rate=1;
// 	speech.pitch=0.222;
// 	synth.speak(speech);
// }