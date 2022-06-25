let locations = document.querySelector(".locations");
let markersArray = [];

// Utility function to delay going to the next place when looping through markers/places
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function createPlacesElements() {
  for (let i = 0; i < places.length; i++) {
    let pBlock = document.createElement("div");
    let pBlockText = document.createTextNode(placeNames[i].description);
    pBlock.setAttribute("class", "placesDivs");
    pBlock.appendChild(pBlockText);
    locations.appendChild(pBlock);
  }
}

async function loopThroughMarkers(map) {
  for (let i = 0; i < places.length; i++) {
    // Can't remove active from previous element when no previous element at position 0.
    if (i > 0) {
      placesDivs[i - 1].classList.remove("active");
    }

    placesDivs[i].classList.add("active");

    map.setCenter(markersArray[i].getPosition());
    map.setZoom(placeNames[i].zoomLevel);

    await delay(4000);

    // To remove the active class from last element when tour is finished
    if (i == placeNames.length - 1) {
      placesDivs[i].classList.remove("active");
    }
  }
}

createPlacesElements();
let placesDivs = document.getElementsByClassName("placesDivs");

function initMap() {
  const sabadell = { lat: 41.557932, lng: 2.097225 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: sabadell,
  });

  for (let i = 0; i < places.length; i++) {
    const infowindow = new google.maps.InfoWindow({
      content: "",
    });
    const heartImg = {
      url: "imgs/like.png",
      scaledSize: new google.maps.Size(60, 60),
    };

    const marker = new google.maps.Marker({
      position: places[i],
      map: map,
      label: "Te Amo!",
      icon: heartImg,
      animation: google.maps.Animation.DROP,
    });

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    // To get position of current marker when looping through markers for the tour
    markersArray.push(marker);
    infowindow.setContent(placeNames[i].infoContent);

    marker.addListener("click", toggleBounce);
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map: map,
        shouldFocus: false,
      });
    });
  }

  // map is passed as an argument to place the array outside of the main initMap function.
  loopThroughMarkers(map);

  // to remember the last set position on places dive in order to remove it when user clicks a new one
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
