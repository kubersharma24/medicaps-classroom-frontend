import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function StudentSingleClass({ classData, onLeave }) {
  // const classData =JSON.parse(classDatas);
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
          <div style={{display:"flex"}}>
            {classData.map((data) => (
              <div id="class_box">
                <div key={data.id}>
                  <Link
                    to={`/student/classId?classId=${data.id}`}
                    className="linkTag"
                  >
                    {data.description}
                  </Link>
                </div>
                <div>{data.subject}</div>
                <button
                  onClick={() =>
                    onLeave({
                      classCode: data.id,
                      userId: localStorage.getItem("email"),
                    })
                  }
                >
                  leave class
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
}

export default StudentSingleClass;
