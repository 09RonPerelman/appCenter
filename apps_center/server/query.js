
const { getData } = require("./database.js");

async function getApps() {
  const apps = await getData("SELECT * FROM applications");
  return apps.rows;
}

async function getAppById(id) {
  const app = await getData(`SELECT * FROM applications WHERE id = '${id}'`);
  return app.rows[0];
}




async function createNewApp(newApp) {
  let date = getdate();
  const app =
    await getData(`INSERT INTO applications (price, id, imageUrl, name, companyName, description, createAt)
  VALUES (${newApp.price}, '${newApp.id}',  '${newApp.imageUrl}' , '${
      newApp.name
    }', '${newApp.companyName}', '${
      newApp.description
    }', TO_DATE('${date}', 'YYYY/MM/DD'))`);
  return app;
}

async function deleteAppById(id) {
    const app = await getData(`DELETE FROM applications WHERE id = '${id}'`);
    return app;
  }

  async function fillimageurl(app) {
    app = await getData(`UPDATE applications
    SET imageurl = 'Help.png'
    WHERE imageurl = 'undefined'`);
    return app;
  }
  async function fillCompanyName(app) {
   app = await getData(`UPDATE applications
    SET companyname = 'this app dont have company name'
    WHERE companyname = 'undefined'`);
    return app;
  }
  async function fillDescription(app) {
    app = await getData(`UPDATE applications
    SET description = 'this app dont have description'
    WHERE description = 'undefined'`);
    return app;
  }


module.exports = {
  getApps,
  getAppById,
  createNewApp,
  deleteAppById,

  fillimageurl,
  fillCompanyName,
  fillDescription
};

let getdate = () => {
  date = new Date();
  date =
    date.getUTCFullYear() +
    "/" +
    ("00" + (date.getUTCMonth() + 1)).slice(-2) +
    "/" +
    ("00" + date.getUTCDate()).slice(-2)
 return date;
};
