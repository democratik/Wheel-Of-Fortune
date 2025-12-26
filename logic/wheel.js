const refs = {
  wheel: document.querySelector(".wheel"),
  message: document.querySelector(".massage-on-wheel"),
  arrow: document.querySelector(".arrow"),
};

const MAX_ROUNDS = 3600;

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

let random = 0;

function onWheelClick() {
  const randomDeg =
    Math.random() * (MAX_ROUNDS - (MAX_ROUNDS - 360)) + (MAX_ROUNDS - 360);
  refs.wheel.style.transition = `transform ${5}s cubic-bezier(.42,0,.58,1)`;
  console.log(`random -`, random % 360);
  refs.wheel.style.transform = `rotate(-${randomDeg}deg)`;
  showResult(data.labels.length, randomDeg % 360, random % 360);
  random += randomDeg + 3600;
  console.log(`random -`, random % 360, `randomDeg -`, (randomDeg % 360) + 38);
}

refs.wheel.addEventListener("click", onWheelClick);

function showResult(sectorCounts, deg, startPosition) {
  let sectorSize = 360 / sectorCounts;
  console.log(sectorSize);
  console.log(startPosition);

  if (deg >= 38 && deg < sectorSize + 38) {
    console.log("first sector");
  }
  console.log(deg);
}
