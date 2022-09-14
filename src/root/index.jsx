import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import { ButtonNotice, Card, Container, Flexing } from "./style";

const Root = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  const AllFetchingData = async () => {
    await axios
      .get("https://futurecommunication.pythonanywhere.com/api/v1/product")
      .then((res) => {
        if (res?.status == 200) {
          setLoading(false);
        }
        setData(res?.data?.results);
      });
  };

  useEffect(() => {
    AllFetchingData();
  }, []);

  const getSearch = async () => {
    if (text !== "") {
      await axios
        .get(
          `https://futurecommunication.pythonanywhere.com/api/v1/product/?search=${text}`
        )
        .then((res) => setData(res?.data?.travel));
    } else {
      AllFetchingData();
    }
  };

  const getDelete = async (id) => {
    await axios.delete(
      `https://futurecommunication.pythonanywhere.com/api/v1/product/${id}/`
    );
    AllFetchingData();
  };
  console.log(data, "dadadf ");
  return (
    <Container>
      <Flexing>
        <Container.Input
          onChange={(e) => setText(e.target.value)}
          type={"text"}
          placeholder="search"
        />
        <Container.Btn onClick={getSearch}>Search</Container.Btn>
      </Flexing>
      {loading ? (
        <Loader />
      ) : (
        data.map((value) => {
          return (
            <Card key={value?._id}>
              <Card.Img
                src={`http://futurecommunication.pythonanywhere.com/${value?.images.image}`}
                alt="imgs"
              />
              <Card.Title>{value?.title}</Card.Title>
              <Card.Descr>{value?.descr}</Card.Descr>
              {/* btn */}
              <Flexing>
                <ButtonNotice
                  colored="red"
                  onClick={() => getDelete(value?._id)}
                >
                  Delete
                </ButtonNotice>
              </Flexing>
            </Card>
          );
        })
      )}
    </Container>
  );
};

export default Root;
