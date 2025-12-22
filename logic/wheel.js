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

let random = Math.floor(
  Math.random() * (MAX_ROUNDS - (MAX_ROUNDS - 360)) + (MAX_ROUNDS - 360)
);

function onWheelClick() {
  refs.wheel.style.transition = `transform ${5}s cubic-bezier(.42,0,.58,1)`;
  console.log(`random -`, random);
  refs.wheel.style.transform = `rotate(${random}deg)`;
  random +=
    Math.random() * (MAX_ROUNDS - (MAX_ROUNDS - 360)) + (MAX_ROUNDS - 360);
}

refs.wheel.addEventListener("click", onWheelClick);

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const options = {
  root: refs.wheel,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(refs.arrow);
