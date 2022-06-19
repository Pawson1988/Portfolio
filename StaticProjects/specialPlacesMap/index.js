let locations = document.querySelector(".locations");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const places = [
  { lat: 41.557932, lng: 2.097225 },
  { lat: 41.55744, lng: 2.095479 },
  { lat: 41.559732, lng: 2.097655 },
  { lat: 41.543523, lng: 2.114452 },
  { lat: 41.551974, lng: 2.106328 },
  { lat: 53.562548, lng: -0.084477 },
  { lat: -23.163052, lng: -47.7300251 },
  { lat: 41.2359192, lng: 1.7859531 },
];

const placeNames = [
  {
    description: "Where we first met",
    zoomLevel: 16,
    infoContent:
      "This is the place where we first met so we could do classes but we fell in love instead",
  },
  {
    description: "Where I lived when we first met",
    zoomLevel: 16,
    infoContent:
      "This is the first place I lived in Sabadell, It's also where I lived when I first met you",
  },
  {
    description: "Where we first lived together",
    zoomLevel: 16,
    infoContent:
      "This wasn't our own place but it's where we lived together for the first time",
  },
  {
    description: "Our home",
    zoomLevel: 16,
    infoContent:
      "This place is small but cozy, we've lived here for about 5 years together and still going strong",
  },
  {
    description: "Where we mostly eat",
    zoomLevel: 16,
    infoContent:
      "A familiar place where we go regularly to eat and to get a drink",
  },
  {
    description: "Where you first met my mum",
    zoomLevel: 12,
    infoContent:
      "This was where you first met my mum when we went to England together for the first time",
  },
  {
    description: "Where I first met your family",
    zoomLevel: 12,
    infoContent:
      "The first time I met your family when I went to Cerquilho the first time",
  },
  {
    description: "Your favourite place in the world!",
    zoomLevel: 13,
    infoContent: "This is the place you wanna live most in the entire world!",
  },
];

function createPlacesElements() {
  for (let i = 0; i < places.length; i++) {
    let pBlock = document.createElement("div");
    let pBlockText = document.createTextNode(placeNames[i].description);
    pBlock.setAttribute("class", "placesDivs");
    pBlock.appendChild(pBlockText);
    locations.appendChild(pBlock);
  }
}

createPlacesElements();
let placesDivs = document.getElementsByClassName("placesDivs");
console.log(placesDivs);

function initMap() {
  alert("Don't press anything until the journey on the map as stopped");

  async function loopThroughMarkers() {
    let idx = 0;
    for (const place of places) {
      if (idx > 0) {
        placesDivs[idx - 1].classList.remove("active");
      }
      placesDivs[idx].classList.add("active");
      map.panTo(place);
      map.setZoom(placeNames[idx].zoomLevel);
      await delay(4000);
      if (idx == placeNames.length - 1) {
        placesDivs[idx].classList.remove("active");
      }
      idx++;
    }
  }

  const sabadell = { lat: 41.557932, lng: 2.097225 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: sabadell,
  });

  const infowindow = new google.maps.InfoWindow({
    content: "This is one of our special places",
  });

  for (let i = 0; i < places.length; i++) {
    const marker = new google.maps.Marker({
      position: places[i],
      map: map,
    });

    marker.addListener("click", () => {
      infowindow.setContent(placeNames[i].infoContent);
      infowindow.open({
        anchor: marker,
        map: map,
        shouldFocus: false,
      });
    });
  }

  loopThroughMarkers();

  let last = 0;
  for (let i = 0; i < placesDivs.length; i++) {
    placesDivs[i].addEventListener("click", function (e) {
      map.panTo(places[i]);
      map.setZoom(placeNames[i].zoomLevel);
      placesDivs[last].classList.remove("active");
      placesDivs[i].classList.add("active");
      last = i;
    });
  }
}

window.initMap = initMap;
