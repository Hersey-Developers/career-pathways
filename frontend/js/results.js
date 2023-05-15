const restartButton = document.getElementById('restart');
const container = document.getElementById('container');

restartButton.addEventListener('click', (event) => {
    event.preventDefault();

    localStorage.setItem('weights', JSON.stringify({}));
    localStorage.setItem('questionNumber', 1);
    window.location.href = "/frontend/questions.html";
});

const loadData = () => {
    const weights = JSON.parse(localStorage.getItem('weights'));
    fetch("http://localhost:5000/sectors").then((response) => response.json()).then((data) => {
        let weightData = [];
        for (const sector in weights) {
            weightData.push({
                sector: sector,
                weight: weights[sector]
            });
        }

        weightData = weightData.sort((a, b) => {
            return b.weight - a.weight;
        });

        let sectorData = [];

        for (const weight of weightData) {
            const foundSector = data.find((sector) => {
                return sector.name === weight.sector;
            })
            sectorData.push(foundSector);
        }

        container.innerHTML = "";

        for (const sector of sectorData) {

            let color = "gray";
            if (sector.projectedGrowth === "Medium") {
                color ="gr1"
            } 
            if (sector.projectedGrowth === "Large") {
                color = "gr5"
                console.log(sector);
            }

            console.log("color", color);

            const sectorDiv = `
                <div id="main2">
                <div id="box1">
                    <div id="title1"><h1>${sector.name}</h1></div>
                    <div id="des1"><p>$${sector.avgIncome.toFixed(0)}/year Avg. Income</p></div>
                    <div id="${color}"><p>${sector.projectedGrowth} Projected Growth</p></div>
                    <a href="/frontend/career.html?career=${sector.name}" id="but1" type="button" class="butt">
                        <span class="button__text">Find Jobs</span>
                        <span class="button__icon"> <ion-icon name="chevron-forward-outline"></ion-icon></span>
                    </a>
                </div>
                </div>
            `

            container.innerHTML += sectorDiv;
        }
        console.log('sectorData', sectorData);




    })
}

window.onload = () => {
    loadData();
}