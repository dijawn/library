const btn = document.querySelector(".btn");
const modal = document.querySelector("#modal");
const close = document.querySelectorAll(".close");
const submitBtn = document.querySelector(".submit");
let greenhouse = document.querySelector(".greenhouse");
const background = document.querySelector(".bg");

btn.addEventListener('click', e =>{
    modal.style.display = "grid";
    background.style.filter = "blur(8px)";
});

for(i=0; i<close.length; i++){
    close[i].addEventListener('click', e => {
        modal.style.display = "none";
        background.style.filter = "blur(0px)"
    });
    
};

let myGreenhouse = [];

function Plant(plantName, latinName, humidity, light){
    this.plantName = plantName
    this.latinName = latinName
    this.humidity = humidity
    this.light = light
};


function addPlantToGreenhouse(){
    let plantName = document.querySelector("#plantName").value;
    let latinName = document.querySelector("#latinName").value;
    let humidity = document.querySelector("#humidity").value;
    let light = document.querySelector("#light").value;
    let newPlant = new Plant(plantName, latinName, humidity, light);
    myGreenhouse.push(newPlant);
}

function displayPlant() {
    greenhouse.textContent = '';
    for (let i=0; i < myGreenhouse.length; i++){
        let plantDiv = document.createElement('div');
        plantDiv.classList.add("plant-card");

        let cardHeader = document.createElement('span');
        cardHeader.classList.add("cardHeader");
        cardHeader.textContent = myGreenhouse[i].plantName;
        let cardSubHeader = document.createElement('span');
        cardSubHeader.classList.add("cardSub")
        cardSubHeader.textContent = myGreenhouse[i].latinName;

        let humidityDisplay = document.createElement('span');
        humidityDisplay.classList.add('humidityDisplay')
        humidityDisplay.textContent = `Humidity Needs: ${myGreenhouse[i].humidity}`;

        let lightReqs = document.createElement('span');
        lightReqs.classList.add("lightReqs");
        lightReqs.textContent = `Light Needs: ${myGreenhouse[i].light}`;

        let removeBtn = document.createElement('button');
        removeBtn.classList.add("remove-style");
        removeBtn.textContent = 'Remove';
        
        plantDiv.appendChild(cardHeader);
        plantDiv.appendChild(cardSubHeader);
        plantDiv.appendChild(humidityDisplay);
        plantDiv.appendChild(lightReqs);
        plantDiv.appendChild(removeBtn);
        greenhouse.appendChild(plantDiv);
        removeBtn.addEventListener('click', e => {removePlant(i)});
    };    
};

function removePlant(index){
    myGreenhouse.splice(index, 1);
    displayPlant();
};


submitBtn.addEventListener('click', e => {
    addPlantToGreenhouse();
    displayPlant();
    modal.style.display = "none";
    background.style.filter = "blur(0)";
});

window.addEventListener('keypress', e => {
    if ((modal.style.display === 'grid' && e.key === "Enter")){
        modal.style.display = "none";
        background.style.filter = "blur(0)";
        addPlantToGreenhouse();
        displayPlant();
    }
})
