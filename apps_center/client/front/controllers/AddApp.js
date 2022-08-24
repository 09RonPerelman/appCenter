const addItemToTheList = (data) => {
  localStorage.setItem(
    "applications",
    JSON.stringify(
      JSON.parse(localStorage.getItem("applications")).concat(data)
    )
  );
};


const getNextId = () => {
  let id = localStorage.getItem("id");
  localStorage.setItem("id", ++id);

  return id;
};

document.addEventListener("DOMContentLoaded", () => {
 
});

// function createNewApp() {
//   return newApp = 
//     {
//       name: document.getElementById("name").value,
//       price: document.getElementById("price").value,
//       companyName: document.getElementById("companyName").value,
//       desc: document.getElementById("description").value,
//       imageUrl: document.getElementById("imageUrl").value,
//       id: getNextId(),
//     }
  

// }



const putNewApp = () => {
createApp()
}
function navigation() {
  window.location.href="index.html";
}

const createApp = async() => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    companyName: document.getElementById("companyName").value,
    desc: document.getElementById("description").value,
    imageUrl: document.getElementById("imageUrl").value,
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

try{
  
const res = await fetch("http://localhost:3000/api/applications", requestOptions)
const data =await res.json();
return data
}
catch{
 error => console.log('error', error);
}
}

