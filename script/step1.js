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
const latex_beaker_200_S3 = document.querySelector('#latex_beaker_200_S3');
const latex_beaker_200_S1 = document.querySelector('#latex_beaker_200_S1');
 const motorSound = document.getElementById("motorSound");
  const motorSound_2 = document.getElementById("motorSound_2");
   const motorSound_3 = document.getElementById("motorSound_3");
 const stp37 = document.getElementById("stp37");
 const rpm_container = document.getElementById("rpm_container");
  const rpm_container_1 = document.getElementById("rpm_container_1");
   const rpm_container_2 = document.getElementById("rpm_container_2");

      const spindle_table = document.getElementById("spindle_table");

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
const spindleNo1 = document.getElementById("spindleNo1");
const viscosityDownButton = document.getElementById("viscosityDownButton");
const viscometerUpperPart = document.getElementById("viscometerUpperPart");
const viscometerStand = document.getElementById("viscometerStand");
const Off_On_button = document.getElementById("off_on_button");
const showResultBtn = document.getElementById("showResultBtn");
const viscosityResult = document.getElementById("viscosityResult");
const inference_container = document.getElementById("inference_container");

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


let selectedRPM = null;
let selectedRPM1 = null;
let selectedRPM2 = null;
let activeTimeouts = [];


wheighing();
function wheighing() {
    if (f === 1) {
        f = 1.5; // Move to the next step so this function doesn't run again unintentionally
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
          if(f === 1.5){
            f = 1.6;
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
                          if(f === 1.6){
                            f =1.7;
                          weightDisplay.innerText = "00.00"

                          pulse(weightDisplay)
                          ins.innerText = "Click on the latex beaker to measure 120ml latex"
                     latexBeakerfull.addEventListener('click', () => {
                      if(f === 1.7){
                        f = 1.8;
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
                                           tiltedlatex.style.opacity = "0%"
                                                    setTimeout(() => {
                                        
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
                                                        if(f === 1.8){
                                                          f = 1.9;
                                                         setTimeout(() => {
                                                        pulse(tareButton)
                                                        weightDisplay.innerText = "00.00"
                                                   ins.innerText = "Click on the water beaker to add 80 ml of water to latex"
                                                       waterBeaker.addEventListener('click', () => {
                                                              if(f === 1.9){
                                                                f = 1.95;
                                                            
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
                                                                                                                            console.log("running is running")
                                                                                                               latex_beaker_200.style.opacity = "1"
                                                                                                               latex_beaker_200.style.visibility = "visible"
                                                                                                               latex_beaker_200.style.display = "block"
                                                                                                               latex_beaker_200.style.opacity = "100%"
                                                                                                                  mainBeaker.style.opacity = "0%" 
                                                                                                                  mainBeaker.style.visibility = "hidden";
                                                                                                                  latex_80_top.style.visibility = "hidden"
                                                                                                                  latexBottom1.style.opacity = "0%"
                                                                                                                  latexBottom1.style.visibility = "hidden"
                                                                                                                 
                                                                                                                    setTimeout(() => {
                                                                                                                      ins.innerText = "Click on the latex beaker to reposition to its previous position for next procedure"
                                                                                                                  
                                                                                                                    console.log("f value is", f)
                                                                                                                   latex_beaker_200.addEventListener('click', () => {
                                                                                                                    if(f === 1.95){
                                                                                                                      f = 2;
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
                                                                                                                          }
                                                                                                                   }, )
                                                                                                                  
                                                                                                                }, 1000)
                                                                                                           }, 1000)
                                                                                                           }, 1000)
                                                                                                           }, 1000)
                                                                                                           }, 1000)
                                                                                                      }, 1000)
                                                                                                     
                                                                                                      }, 1000)
                                                                                                      }, 1000)
                                                                                          }, 1000)
                                                                               }, 1000)
                                                                               }, 1000)

                                                                        }, 1000)   
                                                                                                                                             }, 1000)
                                                                                                                                            }
                                                              }, )
                                                            }, 1000)
                                                                }else{console.log("no run")}
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
                  }, 10)  // 100


                  }, 1000)
           }, 1000)
           }, 1000)
           }, 1000)
                }else{console.log("no run")}
          })
        }else{console.log("no run")}
        })
      }, 1000)     
              }, 1000)

              }, 1000)

            }, 1000)
          }else{console.log("not run")}
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
      }else{"console.log(no run forever"}
} ,{ once: true });

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
            ins.innerText = "Click on the Set button to wait for 2 minutes to rise the water bath temperature to 25°C";
            setOff3.addEventListener("click", () => {
               pulse(setOff3)
              console.log("set button active")
               f = 201;
            startHoldingTimer(2); // Start 2 min timer
           
           
              
            },  { once: true })
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
          actualTempDisplay3.textContent = `${Math.round(currentTemp)}°C`;
        } else {
            clearInterval(tempInterval);
            actualTempDisplay3.textContent = `${Math.round(currentTemp)}°C`;
        }
    } , 400  ); //  480 every 0.5s adjust as needed

    // ⏲️ Countdown Timer
    const countdownInterval = setInterval(() => {
    
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
      
        seconds--;

        if (seconds < 0) {
            clearInterval(countdownInterval);
            clearInterval(tempInterval); // Stop temperature interval too
            timerDisplay13.textContent = "";
             latex_beaker()
            ins.innerText = "✅ Temperature stabilized. Now Click on the latex beaker to put onto water bath for stablizing latex at 25°C for 2 minutes";
            pulse(ins); // your existing animation
            
            
        }
    }, 100);  //100
}


