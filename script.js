let jsondata;
let inme = [];
let inin = "";
let xdivstart = "<div>";
let xdivend = "</div>";
let ximgstart = "<img src='";
let ximgend = "'>"
let xh6start = "<h6>";
let xh6end = "</h6>";
let xpstart = "<p>";
let xpend = "</p>";

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
                inin += xdivstart + ximgstart + jsondata.results[i].image + ximgend
                    + xh6start + jsondata.results[i].name + xh6end + xpstart + jsondata.results[i].species + xpend;
                // inme += jsondata.results[i].name + "<br>";
                // var div = document.createElement("div");
                // inme[i] = jsondata.results[i].image
                // var img = document.createElement('img');
                // img.src = jsondata.results[i].image;
                // var textNode = document.createTextNode(jsondata.results[i].name + " ");
                // var textNode2 = document.createTextNode(jsondata.results[i].species);
                // div.appendChild(textNode);
                // div.appendChild(textNode2);
                // document.body.appendChild(img);
                // document.body.appendChild(div);


            }
            console.log(inin);


            // document.getElementById("show").innerHTML = inin;
            document.body.innerHTML = inin;
        })
        .catch(error => console.log('error', error));

}
