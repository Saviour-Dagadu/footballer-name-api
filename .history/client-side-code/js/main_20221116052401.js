document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const footballerName = document.querySelector('input').value
    try {
        const response = await fetch(`https://footballer-api.herokuapp.com/api/${footballerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h3').innerText = data.birthName
        document.querySelector('h3').innerText = data.birthName
        document.querySelector('h3').innerText = data.birthName
    } catch (error) {
        console.log(error)
    }
}