"use client";

import { Button } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const baseUrl = "http://localhost:1337/api";
    const res = await fetch(`${baseUrl}/courses`);
    const data = await res.json();
    setCourses(data);
    console.log(data);
    return data;
  };
  return (
    <div>
      hello
      <Button variant="contained" onClick={() => fetchCourses()}>
        Fetch Courses
      </Button>
    </div>
  );
};

export default Home;
