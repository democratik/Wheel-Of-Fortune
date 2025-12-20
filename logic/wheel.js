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
  labels: ["1", "2", "3", "4", "5"],
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
  plugins: [ChartDataLabels],
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
      datalabels: {
        color: "#000000ff",
        anchor: "center",
        align: "center",
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          weight: "bold",
          size: 20,
        },
      },
    },
  },
};

(async function () {
  new Chart(document.getElementById("myChart"), {
    ...config,
  });
})();

let random = Math.random() * 3600;

function onClickWheel() {
  refs.wheel.style.transition = `transform ${3}s ease-out`;
  console.log(Math.random(0, 1));
  refs.wheel.style.transform = `rotate(${random}deg)`;
  random += Math.random() * 3600;
}

refs.wheel.addEventListener("click", onClickWheel);
