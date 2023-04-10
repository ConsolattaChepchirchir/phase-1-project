//lets start be declaring the variables that we need
// variable for aquiring the result from our api
var  result = document.getElementById('result')
//list of items in our array
var listItems = []
//this sorts our data from the api when we call it later
var filter = document.getElementById('filter')
//lets add an event listener that listens for our input
filter.addEventListener('input', (e) => filterData(e.target.value))
//lets now write a function that allows us to get data from the api using async and await
async function getdata(){
    //await tells our code to wait until a specific code as finished executing so that it can continue
    //the url link accesses 20 users in the randonuser.me api
    const res = await fetch('https://randomuser.me/api?results=20')
    //the code below displays the results and should await res.json
    const { results } =await res.json()
//this allow us to clear the result that was searching as stated in the html when the result is found
    result.innerHTML = ''
//lets now access data for each user
    results.forEach(user =>{
        //first we create an element list
        let li = document.createElement('li')
        //then we push the list element  to the array of the listItems 
        listItems.push(li)
        //what do we need to access.
        //first picture and the first name
        //on the ui we expect to see the first and last name including the city and country
        li.innerHTML =`<img src="${user.picture.large}" alt="${user.name.first}">
               

        <div class = "user-info">

        <h4>${user.name.first} ${user.name.last}</h4>
        <p> ${user.location.city},${user.location.country}</p>

        </div>
    
        `
        //lets now display the list of items we need
        result.appendChild(li)
    })


}
//the code below listens to the eventlistener in line 9 and displays the following
function filterData(searchTerm){
    //accesses data for each element
    listItems.forEach(item =>{
        //allows the data to be converted to lowercase even if it is in uppercase and for it to be diplayed and removed
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }
        //if the not present for it to be added
        else{
            item.classList.add('hide')
        }
    })
}
//lets finally get the data
getdata()

