// import Chart from "chart.js/auto";

const refs = {
  wheel: document.querySelector(".wheel"),
  message: document.querySelector(".massage-on-wheel"),
};

function textOnWheel() {
  refs.message.style.display = "none";
}
refs.wheel.addEventListener("click", textOnWheel);

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const data = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 1, 1, 1, 1],
      backgroundColor: ["red", "orange", "yellow", "green", "violet "],
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Pie Chart",
      },
      tooltip: {
        enabled: false,
      },
    },
  },
};

(async function () {
  new Chart(document.getElementById("myChart"), {
    ...config,
  });
})();

console.log(Chart);
