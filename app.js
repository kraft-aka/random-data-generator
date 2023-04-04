// create  elements
const btnEl = document.querySelector(".btn");
const outputEl = document.querySelector(".output");
const emojiEl = document.querySelector(".emoji");

//Endpoint
const API = "https://random-data-api.com/api/v2/banks";

// fetched data
let dataApi;

// fetch data
const fetchData = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    // store data to variable
    dataApi = data;
    renderData(dataApi);
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

// display data
const renderData = (d) => {
  // converting object data type to array
  d = [d];
  const renderItem = d
    .map(
      (item) =>
        `<ul>
        <li>Bank Name: ${item.bank_name}</li>
        <li>ID: ${item.id}</li>
        <li>IBAN: ${item.iban}</li>
        <li>Account: ${item.account_number}</li>
    </ul>`
    )
    .join("");
  outputEl.innerHTML = renderItem;
};

// renders emoji
const showEmoji = () => {
  const emojiArr = [
    "✌",
    "😂",
    "😝",
    "😁",
    "😱",
    "👉",
    "🙌",
    "😡",
    "👿",
    "👌",
    "😍",
    "😉",
    "😓",
    "😳",
    "💪",
    "💩",
  ];
  // defines ranodm number to pass it as index to array
  let index = Math.floor(Math.random() * emojiArr.length);
  emojiEl.innerHTML = emojiArr[index];
};

// changes the background color on click
const changeBgColor = () => {
  const colors = [
    "#B565A7",
    "#955251",
    "#92A8D1",
    "#F7CAC9",
    "#88B04B",
    "#6B5B95",
    "#FF6F61",
    "#34568B",
  ];
  let index = Math.floor(Math.random() * colors.length);
  const colorBg = colors[index];
  document.body.style.backgroundColor = colorBg;
};

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
  showEmoji();
  changeBgColor();
});

emojiEl.addEventListener("mouseover", () => {
  return;
});

//TODO
