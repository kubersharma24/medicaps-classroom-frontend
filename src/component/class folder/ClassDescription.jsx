import { React, useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import axios from "axios";
import CreateQuiz from "../QuizComponent/Create_Quiz";
import All_quiz from "../AllQuiz/All_quiz";

const ClassDescription = () => {
  const location = useLocation();
  const qry = new URLSearchParams(location.search);
  const [dataDetails, setDataDetails] = useState(null);
   const[count, setCount]=useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    fetchClassDetail();
  }, [count]);

  const params = qry.get("classId");

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCount(count+1);
  };

  const fetchClassDetail = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:8082/teacher/classrooms/quiz?classId=${params}`,

      headers: {},
    };

    await axios
      .request(config)
      .then((response) => {
        setDataDetails(JSON.stringify(response.data));
        console.log("details", dataDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setQuizOn=(id) =>{
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8082/teacher/classrooms/quiz/status/on",
      headers: {
        "Content-Type": "application/json",
      },
      data: id,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      setCount(count+1);
  }
  const setQuizOff=(id)=> {
    console.log(id);
    console.log(typeof id);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8082/teacher/classrooms/quiz/status/off",
      headers: {
        "Content-Type": "application/json",
      },
      data: id,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      setCount(count+1);
  }

  return (
    <>
      <div>
        <h1> {params} </h1>
        <div>
          <button className="btn" onClick={openModal}>
            Create New quiz
          </button>
          <CreateQuiz
            classId={params}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>

        <All_quiz details={dataDetails} setOn={setQuizOn} setOff={setQuizOff} />

        <div></div>
      </div>
      <Outlet />
    </>
  );
};

export default ClassDescription;
