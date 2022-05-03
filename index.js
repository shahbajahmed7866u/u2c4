var shopAndGiftCard = document.createElement("div")
shopAndGiftCard.setAttribute("id","shopAndGiftCard")
var firstLineShopAndGiftCard = document.createElement("p")
firstLineShopAndGiftCard.innerText="Give Mom $150 Gift Cards, earn a $25 Promo Card!"
var secondLineShopAndGiftCard = document.createElement("p")
secondLineShopAndGiftCard.innerText="Ends May 9 at 1pm ET. Restrictions apply. Online only."
var thirdLineShopAndGiftCard = document.createElement("p")
thirdLineShopAndGiftCard.innerText="Shop Gift Cards & See Restrictions"
shopAndGiftCard.append(firstLineShopAndGiftCard,secondLineShopAndGiftCard,thirdLineShopAndGiftCard)

var searchAndNav= document.createElement("div")
searchAndNav.setAttribute("id","searchAndNav")
var searchBar=document.createElement("div")
var logoDiv = document.createElement("div")
var logo = document.createElement("a")
logo.href="https://www.google.com/"
var logoImg = document.createElement("img")
logoImg.src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg"
logoDiv.append(logo)
logo.append(logoImg)
searchBarBox = document.createElement("div")
var searchInput = document.createElement("input")
searchInput.placeholder="Search for products and brands"
var seachIcon = document.createElement("img")
seachIcon.src="https://i.ibb.co/Tr8qHrs/dwddd.png"
searchBarBox.append(seachIcon,searchInput)
cartAndSignUp = document.createElement("div")
var signUpButtonInSearch = document.createElement("p")
signUpButtonInSearch.innerText="Sign In ^"
var cartButtonInSearch = document.createElement("div")
var cartButtonInSearchBottom = document.createElement("div")
cartButtonInSearchBottom.innerText=0 
var cartButtonInSearchTop = document.createElement("div") 
cartButtonInSearch.append(cartButtonInSearchTop,cartButtonInSearchBottom)
var hoverMenuSigUp = document.createElement("div")
cartAndSignUp.append(signUpButtonInSearch,hoverMenuSigUp,cartButtonInSearch)
searchBar.append(logoDiv,searchBarBox,cartAndSignUp)
searchAndNav.append(searchBar)




document.querySelector("body").append(shopAndGiftCard,searchAndNav)