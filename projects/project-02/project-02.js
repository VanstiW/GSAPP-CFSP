console.log('this works')

//---------- DATASET

const flowers = [
  {
    name: "Burton 1995 Kelly Air Camber Snowboard",
    category: "All Mountain",
    image: "https://files.cargocollective.com/c1851482/slender-traffic-blocker.glb"
  },
  {
    name: "Burton 1996 Dolphin Camber Snowboard",
    category: "All Mountain",
    image: "projects\project-02\asset\All Mountain\A2.jpg"
  },
  {
    name: "Burton 2011 Nug Rocker Snowboard",
    category: "All Mountain",
    image:"projects\project-02\asset\All Mountain\A3.jpg"
  },
  {
    name: "Burton Good Company Camber Snowboard",
    category: "Park",
    image:"projects\project-02\asset\Park\PA1.jpg"
  },
  {
    name: "Burton Blossom Camber Snowboard",
    category: "Park",
    image: "projects\project-02\asset\Park\PA2.jpg"
  },
  {name: "Women's Burton Rewind Camber Snowboard",
  category: "Park",
  image: "projects\project-02\asset\Park\PA3.jpg"
},
{name: "Burton 1995 Kelly Air Camber Snowboard",
  category: "Powder",
  image: "projects\project-02\asset\Powder\PO1.jpg"
},
{name: "Burton MINE77 x Underberg Family Tree 3D Daily Driver Snowboard",
  category: "Powder",
  image: "projects\project-02\asset\Powder\PO2.jpg"
},
{name: "Burton Flight Attendant Camber Splitboard",
  category: "splitboards",
  image: "projects\project-02\asset\Splitboards\S1.jpg"
},
{name: "Burton Family Tree Straight Chuter Camber Splitboard",
  category: "splitboards",
  image: "projects\project-02\asset\Splitboards\S2.jpg"
},

];

//---------- RENDER FLOWERS TO PAGE

const ul = document.querySelector("ul");

function renderFlowersToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('card', results[i].category) // 
    // add flower name
    let title = document.createElement('h3')
    title.textContent = results[i].name // 
    // add flower color
    let category = document.createElement('p')
    category.classList.add(results[i].category)
    category.textContent = results[i].category

    // add flower image
    let image = document.createElement('model-viewer')
    image.setAttribute('src', results[i].image)
    image.setAttribute('auto-rotate', true)
    image.setAttribute('rotation-per-second', '60deg')

    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(category)
    listItem.appendChild(image)

  }
}
renderFlowersToPage(flowers);

//---------- FILTER FLOWERS BY COLOR

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

// END OF FILTERING