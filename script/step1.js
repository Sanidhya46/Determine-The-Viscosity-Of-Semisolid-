const weighingMachine = document.querySelector('#weighing_machine');
const tareButton = document.querySelector('#tare');
const offButtonWeighing = document.querySelector('#Off_button_weighing');
const latexBeaker = document.querySelector('#latex-beaker');
const beakerWater = document.querySelector('#beaker_water');
const mainBeaker = document.querySelector('#main_beaker');
const latexBottom = document.querySelector('#latex_bottom');
const latexUp = document.querySelector('#latex_up');
const waterBeaker = document.querySelector('#water_beaker');
const weightDisplay = document.querySelector('#weight-display');
const latexBeakerfull = document.querySelector('#latex-beaker-full');
const latexstrip = document.querySelector('#latex_strip');
const tiltedlatex = document.querySelector('#tilted_latex');
const latexBottom1 = document.querySelector('#latex_bottom1');
const latex_80 = document.querySelector('#latex_80');
const tilted_water = document.querySelector('#tilted_water');
const water_beaker_120 = document.querySelector('#water_beaker_120');
const water_strip = document.querySelector('#water_strip');
const beaker_water = document.querySelector('#beaker_water');
const beaker_water_120 = document.querySelector('#beaker_water_120');
const latex_80_top = document.querySelector('#latex_80_top');
const latex_beaker_200 = document.querySelector('#latex_beaker_200');
 const motorSound = document.getElementById("motorSound");
 const stp37 = document.getElementById("stp37");



const onSwitchHolder3 = document.getElementById("onSwitchHolder3");
const setOff3 = document.getElementById("setOff3");
const setOn3 = document.getElementById("setOn3");
const setButtonHolder3 = document.getElementById("setButtonHolder3");
const downOnSwitch3 = document.getElementById("downOnSwitch3");
const upOnSwitch3 = document.getElementById("upOnSwitch3");
const upOffSwitch3 = document.getElementById("upOffSwitch3");
const downSwitch3 = document.getElementById("downSwitch3");
const offSwitch3 = document.getElementById("offSwitch3");
const onSwitch3 = document.getElementById("onSwitch3");
const waterbath3 = document.getElementById("waterbath3");
const sampleTempDisplay3 = document.getElementById("sampleTempDisplay3");
const setTempDisplay3 = document.getElementById("setTempDisplay3");
const actualTempDisplay3 = document.getElementById("actualTempDisplay3");

const timerDisplay13 = document.querySelector("#timerDisplay13");

const tiltedsol13 = document.getElementById("tiltedsol13");

const sampleTempDisplay13 = document.getElementById("sampleTempDisplay13");
const actualTempDisplay13 = document.getElementById("actualTempDisplay13");


const sampleTempDisplay4 = document.getElementById("sampleTempDisplay4");
const actualTempDisplay4 = document.getElementById("actualTempDisplay4");

const sampleTempDisplay5 = document.getElementById("sampleTempDisplay5");
const actualTempDisplay5 = document.getElementById("actualTempDisplay5");

const beakerHolder = document.getElementById("beakerHolder");
const selectSpindle = document.getElementById("selectSpindle");
const spindleNo2 = document.getElementById("spindleNo22");
const upArrow = document.getElementById("upArrow");
const viscosityUpButton = document.getElementById("viscosityUpButton");
const motorOnOff = document.getElementById("motorOnOff");
const setSplinder = document.getElementById("setSplinder");
const spindleNo3 = document.getElementById("spindleNo3");
const viscosityDownButton = document.getElementById("viscosityDownButton");
const viscometerUpperPart = document.getElementById("viscometerUpperPart");
const viscometerStand = document.getElementById("viscometerStand");
const Off_On_button = document.getElementById("off_on_button");
const showResultBtn = document.getElementById("showResultBtn");
const viscosityResult = document.getElementById("viscosityResult");


let changeins12 = "Click on the On button to start the water bath.";
let changeins13 = "Click on the Temp increase button to increase temperature of water bath to 65°C.";