function latex_beaker () {
if (f === 201) {
    f =201.5;
       
          
     latex_beaker_200.addEventListener("click", () => {
      if (f === 201.5) {
    f =201.6;
        latex_beaker_200.style.top = "30%"

      console.log("water_beaker_run")
      console.log(f) 
              setTimeout(() => {
              
       latex_beaker_200.style.left = "29%"
            setTimeout(() => {
       latex_beaker_200.style.height = "16%"
       latex_beaker_200.style.width = "7.5%"
             setTimeout(() => {
              latex_beaker_200.style.top = "51%"
              changeins.innerText = "wait for 2 minutes to stablized the temperature"
                   setTimeout(() => {
                startHoldingTimer1(2);
                              setTimeout(() => {
                                           latex_beaker_200.addEventListener("click", () => {
                                             if (f === 201.6) {
    f =201.7;
                                                       latex_beaker_200.style.top = "30%"

                                                      setTimeout(() => {
                                                               latex_beaker_200.style.height = "23.1%"
       latex_beaker_200.style.width = "12%"
                                                                setTimeout(() => {
                                                               latex_beaker_200.style.left = "65.1%"
                                                                    setTimeout(() => {
                                                               latex_beaker_200.style.top = "63.4%"
                                                                   setTimeout(() => {
                                                                ins.innerText="Click on Next button"
                                    startbutton.style.visibility="visible"
                                    startbutton.style.opacity = "100%"
                                    startbutton.innerText="Next"
                                   
                                    f = 600;
                                                         }, 1000); 
                                                         }, 1000); 
                                                         }, 1000); 
                                                         }, 1000);  
                                                        }else{console.log("no run here")}
                                                 },  { once: true })
                                   }, 1000);  
                      }, 1000);
                 }, 1000);
                     }, 1000);
              }, 1000);
     }else{console.log("no run here")}
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
    }, 100);  //100
}


function viscometer() {
  if(f === 601){
   f=601.5;
     spindle_table.style.visibility = "visible"
     spindleNo2.addEventListener("click", () => {
       if(f === 601.5){
   f=601.6;
          spindleNo2.style.rotate = "0deg"
        setTimeout(() => {
          spindleNo2.style.top = "45%"
          setTimeout(() => {
            spindleNo2.style.left = "14.5%"
            setTimeout(() => {
               spindleNo2.style.top = "43%"
                ins.innerText = "Click on the Sample A beaker to put it into stand for rotation"
    latex_beaker_200.addEventListener("click", () => {
       if(f === 601.6){
   f=602;
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
                           f = 995;
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
                                    if(f === 995){
                                      f = 996;

                                  pulse(Off_On_button)
                                    stp37.style.visibility = "visible";
                                    stp37.style.opacity = "100%"
                                  pulse(stp37)
                                
                                  let isMotorRunning = false;
                                  let isRunningSequence = false;
                          
                                rpm_container.style.visibility = "visible"
                                pulse(rpm_container);
                               ins.innerText = "Please select an rpm to run the spindle"
                                 motorOnOff.addEventListener("click", () => {
                                    if(f === 996.8){
                                      f = 997;
                                 if (selectedRPM === null) {
    alert("Please select RPM first!");
    return;
  }

  console.log("Running on RPM:", selectedRPM);
 let isMotorRunning = false;
  runSpindle(selectedRPM);

 

function runSpindle(rpm) {

  if (isMotorRunning) return; // ❌ prevent double click

  isMotorRunning = true;

  // 🔥 MOTOR START EFFECTS
  pulse(motorOnOff);
  motorSound.volume = 1;
  motorSound.currentTime = 0;
  motorSound.play();

  latex_beaker_200.style.animation = "shake 20s linear";
  ins.innerText = "Rotation in progress... Please wait...";

  let spindleValues = [];
   l = 100;
  // 🔹 8 RPM
  if (rpm === 8) {
    spindleValues = [
      { time: 0,    s: "S62", cp: "cp 0",   percent: "1.3%", rpm: "6.0RPM" },
      { time: 4000, s: "S62", cp: "cp 25",  percent: "1.9%", rpm: "6.5RPM" },
      { time: 8000, s: "S62", cp: "cp 60",  percent: "2.6%", rpm: "7.0RPM" },
      { time: 12000,s: "S62", cp: "cp 180", percent: "3.4%", rpm: "7.5RPM" },
      { time: 15000,s: "S62", cp: "cp 209", percent: "4.1%", rpm: "8.0RPM" }
    ];
  }

  // 🔹 10 RPM
  else if (rpm === 10) {
    spindleValues = [
      { time: 0,    s: "S62", cp: "cp 0",   percent: "1.3%", rpm: "6.0RPM" },
      { time: 3000, s: "S62", cp: "cp 40",  percent: "2.0%", rpm: "7.0RPM" },
      { time: 6000, s: "S62", cp: "cp 90",  percent: "2.8%", rpm: "8.0RPM" },
      { time: 9000, s: "S62", cp: "cp 150", percent: "3.3%", rpm: "9.0RPM" },
      { time: 12000,s: "S62", cp: "cp 198", percent: "3.8%", rpm: "10.0RPM" }
    ];
  }

  // 🔹 15 RPM
  else if (rpm === 15) {
    spindleValues = [
      { time: 0,    s: "S62", cp: "cp 0",   percent: "1.3%", rpm: "6.0RPM" },
      { time: 2000, s: "S62", cp: "cp 60",  percent: "2.2%", rpm: "8.0RPM" },
      { time: 5000, s: "S62", cp: "cp 120", percent: "2.9%", rpm: "10.0RPM" },
      { time: 7000, s: "S62", cp: "cp 160", percent: "3.2%", rpm: "12.0RPM" },
      { time: 9000, s: "S62", cp: "cp 180", percent: "3.4%", rpm: "15.0RPM" }
    ];
  }

  // 🔥 RUN DATA SEQUENCE
  spindleValues.forEach(({ time, s, cp, percent, rpm }) => {
    if(l === 100){
      console.log
 
  const t = setTimeout(() => {
    console.log("their value start changing with time why we dont know")
    document.getElementById("actualTempDisplay4").innerText = s;
    document.getElementById("sampleTempDisplay4").innerText = cp;
    document.getElementById("actualTempDisplay5").innerText = percent;
    document.getElementById("sampleTempDisplay5").innerText = rpm;

    document.getElementById("vis-S2").innerText = cp.replace("cp ", "");
    document.getElementById("torque-S2").innerText = percent;
    document.getElementById("time-S2").innerText = time / 1000;
 
  }, time);
}else{console.log("none")}


});

  // ✅ STOP MOTOR AFTER LAST STEP
 
  let totalTime = spindleValues[spindleValues.length - 1].time;
  setTimeout(() => {
    motorSound.pause();
    latex_beaker_200.style.animation = "none";
    ins.innerText = "Rotation Complete ✅";
          f = 999;
          ins.innerText = "Click on the visometer dial to lift up"
    isMotorRunning = false; // allow next run
  }, totalTime + 500);
}


  // if (f === 997 && !isMotorRunning) {
  //   isMotorRunning = true;  // Prevent further clicks
  //   pulse(motorOnOff);
  //   motorSound.volume = 1;
  //   motorSound.play();
  //   latex_beaker_200.style.animation = "shake 20s linear";
  //   ins.innerText = "Rotation in progress... Please wait.";
  //   const spindleValues = [
  //     { time: 0,    s: "S62", cp: "cp 0", percent: "1.3%", rpm: "6.0RPM" },
  //     { time: 4000, s: "S62", cp: "cp 25", percent: "1.9%", rpm: "6.5RPM" },
  //     { time: 8000, s: "S62", cp: "cp 60", percent: "2.6%", rpm: "7.0RPM" },
  //     { time: 12000, s: "S62", cp: "cp 180", percent: "3.4%", rpm: "7.5RPM" },
  //     { time: 15000, s: "S62", cp: "cp 209", percent: "4.1%", rpm: "8.0RPM" }
  //   ];
  
  //   spindleValues.forEach(({ time, s, cp, percent, rpm }) => {
  //     setTimeout(() => {
  //       document.getElementById("actualTempDisplay4").innerText = s;
  //       document.getElementById("sampleTempDisplay4").innerText = cp;
  //       document.getElementById("actualTempDisplay5").innerText = percent;
  //       document.getElementById("sampleTempDisplay5").innerText = rpm;
       
  //     }, time);
  //     f = 997.5
  //   });

  //   // After full sequence
  //   setTimeout(() => {
     
  //       setTimeout(() => {
  //         if(f === 997.5){
  //     f = 998;
  //     isMotorRunning = false; // Allow next click
  //      isRunningSequence = false; 
  //       ins.innerText = "Rotation completed !! Click on the motor ON/OFF button to stop the motor. See the readings";
  //         }
  //       }, 1000)
  //   }, 10500);  //15600
    
  // }

//  else if (f === 998 && !isMotorRunning && !isRunningSequence) {
  
//     pulse(motorOnOff);
//     setTimeout(() => {
//       document.getElementById("actualTempDisplay4").innerText = "S62";
//       document.getElementById("sampleTempDisplay4").innerText = "cp 240";
//       document.getElementById("actualTempDisplay5").innerText = "1.4%";
//       document.getElementById("sampleTempDisplay5").innerText = "0.0 RPM";
//       console.log(f + " motor on off block");
//       f = 999;
//       ins.innerText = "Click on the dial to push them to up for channging of spindle"
//     }, 500);
//   }



   

  
     
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
        ins.innerText = "Spindle selection completed. Now click on the spindle no.3 to replace it with spindle no.2 .";
    }
});

                                      
                                setTimeout(() => {
                                   spindleNo3.addEventListener("click", () => {
                                    if(f === 1003){
                                      f = 1003.5;
                                    console.log("spindleno2")
                                     spindleNo2.style.top = "50%"
                                     spindleNo3.style.top = "50%"
                                         setTimeout(() => {
                                         spindleNo2.style.left = "41.4%"
                                          spindleNo3.style.transform = "rotate(90deg)"
                                            setTimeout(() => {
                                       
                                                  setTimeout(() => {
                                                 spindleNo2.style.top = "80%"
                                                   spindleNo3.style.left = "14.49%"
                                                        setTimeout(() => {
                                                            spindleNo2.style.transform = "rotate(-90deg)"
                                                          spindleNo3.style.top = "45%"
                                                          ins.innerText = "Click on the Sample B beaker to replace the current sample with it"

                     
                                                   
                                                                       latex_beaker_200_S3.addEventListener("click", () => {
                                                                        if(f === 1003.5 ){
                                                                          f = 1003.6
                                                                           setTimeout(() => {
                                                                            latex_beaker_200_S3.style.top = "50%"
                                                                            latex_beaker_200.style.left = "64%"
                                                                             setTimeout(() => {
                                                                             
                                                                              latex_beaker_200_S3.style.left = "20%"
                                                                               setTimeout(() => {
                                                                                latex_beaker_200_S3.style.left = "9%"
                                                                                latex_beaker_200_S3.style.top = "62%"
                                                                                 latex_beaker_200.style.top = "64%"
                                                                                          ins.innerText = "Now click on the dial to reach to the beaker and start the rotation"
                                                                         viscometerUpperPart.addEventListener("click", () => {
                                                                          if(f === 1003.6){
                                                                            f = 1003.8;
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
                                ins.innerText= "Select any rpm to rotate the spindle"
                                 document.getElementById("sampleTempDisplay4").innerText = "CP 00";
    
      document.getElementById("sampleTempDisplay5").innerText = "0.0RPM";
      rpm_container_1.style.visibility = "visible";
                                 motorOnOff.addEventListener("click", () => {
      if(f === 1004){
        f = 1005;
 if (selectedRPM1 === null) {
    alert("Please select RPM first!");
    return;
  }

  console.log("Running on RPM:", selectedRPM);
 let isMotorRunning1 = false;
  runSpindle1(selectedRPM1);

 

function runSpindle1(rpm1) {

  if (isMotorRunning1) return; // ❌ prevent double click

  isMotorRunning1 = true;

  // 🔥 MOTOR START EFFECTS
  pulse(motorOnOff);

 
  motorSound_2.play();

  latex_beaker_200.style.animation = "shake 20s linear";
  ins.innerText = "Rotation in progress... Please wait...";

  let spindleValues1 = [];
 l =800;
  // 🔹 8 RPM
  if (rpm1 === 8) {
    spindleValues1 = [
  { time1 : 0,    s1 : "S3", cp1: "cp 0",   percent1: "1.2%", rpm1: "6.0RPM" },
  { time1 : 4000, s1: "S3", cp1: "cp 20",  percent1: "1.7%", rpm1: "6.5RPM" },
  { time1 : 8000, s1: "S3", cp1: "cp 55",  percent1: "2.3%", rpm1: "7.0RPM" },
  { time1 : 12000, s1: "S3", cp1: "cp 160", percent1: "3.1%", rpm1: "7.5RPM" },
  { time1 : 15000,s1 : "S3", cp1: "cp 190", percent1: "3.7%", rpm1: "8.0RPM" }
];
  }

  // 🔹 10 RPM
  else if (rpm1 === 10) {
    spindleValues1 = [
  { time1: 0,    s1: "S3", cp1: "cp 0",   percent1: "1.2%", rpm1: "6.0RPM" },
  { time1: 3000, s1: "S3", cp1: "cp 35",  percent1: "1.8%", rpm1: "7.0RPM" },
  { time1: 6000, s1: "S3", cp1: "cp 80",  percent1: "2.5%", rpm1: "8.0RPM" },
  { time1: 9000, s1: "S3", cp1: "cp 140", percent1: "3.0%", rpm1: "9.0RPM" },
  { time1: 12000,s1: "S3", cp1: "cp 175", percent1: "3.4%", rpm1: "10.0RPM" }
];
  }

  // 🔹 15 RPM
  else if (rpm1 === 15) {
    spindleValues1 = [
  { time1: 0,    s1: "S3", cp1: "cp 0",   percent1: "1.2%", rpm1: "6.0RPM" },
  { time1: 2000, s1: "S3", cp1: "cp 50",  percent1: "2.0%", rpm1: "8.0RPM" },
  { time1: 5000, s1: "S3", cp1: "cp 110", percent1: "2.6%", rpm1: "10.0RPM" },
  { time1: 7000, s1: "S3", cp1: "cp 150", percent1: "3.0%", rpm1: "12.0RPM" },
  { time1: 9000, s1: "S3", cp1: "cp 170", percent1: "3.3%", rpm1: "15.0RPM" }
];
  }

  activeTimeouts.forEach(clearTimeout);
activeTimeouts = [];

  // 🔥 RUN DATA SEQUENCE
  spindleValues1.forEach(({ time1, s1, cp1, percent1, rpm1}) => {
     if(l === 800){
    setTimeout(() => {
     
      document.getElementById("actualTempDisplay4").innerText = s1;
      document.getElementById("sampleTempDisplay4").innerText = cp1;
      document.getElementById("actualTempDisplay5").innerText = percent1;
      document.getElementById("sampleTempDisplay5").innerText = rpm1 ;
          document.getElementById("vis-S3").innerText = cp1.replace("cp ", "");
                  document.getElementById("torque-S3").innerText = percent1;
                      document.getElementById("time-S3").innerText = time1 / 1000;
      
    }, time1);
  }else{console.log("not run now")}
  });

  // ✅ STOP MOTOR AFTER LAST STEP
  let totalTime1 = spindleValues1[spindleValues1.length - 1].time1;

  setTimeout(() => {
    motorSound_2.pause();
    latex_beaker_200.style.animation = "none";
    ins.innerText = "Rotation Complete ✅";
          f = 1006;
          ins.innerText = "Click on the visometer dial to lift up"
    isMotorRunning1 = false; // allow next run
  }, totalTime1 + 500);
}

 

 viscometerUpperPart.addEventListener("click", () => {
       if(f === 1006){
        f = 1006.8;
                viscometerUpperPart.style.top = "15%";
                               
                              selectSpindle.style.top = "31%"
                              setSplinder.style.top = "31%"
                              viscosityUpButton.style.top = "29%"
                              viscosityDownButton.style.top = "33%"
                              motorOnOff.style.top = "24.5%"
                               spindleNo3.style.top = "41%"
                               Off_On_button.style.top = "24.20%"
                               

                               actualTempDisplay4.style.bottom = "79%"
                               sampleTempDisplay4.style.bottom = "79%"
                               actualTempDisplay5.style.bottom= "77.3%"
                               sampleTempDisplay5.style.bottom = "77.3%"

                     let spindleClickCount = 0;
const spindleSequence = ['S1'];

ins.innerText = "Click on the Set button to change the spindle from S3 to S1";

// Set Spindle Click
setSplinder.addEventListener("click", () => {
    if (f === 1006.8) {
        f = 1006.9;
        pulse(setSplinder);
        pulse(actualTempDisplay4);
        ins.innerText = "Now click on up ⬆️ button to set spindle 1 sequence";
    }else{console.log("no run forever")}


// Viscosity Up Button Click (Cycle Spindles)
viscosityUpButton.addEventListener("click", () => {
    if (f === 1006.9 && spindleClickCount < 1) {
        const spindle = spindleSequence[spindleClickCount];
        actualTempDisplay4.innerText = `${spindle}`;
        pulse(actualTempDisplay4);
        pulse(viscosityUpButton);
        spindleClickCount++;

        if (spindleClickCount === 1) {
            selectSpindle.style.display = "inline-block";  // Show select button
            ins.innerText = "Now click on Select button to finalize spindle selection.";
        }
    }else{console.log("no run forever...")}
});

selectSpindle.addEventListener("click", () => {
    if (f === 1006.9 && spindleClickCount === 1) {
        f = 1006.95;
      
        pulse(sampleTempDisplay4);
        pulse(selectSpindle);
        ins.innerText = "Spindle selection completed. Now click on the spindle no.1 to replace it with spindle no.2 .";
    }else{console.log("no run")}
});
})
                        
                                   spindleNo1.addEventListener("click", () => {
                                    if(f === 1006.95){
                                      f = 1006.98;
                                    console.log("spindleno2")
                                     spindleNo3.style.top = "50%"
                                     spindleNo1.style.top = "50%"
                                         setTimeout(() => {
                                         spindleNo3.style.left = "42%"
                                          spindleNo1.style.transform = "rotate(90deg)"
                                            setTimeout(() => {
                                       
                                                  setTimeout(() => {
                                                 spindleNo3.style.top = "83%"
                                                   spindleNo1.style.left = "14.49%"
                                                        setTimeout(() => {
                                                            spindleNo3.style.transform = "rotate(0deg)"
                                                          spindleNo1.style.top = "45%"
                                                          ins.innerText = "Click on the Sample C beaker to replace the current sample with it"
                                                                latex_beaker_200_S1.addEventListener("click", () => {
                                                                  if(f === 1006.98){
                                                                    f = 1007;
                                                                  latex_beaker_200_S3.style.left = "54%"
                                                                 
                                                                      setTimeout(() => {
                                                                        latex_beaker_200_S1.style.top = "62%"
                                                                        latex_beaker_200_S3.style.top = "70%"
                                                                               setTimeout(() => {
                                                                                latex_beaker_200_S1.style.left = "9%";
                                                                        latex_beaker_200_S3.style.transform = "-90deg";
                                            ins.innerText = "Click on the dial to pull it down for rotation"
                               viscometerUpperPart.addEventListener("click", () => {
                                                                          if(f === 1007){
                                                                            f = 1007.9;
                                                                              viscometerUpperPart.style.top = "30%";
                               
                              selectSpindle.style.top = "46%"
                              setSplinder.style.top = "46%"
                              viscosityUpButton.style.top = "44%"
                              viscosityDownButton.style.top = "48%"
                              motorOnOff.style.top = "39.2%"
                             
                               Off_On_button.style.top = "39.5%"
                               spindleNo1.style.top = "60%"


                               actualTempDisplay4.style.bottom = "63.91%"
                               sampleTempDisplay4.style.bottom = "63.91%"
                               actualTempDisplay5.style.bottom= "62.1%"
                               sampleTempDisplay5.style.bottom = "62.1%"
                                ins.innerText= "Select any rpm to rotate the spindle"

                                  rpm_container_2.style.visibility = "visible"
                                  pulse(rpm_container_2)
                                   document.getElementById("sampleTempDisplay4").innerText = "cp 00";
    
      document.getElementById("sampleTempDisplay5").innerText = "0.0RPM";
                                     motorOnOff.addEventListener("click", () => {
                                      if(f === 1008 ){
                                         f = 1009;
                                           if (selectedRPM2 === null) {
    alert("Please select RPM first!");
    return;
  }

  console.log("Running on RPM:", selectedRPM);
 let isMotorRunning2 = false;
  runSpindle2(selectedRPM2);

 

function runSpindle2(rpm2) {

  if (isMotorRunning2) return; // ❌ prevent double click

  isMotorRunning2 = true;

  // 🔥 MOTOR START EFFECTS
  pulse(motorOnOff);

 
  motorSound_3.play();

  latex_beaker_200.style.animation = "shake 20s linear";
  ins.innerText = "Rotation in progress... Please wait...";

  let spindleValues2 = [];
 l = 800;
  // 🔹 8 RPM
  if (rpm2 === 8) {
    spindleValues2 = [
  { time2: 0,    s2: "S1", cp2: "cp 0",   percent2: "1.5%", rpm2: "6.0RPM" },
  { time2: 4000, s2: "S1", cp2: "cp 30",  percent2: "2.2%", rpm2: "6.5RPM" },
  { time2: 8000, s2: "S1", cp2: "cp 85",  percent2: "3.0%", rpm2: "7.0RPM" },
  { time2: 12000,s2: "S1", cp2: "cp 240", percent2: "4.2%", rpm2: "7.5RPM" },
  { time2: 15000,s2: "S1", cp2: "cp 290", percent2: "5.0%", rpm2: "8.0RPM" }
];
  }

  // 🔹 10 RPM
  else if (rpm2 === 10) {
    spindleValues2 = [
  { time2: 0,    s2: "S1", cp2: "cp 0",   percent2: "1.5%", rpm2: "6.0RPM" },
  { time2: 3000, s2: "S1", cp2: "cp 50",  percent2: "2.4%", rpm2: "7.0RPM" },
  { time2: 6000, s2: "S1", cp2: "cp 115", percent2: "3.3%", rpm2: "8.0RPM" },
  { time2: 9000, s2: "S1", cp2: "cp 200", percent2: "4.1%", rpm2: "9.0RPM" },
  { time2: 12000,s2: "S1", cp2: "cp 260", percent2: "4.8%", rpm2: "10.0RPM" }
];
  }

  // 🔹 15 RPM
  else if (rpm2 === 15) {
    spindleValues2 = [
  { time2: 0,    s2: "S1", cp2: "cp 0",   percent2: "1.5%", rpm2: "6.0RPM" },
  { time2: 2000, s2: "S1", cp2: "cp 75",  percent2: "2.8%", rpm2: "8.0RPM" },
  { time2: 5000, s2: "S1", cp2: "cp 160", percent2: "3.7%", rpm2: "10.0RPM" },
  { time2: 7000, s2: "S1", cp2: "cp 230", percent2: "4.5%", rpm2: "12.0RPM" },
  { time2: 9000, s2: "S1", cp2: "cp 280", percent2: "5.2%", rpm2: "15.0RPM" }
];
  }

  activeTimeouts.forEach(clearTimeout);
activeTimeouts = [];

  // 🔥 RUN DATA SEQUENCE
  spindleValues2.forEach(({ time2, s2, cp2, percent2, rpm2}) => {
     if(l === 800){
    setTimeout(() => {
     
      document.getElementById("actualTempDisplay4").innerText = s2;
      document.getElementById("sampleTempDisplay4").innerText = cp2;
      document.getElementById("actualTempDisplay5").innerText = percent2;
      document.getElementById("sampleTempDisplay5").innerText = rpm2 ;
          document.getElementById("vis-S1").innerText = cp2.replace("cp ", "");
                  document.getElementById("torque-S1").innerText = percent2;
                      document.getElementById("time-S1").innerText = time2 / 1000;
      
    }, time2);
  }else{console.log("not run now")}
  });

  // ✅ STOP MOTOR AFTER LAST STEP
  let totalTime2 = spindleValues2[spindleValues2.length - 1].time2;

  setTimeout(() => {
    motorSound_3.pause();
    latex_beaker_200_S1.style.animation = "none";
    ins.innerText = "Eperiment Completed Observe the Observation Table and Inference carefully";
          f = 1010;
       stp33.style.visibility = "hidden"
      inference_container.style.visibility = "visible"
      stp37.style.visibility = "hidden"
      motorOnOff.style.visibility = "hidden"
      latex_beaker_200.style.visibility = "hidden"
    isMotorRunning2 = false; // allow next run
  }, totalTime2 + 500);
}

                                      }else("no run")
                                     })
                                                                          }
                                                                        })
                                                                                 },1000)
                                                                           },1000)
                                                                          }else{console.log("no run here now", f)}
                                                                })
                                                            },1000)
                                                              },1000)
                                                                },1000)
                                                                  },1000)
                                                                }
                                                              })
       }else{console.log("no run here ")}
      })

 
                                 }else{console.log("nowhere")}
}, { once: true });
                                                                         }else{(console.log("none"))}
                                                                         }, )
                                                                         },1000)
                                                                         },1000)
                                                                         },1000)
                                                                        }
                                                                           }, )
                                                                      
                                                               },1000)
                                                      })
                                                  }, 1000)

                                         }, 1000)
                                        }else{"error happening"}
                                          },  { once: true })
                                   })
})
                                  

       }else{"nhi chalunga"}
    })
    
    

   
  


                                  


                              // moveViscoGroupDown
  }
                               });
                              }
                            }, 0)
                              })
                          }else{"ghnta -- ullullululu"}
                          })

                 })
                })
             }, 1000)
      }, 1000)
    }
    },  { once: true })
      }, 1000)
       }, 1000)
      }, 1000)
    }else{console.log("no run here now")}
  })
  }
}

function moveViscoGroupDown() {
  const group = document.getElementById("viscoGroup");
  group.style.top = "40%"; // or "100px", depending on how far down you want it
}


                              function selectRPM(rpm) {
                                if(f === 996){
                                    rpm_container.style.visibility = "hidden";
                                    document.getElementById("speed-S2").innerText = rpm;

  selectedRPM = rpm;
  console.log("RPM Selected:", rpm);
  f = 996.8;
  ins.innerText = "Now click on the motor on off button to start it"
     }else{console.log("no run here now")}
}


 function selectRPM1(rpm1) {
                                    rpm_container_1.style.visibility = "hidden";
                                    document.getElementById("speed-S3").innerText = rpm1;

  selectedRPM1 = rpm1;
  console.log("RPM Selected:", rpm1);
  f = 1004;
  ins.innerText = "Now click on the motor on off button to start it"
}

function selectRPM2(rpm2) {
  if(1007.9){
                                    rpm_container_2.style.visibility = "hidden";
                                    document.getElementById("speed-S1").innerText = rpm2;

  selectedRPM2 = rpm2;
  console.log("RPM Selected:", rpm2);
  // f = 996.8;

  f = 1008;
  ins.innerText = "Now click on the motor on off button to start it"
  }
}