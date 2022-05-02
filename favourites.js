// write js code here corresponding to favourites.html
var favDisplayArr = JSON.parse(localStorage.getItem("favourites"))

showFavFun(favDisplayArr)

function showFavFun(favDisplayArr) {
    favDisplayArr.forEach(function (elem,i) {
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
      td6.innerText = "Delete";
    //   td6.style.color = "green";
      td6.style.cursor = "pointer";
      td6.addEventListener("click",function(){
          deleteItem(elem,i)
      })
      tr.append(td1, td2, td3, td4, td5, td6);
      document.querySelector("tbody").append(tr);
    });
  }

function deleteItem(elem,i){
    favDisplayArr.splice(i,1)
    localStorage.setItem("favourites",JSON.stringify(favDisplayArr))
    var newData = JSON.parse(localStorage.getItem("favourites"))
    document.querySelector("tbody").innerHTML=""
    showFavFun(newData)
}
