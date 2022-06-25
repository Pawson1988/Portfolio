//  lat?lng for placing of markers
const places = [
  { lat: 41.557932, lng: 2.097225 },
  { lat: 41.55744, lng: 2.095479 },
  { lat: 41.559732, lng: 2.097655 },
  { lat: 41.543523, lng: 2.114452 },
  { lat: 41.551974, lng: 2.106328 },
  { lat: 53.562548, lng: -0.084477 },
  { lat: -23.163052, lng: -47.7300251 },
  { lat: 41.2359192, lng: 1.7859531 },
  { lat: 40.78306, lng: -73.971249 },
  { lat: 32.776664, lng: -96.796988 },
];

// info content for content in infowindow
const infoContentStrings = [
  "This is the place where we first met so we could do classes but we fell in love instead",
  "This is the first place I live d in Sabadell, It's also where I lived when I first met you",
  "This wasn't our own place but it's where we lived together for the first time",
  "This place is small but cozy, we've lived here for about 5 years together and still going strong",
  "A familiar place where we go regularly to eat and to get a drink",
  "This was where you first met my mum when we went to England together for the first time",
  "The first time I met your family when I went to Cerquilho the first time",
  "This is the place you wanna live most in the entire world!",
  "When we went to Manhattan together",
  "When we went to Dallas together",
];

// images for the infowindows
const infoContentImages = [
  "imgs/first_place_met.png",
  "imgs/first_place_lived.png",
  "imgs/first_place_lived_together.png",
  "imgs/home.png",
  "imgs/home.png",
  "imgs/home.png",
  "imgs/home.png",
  "imgs/home.png",
  "imgs/home.png",
  "imgs/home.png",
];

// infoContentStrings and infoContentImages generator
let infoContents = [];
// Loop used so as not to repeat. cards for infowindows
for (let i = 0; i < infoContentStrings.length; i++) {
  infoContents.push(
    '<div class="card-container">' +
      '<p class="card-paragraph">' +
      infoContentStrings[i] +
      "<p>" +
      '<div class="card-img-container">' +
      '<img class="card-img" src=' +
      infoContentImages[i] +
      ">" +
      "</div>" +
      "</div>"
  );
}

// object for places elements, zoom levels for focusing when clicking through or on the tour
// infoContents for the infowindows.
const placeNames = [
  {
    description: "Where we first met",
    zoomLevel: 18,
    infoContent: infoContents[0],
  },
  {
    description: "Where I lived when we first met",
    zoomLevel: 18,
    infoContent: infoContents[1],
  },
  {
    description: "Where we first lived together",
    zoomLevel: 18,
    infoContent: infoContents[2],
  },
  {
    description: "Our home",
    zoomLevel: 16,
    infoContent: infoContents[3],
  },
  {
    description: "Where we mostly eat",
    zoomLevel: 16,
    infoContent: infoContents[4],
  },
  {
    description: "Where you first met my mum",
    zoomLevel: 12,
    infoContent: infoContents[5],
  },
  {
    description: "Where I first met your family",
    zoomLevel: 12,
    infoContent: infoContents[6],
  },
  {
    description: "Your favourite place in the world!",
    zoomLevel: 13,
    infoContent: infoContents[7],
  },
  {
    description: "Stopover in New York",
    zoomLevel: 7,
    infoContent: infoContents[8],
  },
  {
    description: "Stopover in Dallas",
    zoomLevel: 7,
    infoContent: infoContents[9],
  },
];
