import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  background-color: #923cb5;
  background-image: linear-gradient(to right, #04001e, #26226f 25%, #04001e);
  border-radius: 20px;
  margin-top: 15px;
  position: relative;
  min-height: 300px;


  /* Tablets*/
  @media screen and (max-width: 992px) {
    font-size: 14px;
    max-width: 740px;
    min-height: 275px;

  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    font-size: 14px;
    flex-direction: column;
    max-width: 500px;
    padding: 20px 30px;

  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;
export const OverlayDescription = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: bottom;
  font-size: 16px;
  opacity: 100%;
  background: none;
  z-index: 10;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;

  /* Small laptops*/
  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }

  /* Tablets*/
  @media screen and (max-width: 992px) {
    font-size: 14px;
    bottom: 16px;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
   font-size: 10px;
  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
    font-size: 10px;
}
`;

export const OverlayTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: none;
  z-index: 10;
  position: absolute;
  top: 15px;
  left: 15px;
  color: white;

  /* Small laptops*/
  @media screen and (max-width: 1100px) {
    font-size: 22px;
  }

  /* Tablets*/
  @media screen and (max-width: 992px) {
    font-size: 22px;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    font-size: 20px;
    letter-spacing: .1px;
}

  /* Small smartphones */
  @media screen and (max-width: 576px) {
    font-size: 20px;
    letter-spacing: .1px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 35%;
  padding: 5px;
  margin-right: 5px;
  border-radius: 8px;
  height: 100%;
  min-height: 150px;
  position: relative;
  justify-content: center;
  align-items: center;

  /* Small laptops*/
  @media screen and (max-width: 1100px) {
    font-size: 16px;
    max-width: 960px;
  }

  /* Tablets*/
  @media screen and (max-width: 992px) {
    font-size: 14px;
    max-width: 740px;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    width: 70%;
  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
    width: 75%;
  }

`;

export const Image = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
  border-radius: 10px;
  opacity: 100%;
  display: flex;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  width: 65%;
  padding: 5px;
  border-radius: 8px;
  height: 100%;
  min-height: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    width: 70%;
  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
    width: 80%;
  }

`;

export const HeaderSection = styled.div`
  grid-area: header;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  line-height: 1.4;


  /* Tablets*/
  @media screen and (max-width: 992px) {
    width: 100%;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    max-width: 500px;
  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
  }
`;
export const MainTitle = styled.h1`
  font-size: 36px;
  align-items: center;
  margin-top: 20px;
  color: white;
  line-height: 1.4;

  /* Small laptops*/
  @media screen and (max-width: 1100px) {
    font-size: 32px;
  }

  /* Tablets*/
  @media screen and (max-width: 992px) {
    font-size: 30px;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    font-size: 28px;
    letter-spacing: .1px;
  }
`;

export const SubTitle = styled.h2`
font-size: 26px;
align-items: center;
letter-spacing: .1px;
line-height: 1.4;
color: white;

/* Small laptops*/
@media screen and (max-width: 1100px) {
  font-size: 23px;
}

/* Tablets*/
@media screen and (max-width: 992px) {
  font-size: 22px;
}

/* Large smartphones */
@media screen and (max-width: 768px) {
  font-size: 20px;
  letter-spacing: .1px;
}

/* Small smartphones */
@media screen and (max-width: 576px) {
  font-size: 20px;
  letter-spacing: .1px;
}
`;

export const Content = styled.p`
  font-size: 18px;
  align-items: center;
  margin-bottom: 20px;
  color: white;

  /* Small laptops*/
  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }

  /* Tablets*/
  @media screen and (max-width: 992px) {
    font-size: 14px;
    letter-spacing: .1px;
    line-height: 1.4;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: .1px;
    line-height: 1.4;

  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
    font-size: 12px;
    letter-spacing: .1px;
    line-height: 1.4;

  }

`;

export const BulletList = styled.ul`
  text-align: left;
  color: white;
  padding: 8px;
  list-style-type: disc;
  margin-left: 15px;
`;
export const BulletPoint = styled.li`
  text-align: left;
  list-style-type: disc;
  color: white;
  font-size: 18px;
  margin-top: 4px;
  line-height: 1.4;

  /* Small laptops*/
  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }

  /* Tablets*/
  @media screen and (max-width: 992px) {
    font-size: 14px;
    line-height: 1.4;

  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: .1px;
    line-height: 1.4;

  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
    font-size: 12px;
    letter-spacing: .1px;
    line-height: 1.4;

  }
`;

export const ButtonWrapper = styled.div`
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  display: flex;
  font-size: 20px;


  /* Small laptops*/
  @media screen and (max-width: 1100px) {
    font-size: 20px;
  }

  /* Tablets*/
  @media screen and (max-width: 992px) {
    font-size: 18px;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    font-size: 16px;
    letter-spacing: .1px;
  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
    font-size: 16px;
    letter-spacing: .1px;
  }
`;
