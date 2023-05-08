// img数据
let data = [
    {
      name: "Burton 1987 Elite Flat Top Snowboard",
      img: "./image/1.png",
      hoverImg: "./image/1_1.png",
      categories: "park",
    },
    {
      name: "Burton 1995 Kelly Air Camber Snowboard",
      img: "./image/2.png",
      hoverImg: "./image/2_2.png",
      categories: "park",
    },
    {
      name: "Burton 1996 Dolphin Camber Snowboard",
      img: "./image/3.png",
      hoverImg: "./image/3_3.png",
      categories: "park",
    },
    {
      name: "Burton 2011 Nug Rocker Snowboard",
      img: "./image/4.png",
      hoverImg: "./image/4_4.png",
      categories: "park",
    },
    {
      name: "Natural Selection Tour x Burton Family Tree Hometown Hero Snowboard",
      img: "./image/5.png",
      hoverImg: "./image/5_5.png",
      categories: "powder",
    },
    {
      name: "Burton MINE77 x Underberg Family Tree 3D Daily Driver Snowboard",
      img: "./image/6.png",
      hoverImg: "./image/6_6.png",
      categories: "powder",
    },
    {
      name: "Burton Family Tree 3D Double Dog Camber Snowboard",
      img: "./image/7.png",
      hoverImg: "./image/7_7.png",
      categories: "powder",
    },
    {
      name: "Women's Burton Hideaway Flat Top Snowboard",
      img: "./image/8.png",
      hoverImg: "./image/8_8.png",
      categories: "powder",
    },
    {
      name: "Men's Burton Ripcord Flat Top Snowboard",
      img: "./image/9.png",
      hoverImg: "./image/9_9.png",
      categories: "splitboards",
    },
    {
      name: "Burton Good Company Camber Snowboard",
      img: "./image/10.png",
      hoverImg: "./image/10_10.png",
      categories: "splitboards",
    },
    {
      name: "Burton Blossom Camber Snowboard",
      img: "./image/11.png",
      hoverImg: "./image/11_11.png",
      categories: "splitboards",
    },
    {
      name: "Men's Burton Process Camber Snowboard",
      img: "./image/12.png",
      hoverImg: "./image/12_12.png",
      categories: "splitboards",
    },
  ];
  const imgContainer = document.getElementById("imgContainer");
  let currentCategories = [];
  let html = [];
  addCategories("park");
  handleImg();
  
  // 处理图片
  function handleImg() {
    html = [];
    for (let i = 0; i < data.length; i++) {
      if (
        currentCategories.includes(data[i].categories) ||
        currentCategories.includes("all")
      ) {
        html.push(`<li class="product-image-wrap">
                <a href="javascript:void(0)">
                  <img class="img" src="${data[i].img}" alt="" />
                  <img class="imghover" src="${data[i].hoverImg}" alt="" />
                </a>
                <div class="margin-bottom">${data[i].name}</div>
              </li>`);
      }
    }
    imgContainer.innerHTML = html.join("");
  }
  //  处理选项
  function addCategories(param) {
    if (currentCategories.includes(param)) {
      const index = currentCategories.indexOf(param);
      if (index > -1) {
        currentCategories.splice(index, 1);
      }
      document
        .getElementById(param)
        .querySelector(".checkbox")
        .classList.remove("active");
    } else {
      currentCategories.push(param);
      document
        .getElementById(param)
        .querySelector(".checkbox")
        .classList.add("active");
    }
  
    handleImg();
  }
  