let changeins = "Click the pipette to draw 10 ml of H₂SO₄."
let changeins1 = "Click on pipette again to pour h2so4 to bytyrometer" 
let changeins2 = "Click on the pipette to draw 10.75 ml of milk."
let changeins3 = "Click on the pipette to transfer the milk to the butyrometer."
let changeins4 = "Click on the amyl alcohol bottle cork to open it."
let changeins5 = "Click on the pipette to draw 1 ml of amyl alcohol.." 
let changeins6 = "Click on the pipette to transfer the amyl alcohol."
let changeins7 = "Click on the stopper to firmly close it."
let changeins8 = "Click on butyrometer to shake gently until contents are mixed properly."
let changeins9 = "Click on butyrometer to shake gently."
let changeins10 = "Click on butyrometer to replace in stand"
let changeins11 = "Click on the next button"







wheighing();
function wheighing() {
    if (f === 1) {
        f = 2; // Move to the next step so this function doesn't run again unintentionally
        console.log("pipette");
    offButtonWeighing.addEventListener('click', () => {
    // Simulate press effect
    offButtonWeighing.style.transform = 'scale(0.9)';
    offButtonWeighing.style.transition = 'transform 0.1s';
     pulse(weightDisplay);
     ins.innerText = "Click on the Empty beaker to place on weighing scale to take 60% latex"
    setTimeout(() => {
        offButtonWeighing.style.transform = 'scale(1)';
            setTimeout(() => {
        mainBeaker.addEventListener('click', () => {
           setTimeout(() => {
           mainBeaker.style.top = "36%"
              setTimeout(() => {
                   mainBeaker.style.left = "15%"
                     setTimeout(() => {
                   mainBeaker.style.top = "55%"
                    setTimeout(() => {
                   weightDisplay.innerText = "50.00"
                   pulse(weightDisplay);
                   ins.innerText = "Click on the tare button to measure 120ml latex which is 60 percent of total voulume"
                         tareButton.addEventListener('click', () => {
                          weightDisplay.innerText = "00.00"

                          pulse(weightDisplay)
                          ins.innerText = "Click on the beaker to measure 120ml latex"
                     latexBeakerfull.addEventListener('click', () => {
           setTimeout(() => {
                  latexBeakerfull.style.top = "28%"
                      setTimeout(() => {
                  latexBeakerfull.style.left = "22.0%"
                 

                   setTimeout(() => {
                   latexBeakerfull.style.transform = "rotate(-15deg)"

                  
                     setTimeout(() => {
                      
                      latexBeaker.style.opacity = "100%"
                      latex_80.style.opacity ="100%"
                              setTimeout(() => {
                      
                      tiltedlatex.style.opacity = "100%"
                      tiltedlatex.style.opacity = "100%"
                      latexBeaker.style.opacity = "0%"
                      latexstrip.style.opacity = "100%"
                                   setTimeout(() => {
                                          latexBeakerfull.style.opacity = "0%"
                                               setTimeout(() => {
                                          latexBottom1.style.opacity = "100%"
                                          latexBottom1.style.transform = "scaleY(1)";  
                                                    setTimeout(() => {
                                          tiltedlatex.style.opacity = "0%"
                                                     setTimeout(() => {
                                                     
                                          //  latex_80.style.opacity = "100%"
                                                    setTimeout(() => {
                                     
                                           tiltedlatex.style.opacity = "0%"
                      latexBottom.style.opacity = "0%"
                      latexBeaker.style.opacity = "0%"
                      latexstrip.style.opacity = "0%"
                      latexUp.style.opacity = "0%"
                                                      setTimeout(() => {
                                          latex_80.style.transform = "rotate(15deg)"
                                                setTimeout(() => {
                                          latex_80.style.left = "35%"
                                                  setTimeout(() => {
                                          latex_80.style.top = "65%"
                                            setTimeout(() => {
                                              weightDisplay.innerText = "120ml"
                                              pulse(weightDisplay)
                                              ins.innerText = "Click on the tare button to measure 80ml (40 percent water) "
                                            setTimeout(() => {
                                                       tareButton.addEventListener('click', () => {
                                                         setTimeout(() => {
                                                        pulse(tareButton)
                                                        weightDisplay.innerText = "00.00"
                                                   ins.innerText = "Click on the water beaker to add 80 ml of water to latex"
                                                       waterBeaker.addEventListener('click', () => {
                                                              
                                                            
                                                              setTimeout(() => {
                                                                 waterBeaker.style.bottom = "50%"
                                                                   setTimeout(() => {
                                                                       waterBeaker.style.left = "22%"
                                                                               setTimeout(() => {
                                                                                        waterBeaker.style.rotate = "-17deg"
                                                                                         setTimeout(() => {
                                                                                        waterBeaker.style.rotate = "-17deg"
                                                                                        tilted_water.style.opacity = "100%"
                                                                                         beakerWater.style.opacity = "100%"
                                                                                           waterBeaker.style.opacity = "0%"
                                                                                         beaker_water_120.style.opacity = "100%"
                                                                                       
                                                                                         water_strip.style.opacity = "100%"
                                                                                        
                                                                                       
                                                                                          
                                                                                       
                                                                                        
                                                                                        


                                                                                          waterBeaker.style.opacity = "0%"
                                                                                        water_strip.style.opacity = "100%"
                                                                                           setTimeout(() => {
                                                                                             latex_80_top.style.opacity = "1"
                                                                                             water_strip.style.transform = 'scaleY(1)';
                                                                                                  setTimeout(() => {
                                                                                             latex_80_top.style.transform = 'scaleY(1)'; 
                                                                                             tilted_water.style.transform = 'scaleY(0)';
                                                                                              setTimeout(() => {
                                                                                              water_strip.style.transformOrigin  = 'bottom'; 
                                                                                              water_strip.style.transition  = '1s';
                                                                                                   setTimeout(() => {
                                                                                              water_strip.style.transform = 'scaleY(0)';
                                                                                               water_strip.style.transform = 'scaleY(0)';
                                                                                                weightDisplay.innerText = "80.00"
                                                                                                                  pulse(weightDisplay);
                                                                                                                setTimeout(() => {
                                                                                                               beaker_water_120.style.transform = "rotate(17deg)"
                                                                                                               beaker_water_120.style.left = "23.5%"
                                                                                                               beakerWater.style.transform = "rotate(17deg)"
                                                                                                                       setTimeout(() => {
                                                                                                               beakerWater.style.left = "55%"
                                                                                                               beaker_water_120.style.left = "56.4%"
                                                                                                                                   setTimeout(() => {
                                                                                                               beakerWater.style.bottom = "10%"
                                                                                                               beaker_water_120.style.bottom = "10.4%"
                                                                                                                          setTimeout(() => {
                                                                                                               latex_beaker_200.style.opacity = "1"
                                                                                                                  mainBeaker.style.opacity = "0%" 
                                                                                                                  mainBeaker.style.visibility = "hidden";
                                                                                                                  latex_80_top.style.visibility = "hidden"
                                                                                                                  latexBottom1.style.opacity = "0%"
                                                                                                                  latexBottom1.style.visibility = "hidden"
                                                                                                                 
                                                                                                                    setTimeout(() => {
                                                                                                                      ins.innerText = "Click on the latex beaker to reposition to its previous position for next procedure"
                                                                                                                  if(f === 2){
                                                                                                                    f =312

                                                                                                                    console.log("f value is", f)
                                                                                                                   latex_beaker_200.addEventListener('click', () => {
                                                                                                                      latex_beaker_200.style.top = "30%"
                                                                                                                           setTimeout(() => {
                                                                                                                                latex_beaker_200.style.left = "72%"
                                                                                                                                  setTimeout(() => {
                                                                                                                                latex_beaker_200.style.top = "67%"
                                                                                                                                       f=315;
                                                                                                                                     if(f === 315){
                                                                                                                                           f = 420;
                                                                                                                                 ins.innerText="click on Next button"
                                    startbutton.style.visibility="visible"
                                    startbutton.innerText="Next"
                                     f = 440
                                                                                                                                     }else{console.log("ghnta")}      
                                                                                                                           },1000)
                                                                                                                           },1000)
                                                                                                                   },  { once: true })
                                                                                                                  }
                                                                                                                }, 1000)
                                                                                                           }, 1000)
                                                                                                           }, 1000)
                                                                                                           }, 1000)
                                                                                                           }, 1000)
                                                                                                      }, 1000)
                                                                                                     
                                                                                                      }, 1000)
                                                                                                      }, 1000)
                                                                                          },1000)
                                                                               }, 1000)
                                                                               }, 1000)

                                                                        }, 1000)                                                                          }, 1000)
                                                              }, 1000)
                                                            },1000)
                                                            })
                                                            }, 1000)
                                                       })
                                         }, 1000)
                                         }, 1000)
                                         }, 1000)
                                         }, 1000)
                                      }, 1000)
                                      }, 1000)
                                      }, 1000)
                                      }, 1000)
                  }, 100)


                  }, 1000)
           }, 1000)
           }, 1000)
           }, 1000)
          })
        })
      }, 1000)     
              }, 1000)

              }, 1000)

            }, 1000)

         })
         

    }, 1000);

    }, 1000);

    

    // Pop in the weight display
    weightDisplay.style.opacity = '1';
    weightDisplay.style.transform = 'scale(1)';
});
   
}else{console.log("nothing")}};



