import styled from "styled-components";

export const LocalGrid = styled.div`
  display: grid;
  color: white;
  height: 100%;
  min-height: 400px;
  width: 100%;
  max-width: 1200px;
  grid-template-areas: ${({ svgfirst }) =>
    svgfirst
      ? `"svg svg header header header header" "svg svg content content content content"`
      : `"header header header header svg svg" "content content content content svg svg"`};
  grid-template-columns: repeat (6, 1fr);
  grid-template-rows: repeat (6, 1fr);


  /* Small laptops*/
  @media screen and (max-width: 1100px) {
min-height: 300px;
  }

  /* Tablets*/
  @media screen and (max-width: 992px) {
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    @media screen and (max-width: 768px) {
      grid-template-areas: "header header header header header header"". svg svg svg svg .""content content content content content content"
        }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
  }

`

export const ImageSection = styled.div`
  grid-area: svg;
  width: 100%;
  max-width: 400px;
  justify-content: center;
  display: flex;
  text-align: center;

  /* Large smartphones */
  @media screen and (max-width: 768px) {
   max-height: 150px;
   padding: 10px;
  }

`;

export const HeaderSection = styled.div`
  grid-area: header;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

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
export const ContentSection = styled.div`
  grid-area: content;
  justify-content: center;
  display: flex;
  text-align: center;
  width: 100%;
`;

export const ImageDiv = styled.div`
display: flex;
width: 80%;
padding: 10px;
margin-left: 5px;
height: 100%;
min-height: 100px;
justify-content: center;
align-items: center'
border-radius: 8px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
  //   border-radius: 10px;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  align-items: center;
  margin-top: 20px;

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
export const ContentWrapper = styled.div`
  display: flex;
  width: 75%;
  padding: 5px;
  height: 100%;
  min-height: 100px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.p`
  font-size: 18px;
  align-items: center;
  margin-bottom: 20px;

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
