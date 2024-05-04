const containerEl = document.querySelector('.container');

const carees=["Youtuber","Web Developer","Software Engineer","Data Scientist","Machine Learning Engineer","AI Engineer","Cyber Security Expert","Cloud Engineer","Game Developer","Mobile App Developer","IoT Developer","Blockchain Developer","DevOps Engineer","Network Engineer","Database Administrator","System Administrator","IT Support Specialist","IT Consultant","IT Project Manager","IT Business Analyst","IT Auditor","IT Security Analyst","IT Director"];
let careerIndex = 0;
let characterIndex = 0;
updateText()
function updateText(){
    characterIndex++;
    containerEl.innerHTML=`<h1>I am a ${carees[careerIndex].slice(0,characterIndex)}</h1>`
if(characterIndex === carees[careerIndex].length){
    careerIndex++;
    characterIndex=0;
}
setTimeout(()=>{updateText()},400)
}