let currentTemp = 20;
let targetTemp = 25;
let timerStarted = false;
let countdownInterval;

// Hide everything at start

onSwitch3.style.visibility = "hidden";
setTempDisplay3.style.display = "none";
actualTempDisplay3.style.display = "none";
sampleTempDisplay3.style.display = "none";



function pulse(element) {
    element.classList.add("pulse-effect");
    setTimeout(() => {
        element.classList.remove("pulse-effect");
    }, 1000);
}

// OFF → ON transition
function waterbath() {
  f = 441;
  ins.innerText = "Click on the off switch of water bath to on it "
offSwitch3.addEventListener("click", () => {
    if (f === 441) {
        f = 152;
        offSwitch3.style.visibility = "hidden";
        onSwitch3.style.visibility = "visible";
        pulse(onSwitch3);
    }

    onSwitch3.style.opacity = "100%";
    pulse(onSwitch3);
      console.log("displaying")
    setTempDisplay3.style.display = "block";
    setTempDisplay3.style.visibility = "visible";
    actualTempDisplay3.style.display = "block";
    sampleTempDisplay3.style.display = "block";
    upOffSwitch3.style.display = "block";

    setTempDisplay3.textContent = `${currentTemp}°C`;
    actualTempDisplay3.textContent = `${currentTemp}°C`;
    sampleTempDisplay3.textContent = `${currentTemp}°C`;

    ins.innerText = "Click the ↑ button to raise set temperature to 25°C";
});

// TEMP UP → Increment Set Temp
upOffSwitch3.addEventListener("click", () => {
    if (f === 152 && currentTemp < targetTemp) {
         console.log("upoff switch")
        currentTemp++;
        ins.innerText = "Again Click ↑ button to raise temperature to 25°C"
        sampleTempDisplay3.textContent = `${currentTemp}°C`;
        pulse(upOffSwitch3);

        if (currentTemp === targetTemp && !timerStarted) {
            f = 153;
            timerStarted = true;
            ins.innerText = "Reached 25°C. Click on the Set button for wait for 2 minutes... to rise the water bath temperature to 25°C";
            setOff3.addEventListener("click", () => {
               pulse(setOff3)
              console.log("set button active")
            startHoldingTimer(2); // Start 2 min timer
            f = 201;
            latex_beaker()
              
            })
        }
    }
});

// ⏲️ Start Countdown Timer

}

