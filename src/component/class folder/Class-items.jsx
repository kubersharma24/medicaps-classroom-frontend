import { React, useEffect, useState } from "react";
import Single_class from "./Single_class";
import "./class_item.css";
import RegistrationForm from "../NewClass/CreateNewClass";
import axios from "axios";

function Class_item() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const[count, setCount]=useState(0);

  useEffect(() => {
    setStatus(localStorage.getItem("status"));
    ClassList();
  }, [count]);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCount(count+1)
  };
  const email = localStorage.getItem("email");
  const ClassList = async () => {
    // console.log("class button clicked");
    // await new Promise(resolve => setTimeout(resolve, 100));
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8082/teachers?teacher=" + email,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DeleteClass = (classId) => {
    console.log(classId);
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "http://localhost:8082/teachers",
      headers: {
        "Content-Type": "application/json",
      },
      data: classId,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    // ClassList();
    setCount(count+1)
  };

  if (data === "Bad Request") {
    return (
      <div>
        <button className="btn" onClick={openModal}>
          New Class
        </button>
        <RegistrationForm isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  } else {
    return (
      <>
        <div>
          <div>
            <button className="btn" onClick={openModal}>
              New Class
            </button>
            <RegistrationForm isOpen={isModalOpen} onClose={closeModal} />
          </div>

          <div id="flex-class">
            {data.map((data_item) => (
              <div>
                <Single_class data_prop={data_item} onDelete={DeleteClass} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Class_item;
