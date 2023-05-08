console.log('this works')

//---------- DATASET

const islands = [
  {
    name: "Burton 1995 Kelly Air Camber Snowboard",
    size: "All Mountain",
    image: "https://github.com/VanstiW/GSAPP-CFSP/blob/main/projects/project-02/asset/All%20Mountain/A1.jpg?raw=true"
  },
  {
    name: "Burton 1996 Dolphin Camber Snowboard",
    size: "All Mountain",
    image: "https://github.com/VanstiW/GSAPP-CFSP/blob/main/projects/project-02/asset/All%20Mountain/A2.jpg?raw=true"
  },
  {
    name: "Burton 2011 Nug Rocker Snowboard",
    size: "All Mountain",
    image: "https://github.com/VanstiW/GSAPP-CFSP/blob/main/projects/project-02/asset/All%20Mountain/A3.jpg?raw=true"
  },
  {
    name: "Burton Good Company Camber Snowboard", 
    size: "Park",
    image: "https://github.com/VanstiW/GSAPP-CFSP/blob/main/projects/project-02/asset/Park/PA1.jpg?raw=true"
  },
  {
    name: "Burton Blossom Camber Snowboard", 
    size: "Park",
    image: "https://github.com/VanstiW/GSAPP-CFSP/blob/main/projects/project-02/asset/Park/PA2.jpg?raw=true"
  },
  {
    name: "Women's Burton Rewind Camber Snowboard", 
    size: "Park",
    image: "https://github.com/VanstiW/GSAPP-CFSP/blob/main/projects/project-02/asset/Park/PA3.jpg?raw=true"
  },
  {
    name: "Burton 1995 Kelly Air Camber Snowboard", 
    size: "Powder",
    image: "https://github.com/VanstiW/GSAPP-CFSP/blob/main/projects/project-02/asset/Powder/PO1.jpg?raw=true"
  },
  {
    name: "Burton MINE77 x Underberg Family Tree 3D Daily Driver Snowboard", 
    size: "Powder",
    image: "https://github.com/VanstiW/GSAPP-CFSP/blob/main/projects/project-02/asset/Powder/PO2.jpg?raw=true"
  },
  {
    name: "Burton Flight Attendant Camber Splitboard", 
    size: "Splitboards",
    image: "https://raw.githubusercontent.com/VanstiW/GSAPP-CFSP/main/projects/project-02/asset/Splitboards/S1.jpg"
  },
  {
    name: "Burton Family Tree Straight Chuter Camber Splitboard", 
    size: "Splitboards",
    image: "https://raw.githubusercontent.com/VanstiW/GSAPP-CFSP/main/projects/project-02/asset/Splitboards/S2.jpg"
  },

];

//------------- RENDER ISLANDS TO PAGE
const ul = document.querySelector("ul");

function renderIslandsToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('card', results[i].size) // small
    // add island name
    let title = document.createElement('h3')
    title.textContent = results[i].name // Hainan   
    // add island size
    let size = document.createElement('p')
    size.classList.add(results[i].size)
    size.textContent = results[i].size
    // add island image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(size)
    listItem.appendChild(image)

  }
}
renderIslandsToPage(islands);

let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function filterFn(event) {
  console.log(event.target)
  if(event.target.classList.contains('filter-btn')){
    // select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    activeBtn.classList.remove('active')

    // apply the active class to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') // yellow | red

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
      } else {
        cards[i].classList.remove('show')
        cards[i].classList.add('hide')
      }

    }
  }
}
filterBtns.addEventListener("click", filterFn);

