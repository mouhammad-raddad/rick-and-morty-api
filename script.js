let jsondata;
let inme = "";
function rama() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch("https://rickandmortyapi.com/api/character", requestOptions)
        .then(response => response.text())
        .then(result => {
            jsondata = JSON.parse(result);
            console.log("data", jsondata.results)
            for (let i = 0; i < jsondata.results.length; i++) {
                inme += jsondata.results[i].name + "<br>";
            }
            document.getElementById("show").innerHTML = inme;
        })
        .catch(error => console.log('error', error));

}
