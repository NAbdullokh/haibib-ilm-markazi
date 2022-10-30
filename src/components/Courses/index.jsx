import React, { useState, useEffect } from "react";
import { Card, Container, Icon, Wrapper, CardWrapper } from "./style";
import courses from "../../assets/img/courses.png";
import right from "../../assets/icon/right.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const Courses = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://habibilmapi.pythonanywhere.com/course-details")
      .then((res) => {
        if (res?.status === 200) {
          setLoading(false);
        }
        setData(res?.data?.results);
      });
  }, []);

  return (
    <Wrapper id="courses">
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <img src={courses} alt="courses" />
          <div className="line"></div>
        </div>
        <p style={{ color: "black" }} className="title">
          O’QUV KURSLARIMIZ
        </p>
        <p style={{ color: "black" }} className="desc">
          BIZ BILAN TURLI SOXALARNI O’RGANING
        </p>
        <CardWrapper>
          {loading ? (
            <Loader />
          ) : (
            data.map((value) => {
              return (
                <Card
                  onClick={() => navigate(`/courses/${value.id}`)}
                  key={value.id}
                >
                  <Card.Img
                    className="course-img"
                    src={value.photo}
                    alt={value.title}
                  />
                  <Card.Title>
                    {value.name} <Icon src={right} alt="" />
                  </Card.Title>
                </Card>
              );
            })
          )}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Courses;
