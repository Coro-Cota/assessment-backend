const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getComplimentList = () => {
    axios.get("http://localhost:4000/api/cList/").then(res=> {
        const data = res.data;
        console.log(data);
    })
}

complimentBtn.addEventListener('click', getCompliment);
complimentBtn.addEventListener('click', getComplimentList);


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then(res => {
        const data = res.data;
        alert(data);
    });
};

const getFortuneList = () => {
    axios.get("http://localhost:4000/api/fList/").then(res=> {
        const data = res.data;
        console.log(data);
    })
};

function fortuneSubmit (evt) {
    evt.preventDefault()
    const fortuneSubmit = document.querySelector(".submit")
}


// i need to get addfortune to read the data in the submit form class: submitInput
const addFortune = () => {
    axios.post("http://localhost:4000/api/fList/").then(res=> {
        const data = res.data;
        console.log(data);
    })
}

fortuneBtn.addEventListener('click', getFortune);
fortuneBtn.addEventListener('click', getFortuneList);
fortuneSubmit.addEventListener('submit', addFortune);
