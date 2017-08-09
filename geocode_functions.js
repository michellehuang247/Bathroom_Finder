// call geocode
geocode();
function geocode() {
  var location= "22 Main St Boston MA";
  axios.get("https://maps.googleapis.com/maps/api/geocode/json?",{
    params:{
      address:location,
      key: "AIzaSyD9epHHRzP_GKGagtgEBzD939TnTgGq1R4"
    }
  })
  .then(function(response){
    // log full response
    console.log(response);

    //formatted address
    var formattedAddress =response.data.results[0].formatted_address;
    var formattedAddressOutput = `

    `;
  })
  .catch(function(error){
    console.log(error);
  });
}
