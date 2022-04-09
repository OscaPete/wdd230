const requestURL='https://oscapete.github.io/wdd230/templedata.json';

const shops=document.querySelector('.shops');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    temples= jsonObject['temples'];
    temples.forEach(displayTemples);
  });



function displayTemples(comp){
  let templ=document.createElement('section');
  let img=document.createElement('img');
  let h2=document.createElement('h2');
  let adress=document.createElement('p');
  let phone=document.createElement('p');
  let page=document.createElement('a');

  img.setAttribute('src', comp.img);
  img.setAttribute('alt', comp.name);
  img.setAttribute('width', 100);
  img.setAttribute('height', 100);

  h2.textContent=comp.name;
  adress.textContent=comp.address;
  phone.textContent=comp.phone;

  page.textContent=comp.site;
  page.setAttribute('href', comp.site);

  templ.appendChild(img);
  templ.appendChild(h2);
  templ.appendChild(adress);
  templ.appendChild(phone);
  templ.appendChild(page);


  shops.appendChild(templ);
  
}



function resize() {
  if (window.innerWidth > 559 && window.innerWidth < 1028) {
    onOff.setAttribute("class", "list");
  } else {
    onOff.setAttribute("class", "grid");
  }
}
resize();
window.onresize = resize;

