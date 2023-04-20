// write your code herec
const url ="http://localhost:3000/ramens"
const ramenMenu=document.getElementById("ramen-menu")

const ramenDetail=document.getElementById("#ramen-detail")
const detailImage=document.querySelector("#ramen-detail .detail-image")
const detailName=document.querySelector("#ramen-detail .name")
const detailRestaurant=document.querySelector("#ramen-detail .restaurant")
const ratingDisplay =document.getElementById("rating-display")
const commentDisplay=document.getElementById("comment-display")
// 1. see all ramen images in the div with #ramen-menu
//     request the data, then iterate through the data
//         //create one image tag for the current ramen
//DRY FETCH FUNCTION
function getRamen(url) {
    return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err()))}
    //populating menu function used
getRamen(url).then((data) => {
   data.forEach((ramen) => {
     ramenImg=document.createElement('img')
     ramenImg.src=ramen.image
     ramenImg.addEventListener('click', () => {
        detailImage.src = ramen.image
        detailName.textContent=ramen.name
        detailRestaurant.textContent=ramen.restaurant
        ratingDisplay.textContent=ramen.rating
        commentDisplay.textContent=ramen.comment
   }) 
   ramenMenu.appendChild(ramenImg)
})})
getRamen(url)

// function getData() { }
//     fetch(url) //end point
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)  
//         })
//         .catch(err => console.log(err))
//     