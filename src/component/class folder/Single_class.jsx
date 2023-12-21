import React from "react";
import "./Single_class.css";
import { Link, Outlet } from "react-router-dom";

function Single_class({ data_prop, onDelete }) {
  let data = JSON.stringify({
    classCode: data_prop.id,
  });

  return (
    <>
      <div id="class_box">
        <div key={data.classCode}>
          <Link
            to={`/teacher/classId?classId=${data_prop.id}`}
            className="linkTag"
          >
            {data_prop.description}
          </Link>
        </div>
        <div>{data_prop.subject}</div>
        <button onClick={() => onDelete(data)}>delete</button>
      </div>
      <Outlet />
    </>
  );
}

export default Single_class;
