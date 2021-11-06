const url = "https://api.thecatapi.com/v1/images/search?breed_id=abys&limit=10";
fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": "99f8a8ad-3da7-4528-bc0f-de608b998f99"
  }
})
.then(resp => resp.json())
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log(error);
});

