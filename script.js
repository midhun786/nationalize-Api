let navEmpty=document.createElement('nav');
navEmpty.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-color">
<div class="container-md">
  <a class="navbar-brand" href="#">! NEW FEATURE: You can now Search By Name </a>
</div>
</nav>`
document.body.append(navEmpty);

let navBar =document.createElement('nav')
navBar.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-green">
<div class="container">
<a class="navbar-brand" href="#">
      <img src="https://img.icons8.com/color/344/nginx.png" alt="" >
    </a>
  <a class="navbar-brand text-white fw-bold" href="https://nationalize.io/">Nationalize Api</a>
  <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li class="nav-item">
        <a class="nav-link active text-white prop0  m-2 p-2 " aria-current="page" href="https://nationalize.io/use-cases"target="_blank">Use Cases</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active text-white prop0   m-2 p-2  " aria-current="page" href="https://nationalize.io/our-data"target="_blank">Our Data</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active text-white prop0  m-2 p-2  " aria-current="page" href="https://tool.genderize.io/"target="_blank">CSV Tool</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active text-white prop0  m-2 p-2 " aria-current="page" href="index1.html" target="_blank">Contact</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" id="input" placeholder="SearchBy Name" aria-label="Search">
  
      <button class="btn btn-outline-warning text-white" type="button" onclick="nationLize()">Search</button>
    </form>
  </div>
</div>
</nav>`
document.body.append(navBar);

let div1 =document.createElement('div');
        div1.innerHTML=`<table class="table">
        <thead>
        <h1 class='text-white'>Name:<mark id="mark1"></mark></h1>
          <tr>
            <th class="text-white" scope="col">S.No</th>
            <th class="text-white" scope="col">Country-ID</th>
            <th class="text-white" scope="col">probability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-white"scope="row">1</th>
            <td><span class="text-white fw-bold" id='mark2'></span></td>
            <td><span class="text-white fw-bold" id='mark3'></span></td>
          </tr>
          <tr>
            <th class="text-white" scope="row">2</th>
            <td><span class="text-white fw-bold" id='mark4'></span></td>
            <td><span class="text-white fw-bold" id='mark5'></span></td>
          </tr>
        </tbody>
      </table>`
      document.body.append(div1) 

function nationLize(){        
    async function countryFuse(){       
        let input=document.getElementById('input').value;
        let res=await fetch(`https://api.nationalize.io?name=${input}`);
        // console.log(res);
        let res1=await res.json()
        // console.log(res1);
    try{
        let a=res1.name;
        // console.log(a);
        let b=res1.country[0].country_id;
        // console.log(b);
        let c=res1.country[1].country_id;
        // console.log(c);
        let d=res1.country[0].probability;
        // console.log(d);
        let e=res1.country[1].probability;
        // console.log(e);
       let mark1=document.getElementById("mark1");
       mark1.innerHTML=`${a}`
       let mark2=document.getElementById("mark2");
       mark2.innerHTML=`${b}`
       let mark3=document.getElementById("mark3")
       mark3.innerHTML=`${d}`
       let mark4=document.getElementById("mark4");
       mark4.innerHTML=`${c}`
       let mark5=document.getElementById("mark5")
       mark5.innerHTML=`${e}`
       
    }
    catch(error){         
        alert("please Enter valid name: Michael, Matthew, Jone, sheik");
        
        console.log(error);

    }
}
    countryFuse(); 
}

