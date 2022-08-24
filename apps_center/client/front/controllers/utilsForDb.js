
const loadApps = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
  
    try {
  
        const res = await fetch("http://localhost:3000/api/applications", requestOptions)
        const data = await res.json();
       render(data)
    }
    catch {
        error => console.log('error', error);
    }
  }
  
  const loadSpecificApp = (id) => {
  
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:3000/api/applications/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
  }
  
  const deleteApp = async(id) => {
      var raw = "";
  
      var requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
      };
  
      try{
          
          const res = await fetch(`http://localhost:3000/api/applications/:${id}`, requestOptions)
          const data =await res.json();
          render(data)
       }
       catch{
         error => console.log('error', error);
       }
      
  }
  
   
  


  module.exports ={
    loadApps,
    loadSpecificApp,
    deleteApp,
  }