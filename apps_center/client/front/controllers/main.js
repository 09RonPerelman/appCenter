const loadApps = async () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "http://localhost:3000/api/applications",
      requestOptions
    );
    const data = await res.json();
    render(data);
  } catch {
    (error) => console.log("error", error);
  }
};

const loadSpecificApp = (id) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`http://localhost:3000/api/applications/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

const deleteApp = async (id) => {
  var raw = "";

  var requestOptions = {
    method: "DELETE",
    body: raw,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      `http://localhost:3000/api/applications/:${id}`,
      requestOptions
    );
    const data = await res.json();
    render(data);
  } catch {
    (error) => console.log("error", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadApp = loadApps();
});

const apps = document.querySelector("#productHolder");

function createCard(app) {
  fillTheVoid(app);
  let code = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../assets/images/${app.imageUrl}" class="img-fluid rounded-start" alt="${app.imageUrl}">
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h5 class="card-title">${app.name}</h5>
        <p class="card-text">${app.description}</p>
        <p class="card-text">${app.price}</p>
        <p class="card-text">${app.companyname}</p>
        <p class="card-text">${app.createat}</p>
      </div>
    </div>
    <div class="col-md-4">
    <button type="button" class="bg-danger" id= "${app.id}" onclick="deleteApp(this.id)">to delete</button>
    </div>
  </div>
</div>`;
  apps.innerHTML += code;
}

const render = (applications) => {
  apps.innerHTML = "";
  applications.forEach((element) => {
    createCard(element);
  });
};

function search() {
  let filter = document.querySelector("#Search");
  searchName(filter);
}

function navigation() {
  window.location.href = "addAplication.html";
}

function fillTheVoid(app) {
 fillDescription(app)
 fillcompanyname(app)
fillimageurl(app)
return app
}

const fillcompanyname = () => {
  var requestOptions = {
    method: "PUT",
    redirect: "follow",
  };

  fetch("http://localhost:3000/api/applications/fillcomp", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const fillDescription = () => {
  var requestOptions = {
    method: "PUT",
    redirect: "follow",
  };

  fetch("http://localhost:3000/api/applications/filldesc", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const fillimageurl = () => {
  var requestOptions = {
    method: "PUT",
    redirect: "follow",
  };

  fetch("http://localhost:3000/api/applications/fillimageurl", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
