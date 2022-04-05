import styled from "styled-components";

export const SectionWrapper = styled.div`
background-color: #923cb5;
background-image: linear-gradient(to left, #080808,#222222,#080808);
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  display: flex;
`;

export const SectionContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1300px;
  height: auto;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(1);
  grid-gap: 20px;

  /* Tablets*/
  @media screen and (max-width: 992px) {
    max-width: 740px;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    max-width: 500px;
  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
  }
`;

export const SectionHeaderWrap = styled.div`
display: flex;
// width: 100%;
max-width: 1300px;
margin-left: 5px;
padding: 10px;
border-bottom: 2px solid white;
`
export const SectionHeader = styled.h1`
display: grid;
width: auto;
height: auto;
margin: 10px 0;
align-items: left;
color: white;
font-size: 40px;

/* Small laptops*/
@media screen and (max-width: 1100px) {
  font-size: 38px;
}

/* Tablets*/
@media screen and (max-width: 992px) {
  font-size: 36px;
}

/* Large smartphones */
@media screen and (max-width: 768px) {
  font-size: 32px;
  letter-spacing: .1px;
}

`