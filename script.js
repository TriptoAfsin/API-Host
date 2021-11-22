const mainContainer = document.getElementById('mainContainer')


const jsonArray = [
    {
        name: "Notes DB",
        path: "./notesDB.json"
    },
    {
        name: "Phone DB",
        path: "./phoneDB.json"
    },
    {
        name: "Book DB",
        path: "./BookDB.json"
    },
    {
        name: "Events DB",
        path: "./specialDaysDb.json"
    },
    {
        name: "Libs DB",
        path: "./usefulJSDB.json"
    },
    {
        name: "My Projects",
        path: "./myProjects.json"
    },
    {
        name: "NoteBOT",
        path: "../noteBOT.json"
    }
]

jsonArray.map(
    json => {
        console.log("I'm Here")
        mainContainer.innerHTML += 
                `<div class="container">
                    <a href="${json.path}" class="button">${json.name}</a>
                </div>`
    }   
)