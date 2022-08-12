var data={};
const xhr = new  XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09',true);

//      loading (page data)
xhr.onprogress= function(){
    document.getElementById("blogs").innerHTML= "<h5>Loading...</h5>";
}

// loading data

xhr.onload = function (){
    if(xhr.status==200){
        data= JSON.parse(this.responseText);                
        let output="";
        
        for(var i=0;i<data.length-2;i+=10){
            output+="<div class=' card m-3 ' id='card'><div class=' d-flex justify-content-between  p-3 w-100' id='header'><div class='d-flex'><i class='me-2 fa-solid fa-2x fa-user-ninja'></i><div class='me-3' id='username'> Username"+data[i].userId+ "</div><button class='button border border-0'>Following</button></div><div class='align-self-end' id='more'>...</div></div><div id='postbody'><div class='p-3' id='title'><h5>" + data[i].title + "</h5></div><div class=' ms-3 text-secondary' id='date'>20 May,2020</div><div class='p-3' id='body'>"+ data[i].body+ " "+ data[i].body+ " "+ data[i].body+ " "+ data[i].body+ " "+ data[i].body+ " "+ data[i].body+ " " + data[i].body+ "</div></div></div>"
        }

        document.getElementById("blogs").innerHTML= output;
    }
}





xhr.send();


