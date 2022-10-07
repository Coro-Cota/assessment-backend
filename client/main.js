const complimentBtn = document.getElementById("complimentButton")
const baseURL = "http://localhost:4000/api/compliments/"
const getCompliment = ({ data: compliments }) => randomCompliment(compliments)
{
    // axios.get(baseURL).then(res => {
    //         const data = res.data;
    //         alert(data);
    // });
};

complimentBtn.addEventListener('click', getCompliment)

document.getElementById("submit").addEventListener("submit", (e)=> {
    e.preventDefault();
    let new_compliment = document.querySelector(".compliment-input").value;
    let new_list = {

    }
})

const randomCompliment = (arr) => {
    while (arr.length > 0 ) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randoCompliment = arr[randomIndex];
    }
}
