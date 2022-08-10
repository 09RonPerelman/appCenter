const getData = () => {
  if (localStorage.getItem("applications") == null) {
    localStorage.setItem("applications", JSON.stringify(applications));
    localStorage.setItem("id", id);
  }

  return JSON.parse(localStorage.getItem("applications"));
};

document.addEventListener("DOMContentLoaded", () => {});

window.onload = () => {
  render(applications);
  document.getElementById("Search").addEventListener("keydown", (event) => {
   (document.getElementById('Search').value.length == 0) ? search(event.key) : render(applications);
  });
};
const apps = document.querySelector(".productHolder");

function createCard(app) {
  let code = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="images/${app.id}/${app.imageUrl}" class="img-fluid rounded-start" alt="${app.imageUrl}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${app.name}</h5>
        <p class="card-text">${app.desc}</p>
        <p class="card-text">${app.price}</p>
        <p class="card-text">${app.companyName}</p>
      </div>
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
function search(filter) {
  const filteredData = applications.filter(
    (app) => app.name.indexOf(filter) !== -1
  );
  render(filteredData);
}
