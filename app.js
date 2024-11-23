
var username ;
var title ;
var desc ;
var background ;
function bgsel(src) {
    var bg = document.getElementsByClassName("bg")
    for(var i = 0 ; i < bg.length ; i++ ){
        bg[i].className = "bg"
    }
    event.target.classList.add("selected")
    background = src
}

function post(){
    var date = new Date().toUTCString()
    username = document.getElementById("name")
    title = document.getElementById("title")
    desc = document.getElementById("desc")
    if(username.value.trim() !== ""){
        if(title.value.trim() !== ""){
            if(desc.value.trim() !== ""){
                var posting = document.getElementById("main-col2").innerHTML +=
                ` <div style="background-image: url('${background}')" class="card2 mb-4 " id="card2">
                 <div class="first d-flex  mt-1 mb-2">
                        <div class="username"><h5>~${username.value}~</h5></div>
                        
                    </div>
                    <div class="second title">
                        <h6>${title.value}</h6>
                    </div>
                    <div class="third">
                        <p class="desc"> ${desc.value}</p>
                    </div>
                    <div class="fourth text-center">
                        <p class="date"> ${date}</p>
                    </div>
                    </div>`
                    username.value = ""
                    title.value = ""
                    desc.value = ""
                    background = ""
            } else {
                Swal.fire("Please enter a description");
            }
        } else {
            Swal.fire("Please enter a title");
        }
    } else{
        Swal.fire("Please enter a name");
    }
}

