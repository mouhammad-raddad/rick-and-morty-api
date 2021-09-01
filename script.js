
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
let cpage;
let spage;
let xpage;
let gg = "";
let y;


function rama(www) {
    let jsondata;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch("https://rickandmortyapi.com/api/character/?page=3", requestOptions)
        .then(response => response.text())
        .then(result => {
            jsondata = JSON.parse(result);
            // console.log("data", jsondata)
            for (let i = 0; i < jsondata.results.length; i++) {
                y = i + 1;
                inin +=
                    `<div class="d-flex flex-column">
                <div class="p-2"></div>
                <div class="p-2">
                <div class="card">
                <a href="info.html?${jsondata.results[i].id}" target="_blank">
                    <div class="card-horizontal">
                    <div class="img-square-wrapper">
                    <img  src='${jsondata.results[i].image}' style="width:100%">
                    </div>
                        <div class=" card-body">
                            <h4 id="bottombor" class="card-title">${jsondata.results[i].name}</h4>
                            <hr>
                            <p class="card-text">${jsondata.results[i].species}</p>
                            </a>
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
            // console.log(inin);
            document.getElementById("puthere").innerHTML = inin;
            // document.body.innerHTML = inin;
        })
        .catch(error => console.log('error', error));
}
let curr;

function page(kk) {
    let one = 1;
    let two = 2;
    let three = 3;
    let four = 4;

    if (Number(document.getElementById("a").textContent) <= 0)
        document.getElementById("aa").style.visibility = "hidden";
    else
        document.getElementById("aa").style.visibility = "visible";

    if (Number(document.getElementById("b").textContent) <= 0)
        document.getElementById("bb").style.visibility = "hidden";
    else
        document.getElementById("bb").style.visibility = "visible";

    if (Number(document.getElementById("d").textContent) >= 35)
        document.getElementById("dd").style.visibility = "hidden";
    else
        document.getElementById("dd").style.visibility = "visible";

    if (Number(document.getElementById("e").textContent) >= 35)
        document.getElementById("ee").style.visibility = "hidden";
    else
        document.getElementById("ee").style.visibility = "visible";

    if (kk == 1) {
        // curr = Number(document.getElementById("a").value);
        curr = Number(document.getElementById("a").textContent);
        if (curr <= 0) {
            return;
        }
        if (curr >= 35) {
            return;
        }
        document.getElementById("a").innerHTML = curr - two;
        document.getElementById("b").innerHTML = curr - one;
        document.getElementById("c").innerHTML = curr;
        document.getElementById("d").innerHTML = curr + one;
        document.getElementById("e").innerHTML = curr + two;
    }
    if (kk == 2) {
        curr = Number(document.getElementById("b").textContent);
        if (curr <= 0) {
            return;
        }
        if (curr >= 35) {
            return;
        }
        document.getElementById("a").innerHTML = curr - two;
        document.getElementById("b").innerHTML = curr - one;
        document.getElementById("c").innerHTML = curr;
        document.getElementById("d").innerHTML = curr + one;
        document.getElementById("e").innerHTML = curr + two;
    }
    if (kk == 3) {
        curr = Number(document.getElementById("c").textContent);
        if (curr <= 0) {
            // document.getElementById("a").style.visibility = "hidden";
            // document.getElementById("b").style.visibility = "hidden";
            return;
        }
        if (curr >= 35) {
            return;
        }
        document.getElementById("a").innerHTML = curr - two;
        document.getElementById("b").innerHTML = curr - one;
        document.getElementById("c").innerHTML = curr;
        document.getElementById("d").innerHTML = curr + one;
        document.getElementById("e").innerHTML = curr + two;
    }
    if (kk == 4) {
        curr = Number(document.getElementById("d").textContent);
        if (curr <= 0) {
            return;
        }
        if (curr >= 35) {
            return;
        }
        document.getElementById("a").innerHTML = curr - two;
        document.getElementById("b").innerHTML = curr - one;
        document.getElementById("c").innerHTML = curr;
        document.getElementById("d").innerHTML = curr + one;
        document.getElementById("e").innerHTML = curr + two;
    }
    if (kk == 5) {
        curr = Number(document.getElementById("e").textContent);
        if (curr <= 0) {
            return;
        }
        if (curr >= 35) {
            return;
        }
        document.getElementById("a").innerHTML = curr - two;
        document.getElementById("b").innerHTML = curr - one;
        document.getElementById("c").innerHTML = curr;
        document.getElementById("d").innerHTML = curr + one;
        document.getElementById("e").innerHTML = curr + two;
    }
    if (Number(document.getElementById("a").textContent) <= 0)
        document.getElementById("aa").style.visibility = "hidden";
    else
        document.getElementById("aa").style.visibility = "visible";

    if (Number(document.getElementById("b").textContent) <= 0)
        document.getElementById("bb").style.visibility = "hidden";
    else
        document.getElementById("bb").style.visibility = "visible";

    if (Number(document.getElementById("d").textContent) >= 35)
        document.getElementById("dd").style.visibility = "hidden";
    else
        document.getElementById("dd").style.visibility = "visible";

    if (Number(document.getElementById("e").textContent) >= 35)
        document.getElementById("ee").style.visibility = "hidden";
    else
        document.getElementById("ee").style.visibility = "visible";

    gg = "https://rickandmortyapi.com/api/character/?page=" + curr.toString();

    let inin = "";
    let jsondata;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch(gg, requestOptions)
        .then(response => response.text())
        .then(result => {
            jsondata = JSON.parse(result);
            for (let i = 0; i < jsondata.results.length; i++) {
                y = i + 1;
                inin +=
                    `<div class="d-flex flex-column">
                <div class="p-2"></div>
                <div class="p-2">
                <div class="card">
                <a href="info.html?${jsondata.results[i].id}" target="_blank">
                    <div class="card-horizontal">
                    <div class="img-square-wrapper">
                    <img  src='${jsondata.results[i].image}' style="width:100%">
                    </div>
                        <div class=" card-body">
                            <h4 id="bottombor" class="card-title">${jsondata.results[i].name}</h4>
                            <hr>
                            <p class="card-text">${jsondata.results[i].species}</p>
                            </a>
                        </div>
                        </div>
                        </div>
                        </div>
                <div class="p-2"></div>
                <br>`;
            }
            document.getElementById("puthere").innerHTML = inin;
        })
        .catch(error => console.log('error', error));
}


// function final(id) {
//     console.log(id);
//     console.log("i am here");
// }



// function appendText(id) {
//     let uu=miss+id;
//     localStorage.setItem("url",uu);
// }