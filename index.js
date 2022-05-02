// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",storeData)

var homeData =JSON.parse(localStorage.getItem("schedule")) || []

function storeData(){
    event.preventDefault()
    var obj={
        matchNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:venue.value,
    }
    homeData.push(obj)
    // console.log(homeData)
    localStorage.setItem("schedule",JSON.stringify(homeData))
}
