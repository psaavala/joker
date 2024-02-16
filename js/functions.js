
let i = 0
let x = 0
document.querySelector('button').addEventListener('click', () => {
    
  

    const jokerNumbers = []
    const jackpot = document.getElementById('jokerRows')
    const readyRows = document.getElementById('blargh')
    const showAmounts = () => {
        
        readyRows.innerHTML = 'Valmiita rivejä ' + i + ' ja arvottuja numeroita ' + x
    }

    while(jokerNumbers.length <7) {
        let newNumber = Math.floor(Math.random() * 9)
        if(!jokerNumbers.includes(newNumber)) {
            jokerNumbers.push(newNumber)
            x += 1
        }
    }


    const addNumbers = () => {
        const row = jackpot.insertRow()
        i += 1
        jokerNumbers.forEach(number => {
            const col = row.insertCell()
            col.textContent = number
            

        })
    }

    addNumbers()
    showAmounts()

})