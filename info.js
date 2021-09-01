function dodo() {
    let aws = window.location.href;
    // window.location.href ="info.html";
    let cake = aws.split("?");
    let sami = cake[1];
    // console.log(sami);
    let miss = "https://rickandmortyapi.com/api/character/" + sami;
    // console.log(typeof miss);
    let inin = "";

    let jsondata;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch(miss, requestOptions)
        .then(response => response.text())
        .then(result => {
            jsondata = JSON.parse(result);
            console.log("data", jsondata)

            inin +=
                `<div class="d-flex flex-column">
                <div class="p-2"></div>
                <div class="p-2">
                <div class="card">
                    <div class="card-horizontal">
                    <div class="img-square-wrapper">
                    <img  src='${jsondata.image}' style="width:100%">
                    </div>
                        <div class=" card-body">
                            <h4 id="bottombor" class="card-title">Name: ${jsondata.name}</h4>
                            <hr>
                            <p class="card-text">Id: ${jsondata.id}</p>
                            <hr>
                            <p class="card-text">Status: ${jsondata.status}</p>
                            <hr>
                            <p class="card-text">Species: ${jsondata.species}</p>
                            <hr>
                            <p class="card-text">Gender: ${jsondata.gender}</p>
                            <hr>
                            <p class="card-text">Created: ${jsondata.created}</p>                        
                        </div>
                        </div>
                        </div>
                        </div>
                <div class="p-2"></div>
                <br>`;
            console.log(inin);
            document.getElementById("puthere").innerHTML = inin;
        })
        .catch(error => console.log('error', error));
}
