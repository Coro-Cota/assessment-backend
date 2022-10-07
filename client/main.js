const complimentBtn = document.getElementById("complimentButton")
const baseURL = "http://localhost:4000/api/compliments/"
const getCompliment = () => {
    axios.get(baseURL).then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

document.getElementById("submit").addEventListener("submit", (e)=> {
    e.preventDefault();
    let new_compliment = document.querySelector(".compliment-input").value;
    let new_list = {

    }
})

// let randomIndex = Math.floor(Math.random() * compliments.length);
//         let randomCompliment = compliments[randomIndex];