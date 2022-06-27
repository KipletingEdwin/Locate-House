 //Here is my code

//Fetch all towns and display them to navbar menu section;
function getTownMenu(){
    fetch('http://localhost:3000/houses')
    .then(res=>res.json())
    .then(houses =>{
           const townList = document.getElementById('town-list');
           const existingTowns = Array.from(townList.children);
           existingTowns.forEach(item=>item.remove());   // Remove the existing children placeholders.
           houses.forEach(house=>{
           let townItem = document.createElement('li');
           townItem.textContent = house.town;
           townItem.addEventListener('click',displayInMainSection)   // when clicked,show the details in main section
           townList.appendChild(townItem); 
           
    });
    })
    .catch(error=>console.log(error))
    }

    //Display house details of a specific town  in main section
function displayInMainSection(event){
    const clickedTownName = event.target.textContent;   
    fetch('http://localhost:3000/houses')               
    .then(response=>response.json())
    .then(houses=>{
    let sameTown =houses.find(house=>{
                   return house.town === clickedTownName  // check if the name matches the grabbed one.    
        });
    updateHouse(sameTown)             // calling the function to display in main section
    })
    .catch(error=>console.log(error))
    }

    //Displaying house details in the mainsection
function updateHouse(houses){
    document.getElementById('price').textContent = houses.price;
    document.getElementById('firstHouse').src = houses.image_url;
    document.getElementById('location').textContent= houses.location;
}

// Adding a user tailored review;

document.querySelector('#comment-form').addEventListener('submit',(e) =>{
    e.preventDefault()
    handleComment(e.target.comment.value)
})
function handleComment(comments){
    let p = document.createElement ('p')
    p.textContent=comments
    document.querySelector('#comment-list').appendChild(p)

 
}
document.getElementById('book').addEventListener('click',clickAlert);
function clickAlert(){
    alert('You have booked')
}



getTownMenu()
// addComment()
// townList()
// townItem()
// existingTowns()

