const compliments = require('./db.json')
let globalId = 4

module.exports = {
    getCompliment: (req, res) => {
        // choose random compliment
        const getRandomCompliment = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        let some_compliment = getRandomCompliment(compliments)

        // let randomIndex = Math.floor(Math.random() * compliments.length);
        // let randomCompliment = compliments[randomIndex];

        res.status(200).send(some_compliment.compliment);
    },
    deleteCompliment: (req, res) =>{
        let index = compliments.findIndex(elem => elem.id === +req.params.id)
        compliments.splice(index,1)
        res.status(200).send(compliments)
    },
    createCompliment: (req,res) =>{
        let {id, compliment } = req.body
        let newCompliment = {
            id: globalId,
            compliment
        }
        compliments.push(newCompliment)
        res.status(200).send(compliments)
        globalId++
    }
      
        
}

    