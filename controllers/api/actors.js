const fetch = require('node-fetch');
const baseURL = process.env.SITEURL;

async function fetchData(pastedURL) {
  try {
    const apiURL = `${baseURL}${pastedURL}`;
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}: ${apiURL}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
}

module.exports = {
  actorList
};

async function actorList(req, res) {
  const pastedURL = 'http://192.168.1.160:30000/actorAPI/test-actors.json';
  const data = await fetchData(pastedURL);
  const datas = data['dbWUbHD7vlnJg7yi'];
  res.render('actors', { datas });
}
