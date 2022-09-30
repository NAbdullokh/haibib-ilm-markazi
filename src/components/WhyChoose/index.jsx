import React from "react";
import {
  Box1,
  Box2,
  BoxWrapper,
  BtnWrapper,
  Container,
  Wrapper,
} from "./style";
import cup from "../../assets/img/cup.png";
import Button from "../../generic/Button";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <Wrapper>
      <Container>
        <BoxWrapper>
          <Box1>
            <Box1.Title>NIMA UCHUN AYNAN “HABIB ILM MARKAZI”?</Box1.Title>
            <Box1.Desc>
              O`quv markaz ta’sischisi o`z faoliyatini boshlashdan oldin bir
              necha yil turli xil ta’lim markazlarida faoliyat olib bordi hamda
              ta’lim dasturlardagi mavjud kamchilik va xatolarni ko`rib, ularni
              bartaraf etishdi harakat qildi. Shu bois birinchi bo`lib
              maxrajlarni “HABIB ilm markazi”da zamonaviy uslubda o`tishni
              boshladi va qattiq talabchanlikni yo`lga qo`ydi:
            </Box1.Desc>
            <Box1.Img src={cup} alt="" />
            <Box1.Desc>
              1) Ko`p arab tili ustozlarining malakasini oshirish va yangi
              usulni qo’llash;
            </Box1.Desc>
            <Box1.Desc>
              2) Dangasa deb e'tibordan chetda qolgan talabalarga ustoz e'tibor
              berdi va dangasa o`quvchi yo`qligini isbotlay oldi;
            </Box1.Desc>
            <Box1.Desc>
              3) Ko`p o`quv kurslarda o`quvchidan qat'iy intizom talab qilinmas
              edi, lekin birinchi bo`lib tartib - intizomni qo`llay olgan ustoz
              bo`la oldi;
            </Box1.Desc>

            <Box1.Desc>
              4) Yangi qiziqtirish uslublarini, yo`llarini o`ylab topgan va
              zerikarli dasturni qanday qilib qiziqarli qilish yollarini topgan.
            </Box1.Desc>
            <Box1.Desc>
              Aytgancha, yana bir muhim tomoni turli xil musobaqalar, tanlovlar
              o`tkazib turadi va ko`plab ustozlarga, ommaga manfaatli bo'lishi
              uchun bilimlarini ulashadi.
            </Box1.Desc>
          </Box1>
          <Box2>
            <Box2.Img src={cup} alt="" />
          </Box2>
        </BoxWrapper>
        <Link to="/login">
          <BtnWrapper>
            <Button mt="40" type="primary" height="60px">
              BIZGA QO’SHILING
            </Button>
          </BtnWrapper>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Choose;
