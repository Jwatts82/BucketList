const apiService = new ApiService()
let main = document.getElementById('main')

const init = () => {
    bindEventListeners()
    renderLists()
}

function bindEventListeners() {
    document.getElementById('lists').addEventListener('click', renderLists)
    document.getElementById('list-form').addEventListener('click', displayCreateForm)
}

function displayCreateForm() {
    let formDiv = document.querySelector('#new-list-form')
    let html = `
        <form>
            <label>Location</label>
            <input type='text' id='location'></input>
            <label>Description</label>
            <input type='text' id='description'></input>
            <label>Complete</label>
            <input type='checkbox' id='completed'></input>
            <input type='submit'></input>
        </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createList)
}

async function createList(e) {
    e.preventDefault()
    let main = document.getElementById('main')
    let list = {
    location: e.target.querySelector('#location').value,
    description: e.target.querySelector("#description").value,
    completed: e.target.querySelector("#completed").checked
    }

    let data = await apiService.fetchCreateList(list)
    let newList = new list(data)
    main.innerHTML += newList.render()
        attachClicksToLinks()
        clearForm()
}

async function renderLists() {
    const lists = await apiService.fetchLists()
    main.innerHTML = ''
    lists.map(list => {
        const newList = new List(list)
        main.innerHTML += newList.render()
    })
    
}




function clearForm() {
    let formDiv = document.querySelector('#new-list-form')
    formDiv.innerHTML = ''
}

init()