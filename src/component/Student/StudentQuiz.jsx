import { React, useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import axios from "axios";
import CreateQuiz from "../QuizComponent/Create_Quiz";
import All_quiz from "../AllQuiz/All_quiz";

const StudentQuiz = () => {
  const location = useLocation();
  const qry = new URLSearchParams(location.search);
  const [dataDetails, setDataDetails] = useState(null);

  useEffect(() => {
    fetchClassDetail();
  }, []);

  const params = qry.get("classId");


  const fetchClassDetail = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:8082/students/classrooms/quizzes?classCode=${params}`,
        headers: { }
      };
      
      await axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setDataDetails(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {  
          setLoading(false);
        }, 500);
      }, []);
 
    return (
      <>
        {/* <div>
          <h1> {params} </h1>
          

          <All_quiz details={dataDetails} />

          <div></div>
        </div> */}
        <div>
          {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
      {dataDetails.map((data) => (
          <div key={data.quizId} id="quiz_box">
            <div><h1>{data.title}</h1></div>
            <div>{data.descriptions}</div>
        </div>
      ))}
      </div>
      )}
      </div>
        <Outlet />
      </>
    );
  
};

export default StudentQuiz;
