import React from "react";
import ReactApexChart from "react-apexcharts";
import { MainContext } from "../context/Context";

const ActivityHours = () => {
  const { data } = React.useContext(MainContext);

  const formattedData = data?.activity_hours?.map((item) => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
    return { ...item, date: formattedDate };
  });

  const dates = formattedData?.map((item) => item.date);
  const examsCompleted = formattedData?.map((item) => item.exams_completed);
  const hours = formattedData?.map((item) => item.hours);
  const lessonsTaken = formattedData?.map((item) => item.lessons_taken);

  const series = [
    {
      name: "Exams Completed",
      data: examsCompleted,
      type: "line",
    },
    {
      name: "Hours",
      type: "column",
      data: hours,
    },
    {
      name: "Lessons Taken",
      type: "line",
      data: lessonsTaken,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: { show: false },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 5, 5],
      curve: "straight",
      dashArray: [0, 0, 0],
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val;
        // +
        // " - <strong>" +
        // opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        // "</strong>"
      },
      labels: {
        colors: "#fff",
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 5,
      },
    },
    xaxis: {
      categories: dates,
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      min: 0,
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 400,
        },
      },
    },
    tooltip: {
      theme: "dark",

      marker: {
        show: true,
      },
      items: {
        display: "flex",
      },
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
      y: [
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#fff",
    },
  };

  return (
    <div className="common-container p-3">
      <div className="main-card">
        <h2 className="t-25b flex-start mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#fff"
            className="me-2"
          >
            <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
          </svg>
          Activity Metrics
        </h2>
        <div className="mx-auto">
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityHours;
