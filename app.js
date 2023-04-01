//Endpoint
//https://random-data-api.com/api/v2/banks

// create  elements
const btnEl = document.querySelector(".btn");
const outputEl = document.querySelector(".output");

//Endpoint
const API = "https://random-data-api.com/api/v2/banks";

// fetched data
//let dataApi = [];

// fetch data
const fetchData = async () => {
  try {
    const response = await fetch(API);
  const data = await response.json();
  //dataApi.push(data);
  //console.log(data);
  renderData(data);
  } catch(error) {
    console.log('Error occured: ', error)
  }
  
};

// display data
const renderData = (data) => {
  //data = Object.keys(data);
  console.log(data)
  const renderItem = data.map((item) => 
    `<ul>
        <li>Bank Name: ${item.bank_name}</li>
        <li>ID: ${item.id}</li>
        <li>IBAN: ${item.iban}</li>
        <li>Account: ${item.account_number}</li>
    </ul>`)
    .join('');
  outputEl.innerHTML = renderItem;
};


btnEl.addEventListener('click', fetchData)

//TODO
//fix renderData map to array
