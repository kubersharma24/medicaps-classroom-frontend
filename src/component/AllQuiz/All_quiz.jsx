
import { useEffect,useState } from "react";
import "./all_quiz.css";
function All_quiz({ details,setOn,setOff }) {
    const arrayData =JSON.parse(details);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {  
          setLoading(false);
        }, 500);
      }, []);
      

  return (
    <>
          <div>
          {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
      {arrayData.map((data) => (
          <div key={data.quizId} id="quiz_box">
            <div><h1>{data.quizTitle}</h1></div>
            <div>{data.quizDescription}</div>
            <div>{data.status}</div>
            <button onClick={()=>setOn({quizId:data.quizId})}>set quiz on</button>
            <button onClick={()=>setOff({quizId:data.quizId})}>set quiz off</button>
        </div>
      ))}
      </div>
      )}
      </div>
    </>
  );
}

export default All_quiz;
