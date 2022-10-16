import React from "react";
import {
  Box1,
  Box2,
  BoxWrapper,
  BtnWrapper,
  Container,
  Wrapper,
} from "./style";
import userImg from "../../assets/icon/user.svg";
import Button from "../../generic/Button";
import founderImg from "../../assets/img/founder.png";

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
              Agarda qandaydir shikoyat yoki taklifingiz bo’lsa,
              <span>shaxsan o’zim eshitishga tayyorman</span>
            </Box1.Head>
            <div className="titleWrap" style={{ width: "100%" }}>
              <Box1.Input type="text" placeholder="Ismingiz" />
              <Box1.Input type="number" defaultValue="+998" />
            </div>
            <Box1.TextArea placeholder="Shikoyat va takliflaringizni yozing" />

            <BtnWrapper>
              <Button>YUBORISH</Button>
            </BtnWrapper>
          </Box1>
          <Box2>
            <Box2.Img src={founderImg} />
            <p className="desc">HABIBULLOH AHMADOV</p>
            <Box1.Head>“HABIB - ILM MARKAZI” ASOSCHISI</Box1.Head>
          </Box2>
        </BoxWrapper>
      </Container>
    </Wrapper>
  );
};

export default Founder;
