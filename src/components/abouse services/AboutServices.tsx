import { useState } from "react";
import Modal from "../modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AboutServices = () => {
  const [myModal, setMyModal] = useState(false);
  const options:any = {
    responsive: true,
    labels: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = ["", "", "", "", ""];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [40, 35, 60, 50, 60],

        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "#000",
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  function ModalHandler() {
    setMyModal(!myModal);
  }

  return (
    <section className="container mx-auto px-3 max-w-[1330px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-5 items-center ">
        <div className="bg-[#CAEFE8] p-5 rounded-3xl relative	lg:basis-1/3">
          <img
            src="./img/people.png"
            alt="People Icon"
            className="absolute top-5 right-5"
          />
          <h2 className="text-6xl font-bold mb-5">2M+</h2>
          <p>
            This is the number of our customers who actively use our services.
            You can view their reviews here. Or you can leave your own.
          </p>
        </div>
        <div
          className="about-service-ty-thumbnail-parent w-full cursor-pointer  lg:basis-1/3 rounded-3xl h-[200px]  bg-[url('/public/img/yt-banner.webp')] bg-center bg-cover relative"
          onClick={() => ModalHandler()}
        >
          {myModal && (
            <Modal>
              <iframe
                width="80%"
                height="80%"
                src="https://www.youtube.com/embed/uYRq60G5XTk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Modal>
          )}
          <button className="absolute inset-1/4 opacity-70 hover:opacity-100 smooth-trans">
            <FontAwesomeIcon
              icon={["fas", "circle-play"]}
              className="	text-6xl text-[#3BCBB0] lg:text-5xl "
            />
          </button>
        </div>
        <div className="bg-[#C6E0F9] p-5 rounded-3xl relative w-full lg:w-40 lg:basis-1/2 ">
          <img
            src="./img/people.png"
            alt="People Icon"
            className="absolute top-5 right-5"
          />
          <p>Conversion rate increasing with our service</p>
          <h2 className="text-4xl font-semibold my-2">+28.5%</h2>
          <Line options={options} data={data} className="max-h-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
