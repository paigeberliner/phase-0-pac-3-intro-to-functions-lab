function shout(string) {
    return string.toUpperCase();
  }
  "Hello!".toUpperCase();

  function whisper(string) {
    return string.toLowerCase();
  }
  "Hello!".toLowerCase();

 function logShout(String) {
    console.log(shout('Hello'))
 }
 function logWhisper(String) {
    console.log(whisper('Hello'))
 }
 function sayHiToHeadphonedRoommate(string){
    if(string.toLowerCase() === string){
        return "I can't hear you!";
    }
    if(string.toUpperCase() === string){
        return "YES INDEED!"
    }
    if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
}
 