export const IntegrationOption = {
    responsive: false,
    layout: {
        padding: { left: 200}
    },
    plugins: {
      legend: {
        position: "left",
        onClick: (evt, legendItem, legend) => {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;

          if (legendItem.text === "ALL") {
            legend.chart.data.datasets.forEach((dataset, i) => {
              legend.chart.setDatasetVisibility(i, legend.hideAll);
            });

            legend.hideAll = !legend.hideAll;
            legend.chart.update();

            return;
          } else if (ci.isDatasetVisible(index)) {
            ci.hide(index);
            legendItem.hidden = true;
          } else {
            ci.show(index);
            legendItem.hidden = false;
          }
        },
      },

      title: {
        display: true,
        text: "윤종신 - 좋니",

        font: {
          size: 20,
          //weight: "normal",
        },
        color: "black",
      },
    },
  };

const labels = ["a", "b", "c", "d"];
export const IntegrationData = {
    labels,
    datasets: [
      {
        label: "melon Top 100",
        data: [10, 50, 3, 80],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "melon 실시간",
        data: [57, 30, 78, 30],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "gni 실시간",
        data: [125, 90, 111, 5],
        borderColor: "rgb(100, 100, 235)",
        backgroundColor: "rgba(100, 100, 235, 0.5)",
      },

      {
        label: "ALL",
        borderColor: "turquoise",
        backgroundColor: "turquoise",
      },
    ],
  };

  export const GenderOption  = {
    responsive: false,
    layout: {
        padding: { left: 200}
    },
    plugins: {
      legend: {
        position: "left",
        onClick: (evt, legendItem, legend) => {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;

          if (legendItem.text === "전체") {
            legend.chart.data.datasets.forEach((dataset, i) => {
              legend.chart.setDatasetVisibility(i, legend.hideAll);
            });

            legend.hideAll = !legend.hideAll;
            legend.chart.update();

            return;
          } else if (ci.isDatasetVisible(index)) {
            ci.hide(index);
            legendItem.hidden = true;
          } else {
            ci.show(index);
            legendItem.hidden = false;
          }
        },
      },
    },
  };


  
  export const  GenderData = {
      labels : ["a", "b", "c", "d"],
      datasets: [

        {
            label: "전체",
            borderColor: "turquoise",
            backgroundColor: "turquoise",
        },

        {
          label: "남자",
          data: [10, 50, 3, 80],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "여자",
          data: [57, 30, 78, 30],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
          label: "10대",
          data: [125, 90, 111, 5],
          borderColor: "rgb(100, 100, 235)",
          backgroundColor: "rgba(100, 100, 235, 0.5)",
        },
  
      ],
    };



    export const ChangeOption  = {
        responsive: false,
        layout: {
            padding: { left: 200}
        },
        plugins: {
          legend: false
        },
      };

      export const ChangeData = {
        labels : ["a", "b", "c", "d"],
        datasets: [
  
          {
              label: "전체",
              borderColor: "turquoise",
              backgroundColor: "turquoise",
          },
  
          {
            label: "남자",
            data: [10, 50, 3, 80],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "여자",
            data: [57, 30, 78, 30],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
          {
            label: "10대",
            data: [125, 90, 111, 5],
            borderColor: "rgb(100, 100, 235)",
            backgroundColor: "rgba(100, 100, 235, 0.5)",
          },
    
        ],
      };

    
  

