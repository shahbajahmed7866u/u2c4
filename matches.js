// write js code here corresponding to matches.html
var scheduleMatch = JSON.parse(localStorage.getItem("schedule"));

showMatchScheduleFun(scheduleMatch);

function showMatchScheduleFun(scheduleMatch) {
    document.querySelector("tbody").innerHTML=""
  scheduleMatch.forEach(function (elem) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elem.matchNumber;
    var td2 = document.createElement("td");
    td2.innerText = elem.teamA;
    var td3 = document.createElement("td");
    td3.innerText = elem.teamB;
    var td4 = document.createElement("td");
    td4.innerText = elem.date;
    var td5 = document.createElement("td");
    td5.innerText = elem.venue;
    var td6 = document.createElement("td");
    td6.innerText = "Favourite";
    td6.style.color = "green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      favFun(elem);
    });
    // td6.append(favourite)
    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}
  var favScheduleMatch =JSON.parse(localStorage.getItem("favourites")) || [];

  function favFun(elem) {
    favScheduleMatch.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favScheduleMatch))
  }


  document.querySelector("#filterVenue").addEventListener("change",handleFilter)


  function handleFilter(){
      var selected = document.querySelector("#filterVenue").value
      var filterList = scheduleMatch.filter(function(elem){
          return elem.venue==selected
      })
      showMatchScheduleFun(filterList)
    //   console.log(selected)
    }