function startHoldingTimer(minutes) {
    let seconds = minutes * 60;
    let currentTemp = 20; // Starting temperature
    const targetTemp = 25;

    
    actualTempDisplay3.style.display = "block"; // Optional if you have a bath temp display
   
    // 🔥 Interval to increase bath temperature slowly
    const tempInterval = setInterval(() => {
        if (currentTemp < targetTemp) {
            currentTemp += 0.2; // Increase temp slowly
          actualTempDisplay3.textContent = `${currentTemp.toFixed(1)}°C`;
        } else {
            clearInterval(tempInterval);
            actualTempDisplay3.textContent = `${targetTemp.toFixed(1)}°C`;
        }
    } , 400  ); //  480 every 0.5s adjust as needed

    // ⏲️ Countdown Timer
    const countdownInterval = setInterval(() => {
       timerDisplay13.style.visibility = "visible";
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        timerDisplay13.textContent = `Timer - ${min}:${sec < 10 ? "0" : ""}${sec}`;
        seconds--;

        if (seconds < 0) {
            clearInterval(countdownInterval);
            clearInterval(tempInterval); // Stop temperature interval too
            timerDisplay13.textContent = "";
            ins.innerText = "✅ Temperature stabilized. Now Click on the beaker to put onto water bath for stablizing latex at 25°C";
            pulse(ins); // your existing animation
            
            
        }
    }, 100);  //100
}


