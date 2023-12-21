import "./App.css";
import Loginmain from "./component/login/loginmain";
import CreateAccount from "./component/NewAccount/CreateNewAccount";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/home/home";
import Teacher from "./component/teacher/teacher";
import Class_item from "./component/class folder/Class-items";
import ClassDescription from "./component/class folder/ClassDescription";
import CreateQuiz from "./component/QuizComponent/Create_Quiz";
import Student from "./component/Student/Student";
import StudentClass from "./component/Student/StudentClass";
import StudentQuiz from "./component/Student/StudentQuiz";
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Home />}>
        <Route exact path="/loginpage" element={<Loginmain />}></Route>
        <Route exact path="/createAccount" element={<CreateAccount />}></Route>
        </Route>

        <Route path="/teacher" element={<Teacher />}>
          <Route path="classes" element={<Class_item />} />
          <Route path="/teacher/classId" element={<ClassDescription />} />
          <Route path="/teacher/classId/Create_Quiz" element={<CreateQuiz />} />
        </Route>
          <Route  path="/student" element={<Student/>}>
            <Route path="/student/studentClass" element={<StudentClass/>} />
            <Route path="/student/classId" element={<StudentQuiz/>}/>
          </Route>

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
