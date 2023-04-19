// write your code herec
let ramenMenu 
let ramenArry 
let currentRamen
const ramenList=document.querySelector("#ramen-menu")
const imgDetail = document.querySelector(".detail-image")
const name1 = document.querySelector(".name")
const restaurant = document.querySelector(".restaurant")
const rating = document.querySelector("#rating-display")
const comment=document.querySelector("#comment-display")

// 1. See all ramen images in the div with the id of ramen-menu. 
        //a. When the page loads, request the data from the server to get all the ramen objects. 
        //b Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

        //my code
function getRamen () {
    return fetch("http://localhost:3000/ramens")
    .catch(err => console.log(err))
        .then(resp => resp.json())  //endpoint
        .then (ramens => {
            ramenArry=ramens
            currentRamen=ramenArry[0]
            ramenArry.map(ramens=> {     //iterate through data
                addImageToDiv(ramens)})})
    ramenDetail(currentRamen)
        }
        // //for each iteration RK....didn't work for me with different tags, map is okay
        // function getRamen () {
        //     return fetch("http://localhost:3000/ramens")
        //     .catch(err => console.log(err))
        //         .then(resp => resp.json())  //endpoint
        //         .then (ramens => {
        //             ramenArry=ramens
        //             currentRamen=ramenArry[0]
        //             ramenArry.forEach(currentRamen=> {     //iterate through data
        //                 addImageToDiv(ramens)})})
        //     ramenDetail(currentRamen)
        //         }
        


function addImageToDiv (ramens) {
    const ramenImage= document.createElement("img")
    ramenImage.src=ramens.image
    ramenImage.alt=ramens.name
    ramenList.append(ramenImage)
    
    ramenImage.addEventListener("click", () => ramenDetail(ramens)) //working
}

// 2. Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div
        //  and where it says insert comment here and insert rating here.  

function ramenDetail (ramens) {
   imgDetail.src = ramens.image
   name1.textContent = ramens.name
   restaurant.textContent = ramens.restaurant
    rating.textContent = ramens.rating
    comment.textContent=ramens.comment
    
}

const ramenForm=document.querySelector("#new-ramen") //selects input form-working


function getNewRamenInfo (newRamen) {
    ramenForm.addEventListener("click", (e) => {   //changed from change to submit
    e.preventDefault()
    name1.textContent=  e.target.name.value
    restaurant.textContent = e.target.restaurant.value
    imgDetail.src= e.target.image.value
    rating.textContent=e.target.rating.value
    e.target.comment.value

    ramenList.append(newRamen)
    
})}
console.log(ramenList)

// function newRamenForm(ramens) {
//     const 
// }

function submitForm(ramenForm) {
    ramenForm.addEventListener("submit", (e)=> {
        e.preventDefault()
        
    })
}






// 3. Create a new ramen after submitting the new-ramen form. 
    //a. The new ramen should be added to the#ramen-menu div. 
    //b The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.


    getRamen()