function latex_beaker () {
if (f === 201) {
    f =201.5;
     latex_beaker_200.addEventListener("click", () => {
        latex_beaker_200.style.top = "30%"

      console.log("water_beaker_run")
      console.log(f) 
              setTimeout(() => {
              
       latex_beaker_200.style.left = "29%"
            setTimeout(() => {
       latex_beaker_200.style.height = "16%"
       latex_beaker_200.style.width = "7.5%"
             setTimeout(() => {
              latex_beaker_200.style.top = "49%"
              changeins.innerText = "wait for 2 minutes to stablized the temperature"
                   setTimeout(() => {
                startHoldingTimer1(2);
                              setTimeout(() => {
                                           latex_beaker_200.addEventListener("click", () => {
                                                       latex_beaker_200.style.top = "30%"

                                                      setTimeout(() => {
                                                               latex_beaker_200.style.height = "23.1%"
       latex_beaker_200.style.width = "12%"
                                                                setTimeout(() => {
                                                               latex_beaker_200.style.left = "65.1%"
                                                                    setTimeout(() => {
                                                               latex_beaker_200.style.top = "63.4%"
                                                                   setTimeout(() => {
                                                                ins.innerText="click on Next button"
                                    startbutton.style.visibility="visible"
                                    startbutton.style.opacity = "100%"
                                    startbutton.innerText="Next"
                                    f = 202;
                                    f = 600;
                                                         }, 1000); 
                                                         }, 1000); 
                                                         }, 1000); 
                                                         }, 1000);  
                                                 },  { once: true })
                                   }, 1000);  
                      }, 1000);
                 }, 1000);
                     }, 1000);
              }, 1000);
    
}, { once: true });
}else{console.log("error occured not updated .... ")}
}


function startHoldingTimer1(minutes) {
    let seconds = minutes * 60;
    let currentTemp = 20; // Starting temperature
    const targetTemp = 25;

    
    actualTempDisplay3.style.display = "block"; // Optional if you have a bath temp display
    timerDisplay13.style.visibility = "visible";
    // 🔥 Interval to increase bath temperature slowly
   

    // ⏲️ Countdown Timer
    const countdownInterval = setInterval(() => {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        timerDisplay13.textContent = `Timer - ${min}:${sec < 10 ? "0" : ""}${sec}`;
        changeins.innerText = "⏳ Wait for 2 minutes to stabilize the temperature...";
        seconds--;
  
        if (seconds < 0) {
            clearInterval(countdownInterval);
         
            timerDisplay13.textContent = "";
            ins.innerText = "✅ ✅ Temperature stabilized. , Now click on the latex beaker to reposition for next process of measuring viscosity";
            pulse(ins); // your existing animation
            
            
        }
    }, 0);  //100
}


