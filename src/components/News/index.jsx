import React from "react";
import { Box1, Box2, BoxWrapper, Container, Wrapper } from "./style";
import world from "../../assets/icon/world.svg";
import news from "../../assets/img/newsImg.png";

const News = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={world} alt="question" />
          <div className="line"></div>
        </div>
        <p className="title">HABIB ILM MARKAZI HAYOTIDAN</p>
        <div className="desc">SO’NGI YANGILIKLAR</div>
        <BoxWrapper>
          <Box1>
            <Box1.Img src={news} alt="news Img" />
          </Box1>
          <Box2>
            <Box2.Text type="title">
              HABIB ilm markazi o'qtuvchisi Al-Azhar Unversitetida "Tafsir va
              Quron" mutaxassisligi bo'yicha magistirlik dissertatsiyasini a`lo
              bahoga (mumtaz) himoya qildi
            </Box2.Text>
            <Box2.Text type="text">
              (Abdulloh lotinchaga o’zgartirib keting iltimos) Тошкент ислом
              институти Тиллар кафедрасида Араб тили ва Балоғат фанлари
              ўқитувчиси Озода Маҳкомова Қоҳирадаги “Ал-Азҳар” университетининг
              “Араб тили ва Ислом илмлари” институти “Тафсир ва Қуръон илмлари”
              факультетида таҳсил олиб, магистрлик дисертациясини ҳимоя қилди.
              О.Маҳкамова Шайх Набровийнинг “Қурратул аъйни ва нузҳатул фуади”
              қўлёзмаси – “Ҳуд ва Юсуф суралари таҳқиқи ва тадқиқи” мавзусидаги
              700 бетлик магистрлик дисертациясини аъло баҳога (мумтаз) ҳимоя
              қилди.
            </Box2.Text>
          </Box2>
        </BoxWrapper>
      </Container>
    </Wrapper>
  );
};

export default News;
