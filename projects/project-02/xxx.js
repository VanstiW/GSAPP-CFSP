console.log('this works')

//---------- DATASET

const islands = [
  {
    name: "Zealand",
    country: "Denmark",
    size: "small",
    image:
      "https://user-images.githubusercontent.com/123484377/235378292-5d5cb9ed-ff93-453d-8587-994975b079ce.jpg"
  },
  {
    name: "Flores",
    country: "Indonesia",
    size: "medium",
    image: "https://user-images.githubusercontent.com/123484377/235378293-708f936d-e0df-4821-ad51-8fbba100e76f.jpg"
  },
  {
    name: "Great Britain",
    country: "United Kingdom",
    size: "large",
    image:
      "https://user-images.githubusercontent.com/123484377/235378294-9ae3f290-5ed5-443d-b29c-1272b428b289.jpg"
  },
  {
    name: "Hainan", 
    country: "China",
    size: "large",
    image:
      "https://user-images.githubusercontent.com/123484377/235378296-45978b24-668c-4651-8fb6-4f98f1303823.jpg"
  },
  {
    name: "Hispaniola", 
    country: "DominicanRepublic / Haiti",
    size: "large",
    image: "https://user-images.githubusercontent.com/123484377/235378297-9cf7c191-26fc-4d00-bfef-c689073ff0d0.jpg"
  },
  {
    name: "Honshu", 
    country: "Japan",
    size: "large",
    image: "https://user-images.githubusercontent.com/123484377/235378298-3de85710-8fed-4a02-8f80-d2f7db85a755.jpg"
  },
  {
    name: "Jamaica", 
    country: "Jamaica",
    size: "small",
    image: "https://user-images.githubusercontent.com/123484377/235378299-7adde0f7-6b1b-4d34-a3da-43d4944a95f0.jpg"
  },
  {
    name: "Java", 
    country: "Indonesia",
    size: "large",
    image: "https://user-images.githubusercontent.com/123484377/235378300-a673f48d-9087-4bd5-910d-a5437921d9ba.jpg"
  },
  {
    name: "Kyushu", 
    country: "Japan",
    size: "medium",
    image: "https://user-images.githubusercontent.com/123484377/235378300-a673f48d-9087-4bd5-910d-a5437921d9ba.jpg"
  },
  {
    name: "Luzon", 
    country: "Philippines",
    size: "medium",
    image: "https://user-images.githubusercontent.com/123484377/235378308-d42a977a-b115-4aa9-af04-773d3d877cf4.jpg"
  },
  {
    name: "Mindanao", 
    country: "Philippines",
    size: "large",
    image: "https://user-images.githubusercontent.com/123484377/235378307-96002e9e-44fd-411d-a0e8-283f407b4b7d.jpg"
  },
  {
  name: "Negros", 
  country: "Philippines",
  size: "small",
  image: "https://user-images.githubusercontent.com/123484377/235378305-1dce8dbf-053f-4670-8010-706fe714b2b9.jpg"
  },
  {
    name: "Panay", 
    country: "Philippines",
    size: "small",
    image: "https://user-images.githubusercontent.com/123484377/235378304-72527746-9791-4714-ac97-4d2d8fa11416.jpg"
  },
  {
    name: "Puerto Rico", 
    country: "United States",
    size: "small",
    image: "https://user-images.githubusercontent.com/123484377/235378303-f71c8137-54e0-44ad-b1f2-515c943e6e2c.jpg"
  },
  {
    name: "Samar", 
    country: "Philippines",
    size: "small",
    image: "https://user-images.githubusercontent.com/123484377/235378302-e3fbdb24-e9d2-4506-a89a-fa4d60c7f818.jpg"
  },
  {
    name: "Shikoku", 
    country: "Japan",
    size: "small",
    image: "https://user-images.githubusercontent.com/123484377/235378301-59654235-8f6e-4d13-a463-57f0e9b6fb4c.jpg"
  },
  {
    name: "Sicily", 
    country: "Italy",
    size: "medium",
    image: "https://user-images.githubusercontent.com/123484377/235378310-b7e04d81-00b4-4671-948a-252fdcab2daa.jpg"
  },
  {
    name: "Sri Lanka", 
    country: "Sri Lanka",
    size: "large",
    image: "https://user-images.githubusercontent.com/123484377/235378311-cb145e45-455a-41f5-ac94-0c2a8b25be3d.jpg"
  },
  {
    name: "Taiwan", 
    country: "Taiwan",
    size: "large",
    image: "https://user-images.githubusercontent.com/123484377/235378312-9b95b0c9-8c5e-4b7b-b7be-c1ffd7dfc8ab.jpg"
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
    // add country
    let country = document.createElement('h4')
    country.textContent = results[i].country // China
    // add island size
    let size = document.createElement('p')
    size.classList.add(results[i].size)
    size.textContent = results[i].size

    // add island image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(country)
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

