// Google API Key
var googleApikey = "AIzaSyCQwhxC1XQdwl0B2Aqpb5S6fQCpXOvC0W8";

//create map, center location is Charlotte, NC
function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.2, lng: -80.8 },
    zoom: 13,
    mapTypeId: "roadmap",
  });

  //create search input, style search box
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  //keep search results in maps viewport
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  //add markers find locations of search
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("error");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(25, 25),
      };

      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.fitBounds(bounds);
  });
}
let button = document.querySelector("#getData")
button.addEventListener("click",()=>{
  sendApiRequest()
})

async function sendApiRequest() {
  let response = await fetch ('https://api.giphy.com/v1/gifs/search?api_key=aRJiBw9KBylnizzRDi7jLTqIICme2cX3&q=coffee')
  console.log(response)
  let gifs = await response.json()
  console.log(gifs)
  useApiData(gifs)
};

function useApiData(gifs){
  document.querySelector("#wrapper").innerHTML = `<img src = "${gifs.data[0].images.original.url}">`

}