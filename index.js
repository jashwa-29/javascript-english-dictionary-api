const inputtag = document.getElementById("inputtag");
console.log(inputtag.value);
const synonymwordvariable = document.getElementById("synonymword");
const meaningvariable = document.getElementById("synonymanother");
const descriptiononevr = document.getElementById("descriptionone");
const descriptiontwovr = document.getElementById("descriptiontwo");
const objectnamevr = document.getElementById("objectname");
const firstmeaningvariable = document.getElementById("first-meaning");
const secondmeaningvariable = document.getElementById("second-meaning");
const Partofspeechvariable = document.getElementById("Part-of-speech");
const Definitionhvariable = document.getElementById("Definition");
const meaninghd = document.getElementById("meaning-wrd")


const btnvariable = document.getElementById("searchbtn");

firstmeaningvariable.style.display="none";
secondmeaningvariable.style.display="none";
Partofspeechvariable.style.display="none";
Definitionhvariable.style.display="none";
meaninghd.style.display="none"

btnvariable,addEventListener("click",function(event){
    event.preventDefault();

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+inputtag.value+"")
.then(result=>result.json())
.then(output=>{
    console.log(output[0].phonetics[1]);
    console.log(output[0].meanings[0].partOfSpeech);
    console.log(output[0].meanings[0].definitions[0]);
    console.log(output[0].meanings[0].definitions[1]);
    console.log(output[0].meanings[0].synonyms[0]);
    console.log(output[0].meanings[0].synonyms[1]);

    meaninghd.style.display="flex"
    firstmeaningvariable.style.display="flex";
    synonymwordvariable.innerHTML = output[0].meanings[0].synonyms[1];
    secondmeaningvariable.style.display="flex";
    meaningvariable.innerHTML = output[0].meanings[0].synonyms[0];
    Partofspeechvariable.style.display="flex";
    objectnamevr.innerHTML=output[0].meanings[0].partOfSpeech;
    Definitionhvariable.style.display="flex";
    descriptiononevr.innerHTML = output[0].meanings[0].definitions[0].definition;
    descriptiontwovr.innerHTML = output[0].meanings[0].definitions[1].definition;            
})
.catch(error=>alert=(error));
})