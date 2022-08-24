const express = require("express");
const shortid = require("shortid");
const cors = require("cors");
const PORT = 3000;

const { getApps, getAppById,createNewApp, deleteAppById, fillCompanyName, fillDescription, fillimageurl} = require("./query");

const app = express();
app.use(express.json());
app.use(cors());

//get all apps
app.get("/api/applications", async (req, res) => {
  const apps = await getApps();

  if (!apps || !apps.length) {
    res.status(404).send(`applications do not exist`);
  } else {
    res.send(apps);
  }
});

//get specific app id
app.get("/api/applications/:id", async (req, res) => {
  const appId = req.params.id;
  const requestedApp = await getAppById(appId);

  if (!requestedApp) {
    res.status(404).send(`app ${appId} not found`);
  } else {
    res.send(requestedApp);
  }
});


//create app
app.post("/api/applications", async (req, res) => {
  const apps = await getApps();
 
  const newApp = {
    id: shortid.generate(),
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    description: req.body.description,
    companyName: req.body.companyName,
  };
  createNewApp(newApp);
  res.send(apps);
});

// delete app by id
app.delete("/api/applications/:id", async (req, res) => {
  const appId = req.params.id;
  const apps = await getApps();
deleteAppById(appId);
res.send(apps);
});


//fill udefined
app.put("/api/applications/fillcomp", async (req, res) => {
  const apps = await getApps();
fillCompanyName(apps)
res.send(apps);
});

app.put("/api/applications/filldesc", async (req, res) => {
  const apps = await getApps();
fillDescription(apps)
res.send(apps);
});

app.put("/api/applications/fillimageurl", async (req, res) => {
  const apps = await getApps();
fillimageurl(apps)
res.send(apps);
});

//connect to port
app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("Server listening on Port", PORT);
});
