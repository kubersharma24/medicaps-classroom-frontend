import React, { useState, useEffect } from "react";
// import { Link,Outlet} from "react-router-dom";
import JoinClass from "./JoinClass/JoinClass";
import axios from "axios";
import StudentSingleClass from "./StudentSingleClass";
import { Outlet } from "react-router-dom";

function StudentClass() {
  const [Student_Class_Data, setStudent_Class_Data] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[count, setCount]=useState(0);
//   const [status, setStatus] = useState(null);

  useEffect(() => {
    FetchStudentClass();
  }, [count]);

  const FetchStudentClass = async () => {
    console.log("FetchstudentClass function is called");
    // await new Promise(resolve => setTimeout(resolve, 100));
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:8082/students?userId=${email}`,
      headers: {},
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setStudent_Class_Data(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCount(count+1)
  };
  const email = localStorage.getItem("email");

  const LeaveClass = (classId) => {
    console.log(classId);
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "http://localhost:8082/students",
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
      setCount(count+1)
  };

  if (Student_Class_Data === "Bad Request") {
    return (
      <>
        <div>
          <button className="btn" onClick={openModal}>
            Join new class
          </button>
          <JoinClass isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div>No classes Joined yet</div>
      </>
    );
  }
  return (
    <>
      <div>
        <div>
          <button className="btn" onClick={openModal}>
            Join new class
          </button>
          <JoinClass isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div >

        <StudentSingleClass classData={Student_Class_Data} onLeave={LeaveClass}/>
        </div>

        <Outlet />
      </div>
    </>
  );
}
export default StudentClass;
