import React, { useState } from "react";
import axios from "axios";
function CreateQuiz({ classId,isOpen, onClose }) {

    const [quizData, setQuizData] = useState({
      classId: classId,
      quizTitle: "",
      quizDescription: ""
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setQuizData({ ...quizData, [name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: 'http://localhost:8082/teacher/classrooms/quiz',
        headers: {
          "Content-Type": "application/json",
        },
        data: quizData,
      };

      await axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

    //   console.log("Registration Data:", quizData);
      e.target.reset();
      onClose();
    };

    return (
      <>
        <div className={`modal ${isOpen ? "open" : ""}`}>
          <div className="center-form">
            <span className="close-button" onClick={onClose}>
              &times;
            </span>
            <h2>Create New Quiz</h2>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  type="text"
                  name="name"
                  readOnly
                  placeholder="name"
                  value={quizData.classId}
                  onChange={handleChange}
                />
              </div>
             
              <div className="input">
                <input
                  type="text"
                  name="quizTitle"
                  placeholder="Title"
                  value={quizData.quizTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="quizDescription"
                  placeholder="description"
                  value={quizData.quizDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="btn">
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }


export default CreateQuiz;
