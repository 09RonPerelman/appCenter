const addItemToTheList = (data) => {
  localStorage.setItem(
    "applications",
    JSON.stringify(
      JSON.parse(localStorage.getItem("applications")).concat(data)
    )
  );
};

const inputName = document.getElementById("function_code_name");
const inputNumber = document.getElementById("function_code_number");
const error = document.getElementById('error');
const patternForName = /^[a-zA-Z0-9]+$/;
const patternForNumber = /^([0-9])/;
 

let numberVal =inputNumber.addEventListener('input', (e) => {
    const value = e.target.value;
  
    if (patternForNumber.test(value)) {
        error.textContent = '';
        return true;
      
    } else {
        inputNumber.value = value.slice(0, value.length - 1);
        error.textContent = 'please enter valid input';
    }
  });


const getNextId = () => {
  let id = localStorage.getItem("id");
  localStorage.setItem("id", ++id);

  return id;
};

document.addEventListener("DOMContentLoaded", () => {});

function checkForm(company, url, description,error)
{

  const reDate = /^.{300}$/;
  const reTime = /^.{30}$/;
  const reNumber = /^.{500}$/;

  if( !url.match(reDate)|| !company.match(reTime) || !description.match(reNumber)) {
    error.textContent = 'please enter valid input';
    return false;
  }
  return true;
}

  

 let nameVal = inputName.addEventListener('input', (e) => {
    const value = e.target.value;
  
    if (patternForName.test(value)) {
        error.textContent = '';
        return true;
    } else {
        inputName.value = value.slice(0, value.length - 1);
        error.textContent = 'please enter valid input';
        
     
    }
  });

 

  
function createNewApp() {
  const desc = "this company dont have desc"
 const  companyName = "this app dont have company"
  const newApp = 
    {
      name: document.getElementById("function_code_name").value,
      price: document.getElementById("function_code_number").value,
      companyName: document.getElementById("companyName").value,
      desc: document.getElementById("description").value,
      imageUrl: document.getElementById("imageUrl").value,
      id: getNextId
    };

    checkForm(newApp.companyName,newApp.imageUrl,newApp.desc,error);

    if(newApp.desc === ""){
        newApp.desc = desc;
        return true
    }
    if(newApp.companyName === ""){
        newApp.companyName = companyName;
        return true;
    }
    if(nameVal === true && numberVal === true){
      addItemToTheList((newApp))
    }

}
