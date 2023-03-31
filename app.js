//Endpoint
//https://random-data-api.com/api/v2/banks

// create  elements
const btnEl = document.querySelector(".btn");
const outputEl = document.querySelector(".output");

//Endpoint
const API = "https://random-data-api.com/api/v2/banks";

// fetched data
let dataApi = [];

// fetch data
const fetchData = async () => {
  const response = await fetch(API);
  const data = await response.json();
  dataApi.push(data);
  console.log(dataApi);
  renderData(dataApi);
};

// display data
const renderData = (d) => {
  const renderItem = d.map((item) => {
    `<ul>
        <li>Bank Name: ${item.bank_name}</li>
        <li>ID: ${item.id}</li>
        <li>IBAN: ${item.iban}</li>
        <li>Account: ${item.account_number}</li>
    </ul>`;
  });
  outputEl.innerHTML = renderItem;
};

fetchData();

