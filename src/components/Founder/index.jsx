import React from "react";
import { Box1, Box2, BoxWrapper, Container, Wrapper } from "./style";
import userImg from "../../assets/icon/user.svg";

const Founder = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={userImg} alt="question" />
          <div className="line"></div>
        </div>
        <p className="title">HABIB - ilm markazi asoschisi</p>
        <p className="desc">HABIB - ilm markazi asoschisi</p>
        <BoxWrapper>
          <Box1>
            <div className="title">ASSALOMU ALEYKUM! </div>
            <Box1.Head>
              Agarda qandaydir shikoyat yoki taklifingiz bo’lsa,{" "}
              <span>shaxsan o’zim eshitishga tayyorman</span>
            </Box1.Head>
          </Box1>
          <Box2></Box2>
        </BoxWrapper>
      </Container>
    </Wrapper>
  );
};

export default Founder;
