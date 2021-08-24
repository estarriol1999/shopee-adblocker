console.log("fuck");

function getAdList(){
  let time = 0;
  return new Promise((resolve, reject) => {
    const fetchInterval = setInterval(() => {
      let adList = document.querySelectorAll("[data-sqe='ad']");
      console.log(time);
      console.log(adList);
      if(adList.length !== 0){
        clearInterval(fetchInterval);
        resolve(adList);
      }
      if(time > 50){
        clearInterval(fetchInterval);
        reject(adList);
      }
      time += 1;
    }, 100);
  });
}

getAdList()
  .then(adList => {
    adList.forEach((item) => {
      let ad = item.closest(".shopee-search-item-result__item");
      ad.remove();
    })
  })
  .catch(adList => {
    console.log("Cannot find ADs");
  })

