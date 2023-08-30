function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/posts", function(data, err){
        if (data) {
            for (let i = 0; i < data.length; i++) {
                let y = data[i];
                let x = posts(y);
                $("#contents").append(x);
            }
        }else{
            
            // console.log(err);
        }
    });
    function posts(data) {
        return`
        <div class="mainContent">
            <a href="#">
                <p>ETHICS</p>
                <h4>${data.title}</h4>
                <h5>${data.body}</h5>
                <h6>24 June 2023 . 6 min</h6>
                </div>
            </a>
        `
    }
});


// $.ajax({
//     type: "GET",
//     url: "https://jsonplaceholder.typicode.com/posts",
//     success: 
// })