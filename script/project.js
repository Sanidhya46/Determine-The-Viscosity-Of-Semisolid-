
var hmessage=["उपकरणों पर माउस ले जा कर उनसे स्वयं को परिचित कराएं.....फिर प्रयोग शुरू करने के लिए आगे बटन पर क्लिक करें",
"मुख्य स्विच चालू करें",
"कंडक्टोमीटर पर पावर बटन दबाएं",
"फ़ंक्शन नॉब घुमाएँ और सेल-कॉन्स्ट मोड पर सेट करें",
"सेल स्थिरांक सेट करने के लिए सेल-कॉन्स्ट नॉब घुमाएँ",
"फ़ंक्शन नॉब घुमाएँ और MHOS मोड पर वापस सेट करें",
"अब आसुत जल द्वारा चालकता सेल को साफ करें",
"अब चालकता सेल को अलग-अलग सांद्रता वाले प्रत्येक सोडियम क्लोराइड घोल में एक-एक करके डुबोएं",
"सटीक माप के लिए संतुलन स्थापित करने के लिए चालकता सेल को कुछ समय के लिए घोल में डुबोकर छोड़ दें",
"कंडक्टोमीटर की स्क्रीन पर दिखाई गई प्रत्येक रीडिंग को नोट करें",
"प्रत्येक हाइड्रो क्लोरिक एसिड घोल के लिए रीडिंग लिखें",
"सटीक माप के लिए संतुलन स्थापित करने के लिए चालकता सेल को कुछ समय के लिए घोल में डुबोकर छोड़ दें",
"कंडक्टोमीटर की स्क्रीन पर दिखाई गई प्रत्येक रीडिंग को नोट करें",
"सोडियम एसीटेट घोल के लिए रीडिंग लिखें",
"सभी रेटिंग, मान और गणना देखने के लिए observations बटन दबाएँ"]

var message=["Make yourself familiar with the insturments by hovering over them, then click on start button to start the experiment",
"Turn on the main switch",
"Press the power button on conductometer",
"Rotate FUNCTION knob and set on CELL-CONST mode",
"Rotate CELL-CONST knob to set cell constant",
"Rotate FUNCTION knob and set back on MHOS mode",
"Now clean the conductivity cell by Distilled water",
"Now dip conductivity cell in each sodium chloride solution of different concentration one by one",
"leave conductivity cell dipped in solution for some time to establish equilibirium for accurate measurement",
"Note down every reading shown on conductometer's screen",
"Write down readings for each Hydro Chloric acid solution",
"leave conductivity cell dipped in solution for some time to establish equilibirium for accurate measurement",
"Note down every reading shown on conductometer's screen",
"Write down readings for Sodium acetate solution",
"press observations button to see all readings, values and calculations"]


let startlab = document.querySelector("#startinglab")
let startlab2 = document.querySelector("#workinglab")
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp12 = document.querySelector("#stp12")
let stp13 = document.querySelector("#stp13")
let tablesdiv = document.querySelector("#tablesdiv")
let inftext = document.querySelector("#inftext")
let stp23 = document.querySelector("#stp23")
let stp33 = document.querySelector("#stp33")
let Set = document.querySelector("#Set")
let stp15 = document.querySelector("#stp15")
let stp63 = document.querySelector("#stp63")
let stp32 = document.querySelector("#stp32")
let stp70 = document.querySelector("#stp70")
// let statuses = 0;
let f=0;
// let trial=1;

function start(){
    console.log("hello world")
     if(f === 0){
        startlab.style.visibility="hidden"
    //    statuses = 1;
        startbutton.style.visibility="hidden"
       f=1;
        ins.innerText="Click on the turn off button of the Weighing Machine To ON it "
        wheighing();
  
    }

    // else if(f===1){
    //     stp23.style.visibility="hidden";
    //     startlab.style.visibility="hidden";
    //      stp12.style.visibility = "visible";
    //      stp13.style.visibility = "visible";
    //     stp15.style.visibility = "hidden";
    //     stp33.style.visibility = "hidden";
    //     stp32.style.visibility = "hidden";
    //      stp63.style.visibility = "hidden";
    //       stp70.style.visibility = "visible"; 
    //     startbutton.style.visibility="hidden"
    //     f=1
    //     ins.innerText="Click the pipette to draw 10ml h2so4."
    // }

    else if(f===440){
        f = 441
         stp12.style.visibility="hidden";
           stp12.style.opacity ="0%";
        waterbath();
       
         
       stp63.style.visibility = "visible";
       stp63.style.opacity = "100%";
        startbutton.style.visibility="hidden"
        startbutton.style.opacity = "0%"
        
    }

    else if(f===201){
            
        latex_beaker()
         ins.innerText = "Click on the off button of waterbath to on the water bath"
      

    }
    else if(f===600){
        f=601
       viscometer();
        // stp12.style.visibility = "hidden"
       motorOnOff.style.visibility = "visible"
        stp63.style.visibility="hidden";
        stp33.style.visibility = "visible";
        ins.innerText = "Click on the dial to reach to the bottom complete the process of rotation "
         startbutton.style.visibility="hidden"
        startbutton.style.opacity = "0%"
     
    }
 
}