function viscometer() {
  if(f === 601){
   f=602;
    latex_beaker_200.addEventListener("click", () => {
     console.log(f);
     latex_beaker_200.style.top = "30%"
      setTimeout(() => {
        latex_beaker_200.style.left = "20%"
        latex_beaker_200.style.height = "18"
        latex_beaker_200.style.width = "7.8"
             setTimeout(() => {
              latex_beaker_200.style.top = "62%"
                setTimeout(() => {
                 latex_beaker_200.style.left = "9%"
                 setTimeout(() => {
                      // spindleNo2.style.animation = "rotateSpindle 2s linear ";
                      

                        ins.innerText =   "Click on the viscometer dial to lower it toward the beaker and start rotating Spindle No. 2"
                        
                        viscometerUpperPart.addEventListener("click", () => {
                           if(f === 602){
                           f = 997;
                            setTimeout(() => {

                              viscometerUpperPart.style.top = "30%";
                               
                              selectSpindle.style.top = "46%"
                              setSplinder.style.top = "46%"
                              viscosityUpButton.style.top = "44%"
                              viscosityDownButton.style.top = "48%"
                              motorOnOff.style.top = "39.2%"
                               spindleNo2.style.top = "60%"
                               Off_On_button.style.top = "39.2%"
                               ins.innerText = "Click on the On/Off button to on the viscometer and to see readings"
                                Off_On_button.addEventListener("click", () => {

                                  pulse(Off_On_button)
                                    stp37.style.visibility = "visible";
                                    stp37.style.opacity = "100%"
                                  pulse(stp37)
                                
                                  let isMotorRunning = false;
                                  let isRunningSequence = false;
                                  ins.innerText = "Click on the motor on off button to start the rotation"
                                 motorOnOff.addEventListener("click", () => {
  if (f === 997 && !isMotorRunning) {
    isMotorRunning = true;  // Prevent further clicks
    pulse(motorOnOff);
    motorSound.volume = 1;
    motorSound.play();
    latex_beaker_200.style.animation = "shake 20s linear";
    ins.innerText = "Rotation in progress... Please wait.";
    const spindleValues = [
      { time: 0,    s: "S62", cp: "cp 0", percent: "1.3%", rpm: "6.0RPM" },
      { time: 4000, s: "S62", cp: "cp 25", percent: "1.9%", rpm: "6.5RPM" },
      { time: 8000, s: "S62", cp: "cp 60", percent: "2.6%", rpm: "7.0RPM" },
      { time: 12000, s: "S62", cp: "cp 180", percent: "3.4%", rpm: "7.5RPM" },
      { time: 15000, s: "S62", cp: "cp 209", percent: "4.1%", rpm: "8.0RPM" }
    ];

    spindleValues.forEach(({ time, s, cp, percent, rpm }) => {
      setTimeout(() => {
        document.getElementById("actualTempDisplay4").innerText = s;
        document.getElementById("sampleTempDisplay4").innerText = cp;
        document.getElementById("actualTempDisplay5").innerText = percent;
        document.getElementById("sampleTempDisplay5").innerText = rpm;
       
      }, time);
    });

    // After full sequence
    setTimeout(() => {
     
        setTimeout(() => {
      f = 998;
      isMotorRunning = false; // Allow next click
       isRunningSequence = false; 
        ins.innerText = "Rotation completed !! Click on the motor ON/OFF button to stop the motor. See the readings";
        }, 1000)
    }, 0);  //15600
    
  }

 else if (f === 998 && !isMotorRunning && !isRunningSequence) {
  
    pulse(motorOnOff);
    setTimeout(() => {
      document.getElementById("actualTempDisplay4").innerText = "S62";
      document.getElementById("sampleTempDisplay4").innerText = "cp 240";
      document.getElementById("actualTempDisplay5").innerText = "1.4%";
      document.getElementById("sampleTempDisplay5").innerText = "0.0 RPM";
      console.log(f + " motor on off block");
      f = 999;
      ins.innerText = "Click on the dial to push them to up for channging of spindle"
    }, 500);
  }



   

  
     
     viscometerUpperPart.addEventListener("click", () => {
       if(f === 999){
        f =1000
             viscometerUpperPart.style.top = "15%";
                               
                              selectSpindle.style.top = "31%"
                              setSplinder.style.top = "31%"
                              viscosityUpButton.style.top = "29%"
                              viscosityDownButton.style.top = "33%"
                              motorOnOff.style.top = "24.5%"
                               spindleNo2.style.top = "41%"
                               Off_On_button.style.top = "24.20%"
                               

                               actualTempDisplay4.style.bottom = "79%"
                               sampleTempDisplay4.style.bottom = "79%"
                               actualTempDisplay5.style.bottom= "77.3%"
                               sampleTempDisplay5.style.bottom = "77.3%"

                               ins.innerText = "Click on the Spindle no. 2 to replace it with spindle no.3"
                              
                        

                            
let spindleClickCount = 0;
const spindleSequence = ['S2', 'S4', 'S3'];

ins.innerText = "Click on the Set button to change the spindle from S2 to S3";

// Set Spindle Click
setSplinder.addEventListener("click", () => {
    if (f === 1000) {
        f = 1002;
        pulse(setSplinder);
        pulse(actualTempDisplay4);
        ins.innerText = "Now click on up ⬆️ button to set spindle 3 sequence";
    }


// Viscosity Up Button Click (Cycle Spindles)
viscosityUpButton.addEventListener("click", () => {
    if (f === 1002 && spindleClickCount < 3) {
        const spindle = spindleSequence[spindleClickCount];
        actualTempDisplay4.innerText = `${spindle}`;
        pulse(actualTempDisplay4);
        pulse(viscosityUpButton);
        spindleClickCount++;

        if (spindleClickCount === 3) {
            selectSpindle.style.display = "inline-block";  // Show select button
            ins.innerText = "Now click on Select button to finalize spindle selection.";
        }
    }
});

// Select Spindle Click
selectSpindle.addEventListener("click", () => {
    if (f === 1002 && spindleClickCount === 3) {
        f = 1003;
      
        pulse(sampleTempDisplay4);
        pulse(selectSpindle);
        ins.innerText = "Spindle selection completed. Now click on the spindle no.2 to replace it with spindle no.3 .";
    }
});

                                      
                                setTimeout(() => {
                                   spindleNo2.addEventListener("click", () => {
                                    if(f === 1003){
                                      f = 1004;
                                    console.log("spindleno2")
                                     spindleNo2.style.top = "50%"
                                         setTimeout(() => {
                                         spindleNo2.style.left = "50%"

                                            setTimeout(() => {
                                         spindleNo2.style.transform = "rotate(-90deg)"
                                                  setTimeout(() => {
                                                 spindleNo2.style.top = "80%"

                                                 ins.innerText = "Click on the spindle no. 3 to place it on viscometer for rotation"
                                                      spindleNo3.addEventListener("click", () => {
                                                          spindleNo3.style.top = "50%"
                                                              setTimeout(() => {
                                                             spindleNo3.style.transform = "rotate(90deg)"
                                                                   setTimeout(() => {
                                                                    spindleNo3.style.left = "14.49%"
                                                                      setTimeout(() => {
                                                                      spindleNo3.style.top = "45%"
                                                                      ins.innerText = "Now click on the dial to reach to the beaker and start the rotation"
                                                                         viscometerUpperPart.addEventListener("click", () => {
                                                                              viscometerUpperPart.style.top = "30%";
                               
                              selectSpindle.style.top = "46%"
                              setSplinder.style.top = "46%"
                              viscosityUpButton.style.top = "44%"
                              viscosityDownButton.style.top = "48%"
                              motorOnOff.style.top = "39.2%"
                             
                               Off_On_button.style.top = "39.5%"
                               spindleNo3.style.top = "60%"


                               actualTempDisplay4.style.bottom = "63.91%"
                               sampleTempDisplay4.style.bottom = "63.91%"
                               actualTempDisplay5.style.bottom= "62.1%"
                               sampleTempDisplay5.style.bottom = "62.1%"
                                ins.innerText= "Click on the motor on off button to on the rotation"
                                 motorOnOff.addEventListener("click", () => {
  if (f === 1004 && !isMotorRunning) {
    isMotorRunning = true; // Prevent further clicks
    pulse(motorOnOff);
    motorSound.volume = 1;
    motorSound.play();
    latex_beaker_200.style.animation = "shake1 19s linear";
   ins.innerText = "Rotation in progress... Please wait.";
    const spindleValues = [
      { time: 0,    s: "S63", cp: "cp 0", percent: "1.3%", rpm: "6.0RPM" },
      { time: 4000, s: "S63", cp: "cp 25", percent: "3.9%", rpm: "6.5RPM" },
      { time: 8000, s: "S63", cp: "cp 60", percent: "2.6%", rpm: "7.0RPM" },
      { time: 12000, s: "S63", cp: "cp 180", percent: "4.4%", rpm: "7.5RPM" },
      { time: 15000, s: "S63", cp: "cp 72.9", percent: "9.1%", rpm: "8.0RPM" }
    ];

    spindleValues.forEach(({ time, s, cp, percent, rpm }) => {
      setTimeout(() => {
        document.getElementById("actualTempDisplay4").innerText = s;
        document.getElementById("sampleTempDisplay4").innerText = cp;
        document.getElementById("actualTempDisplay5").innerText = percent;
        document.getElementById("sampleTempDisplay5").innerText = rpm;
        changeins.innerText = "The reading is too high and torque is very low, so we need to use spindle no. 3. Click on dial to change spindle.";
      }, time);
    });

    // After full sequence
    setTimeout(() => {
     
        setTimeout(() => {
      f = 1005;
      isMotorRunning = false; // Allow next click
       isRunningSequence = false; 
        ins.innerText = "Rotation completed !! Click on the motor ON/OFF button to stop the motor. See the readings";
        }, 1000)
    }, 0);  //15600
  }

 else if (f === 1005 && !isMotorRunning && !isRunningSequence) {
  
    pulse(motorOnOff);
    setTimeout(() => {
      document.getElementById("actualTempDisplay4").innerText = "S63";
      document.getElementById("sampleTempDisplay4").innerText = "cp 72.0";
      document.getElementById("actualTempDisplay5").innerText = "4.1%";
      document.getElementById("sampleTempDisplay5").innerText = "0.0 RPM";
      console.log(f + " motor on off block");
      ins.innerText = "Now the experiment is completed! ✅ see the readings and click on show observations"

      f = 1006;
        showResultBtn.style.visibility = "visible"
        setTimeout(() => {
       document.getElementById("showResultBtn").addEventListener("click", function () {
        showResultBtn.style.visibility = "hidden"
    const card = document.getElementById("viscosityResult");
    viscosityResult.style.visibility = "visible"
    card.style.display = "block";
    ins.innerText = "Experiment Completed ✅"
  });
       }, 1000);
    }, 500);
  }

})
                                                                         }, 1000)
                                                                         },1000)
                                                                      }, 1000)
                                                                       
                                                                   },1000)
                                                              }, 1000)
                                                      })
                                                  }, 1000)

                                         }, 1000)
                                        }else{"error happening"}
                                          },  { once: true })
                                   })
})
                                  

       }else{"nhi chalunga"}
    },  { once: true })
    
    

   
  


                                  


                              // moveViscoGroupDown

                               }, 1000) //
                               
                            }, 1000)
                              })
                          }else{"ghnta -- ullullululu"}
                          })

                 })
                })
             }, 1000)
      }, 1000)
    },  { once: true })
  }
}

function moveViscoGroupDown() {
  const group = document.getElementById("viscoGroup");
  group.style.top = "40%"; // or "100px", depending on how far down you want it
}