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
                inin +=
                    `<div class="d-flex flex-column">

                <div class="p-2"></div>

                <div class="p-2">
                <div class="card">
                    <div class="card-horizontal">
                    <div class="img-square-wrapper">
                    <img  src='${jsondata.results[i].image}' style="width:100%">
                    </div>
                        <div class=" card-body">
                            <h4 id="bottombor" class="card-title">${jsondata.results[i].name}</h4>
                            <hr>
                            <p class="card-text">${jsondata.results[i].species}</p>
                        </div>

                        </div>

                        </div>
                        </div>
                <div class="p-2"></div>
                <br>`;

                
                






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
                            document.getElementById("puthere").innerHTML = inin;
                            // document.body.innerHTML = inin;
                            })
                            .catch(error => console.log('error', error));

                            }
