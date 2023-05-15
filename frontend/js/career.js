const container = document.querySelector(".container");

const loadCareers = () => {
    fetch("http://localhost:5000/careers")
        .then((response) => response.json())
        .then((data) => {
            const urlParams = new URLSearchParams(window.location.search);
            const career = urlParams.get("career");
            let careerData = [];

            // filter by career
            for (const currCareer of data) {
                if (currCareer.sectorName === career) {
                    careerData.push(currCareer);
                }
            }

            container.innerHTML = "";

            for (const careerDatum of careerData) {
                console.log("career datum", careerDatum);
                let growthRateColor = "gray";
                if (careerDatum.growthPct >5) {
                    growthRateColor = "gr1"
                }


                const careerDiv = `           
                    <div id="main2">
                        <div id="box1">
                            <div id="title1"><h1>${careerDatum.name}</h1></div>
                            <div id="des1"><p>$${careerDatum.avgIncome}/year average income</p></div>
                            <div id="${growthRateColor}"><p>${careerDatum.growthPct}/10 Growth Rate</p></div>
                            <div id="text1">Software developers design computer applications or programs. Software quality assurance analysts and testers identify problems with applications or programs and report defects.</div>
                            <a target="_blank" href="${careerDatum.usNewsLink}" id="but1" type="button" class="butt
                            ">
                                <span class="button__text">Learn more</span>
                                <span class="button__icon"> <ion-icon name="information-circle-outline"></ion-icon></span>
                            </a>
                        </div>
                    </div>
                
                `
                container.innerHTML += careerDiv;
            }
            
            console.log("Data", careerData);
        })
}

window.onload = () => {
    loadCareers();
}