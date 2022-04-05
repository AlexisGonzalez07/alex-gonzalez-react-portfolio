import styled from 'styled-components'

export const FooterWrapper = styled.div`
background-color: #923cb5;
background-image: linear-gradient(to left, #080808,#222222,#080808);
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  display: flex;
  flex-direction: column
`;

export const FooterHeader=styled.h3`
color: white;
display:flex;
width: 100%;
justify-content: center;
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
`

export const FooterSection = styled.div`
  display: grid;
  width: 100%;
  max-width: 1000px;
  height: auto;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
//   grid-gap: 20px;

  /* Tablets*/
  @media screen and (max-width: 992px) {
    max-width: 500px;
  }

  /* Large smartphones */
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }

  /* Small smartphones */
  @media screen and (max-width: 576px) {
  }
`;