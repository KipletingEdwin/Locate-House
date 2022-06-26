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
