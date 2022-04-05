import styled from "styled-components";

export const ColumnWrapper = styled.div`
display: flex;
flex-direction: column;
color: white;
height: 100%;
min-height: 200px;
width: 100%;
justify-content: center;
align-items: center;
border-right: ${({position}) => position==='third' ? 'none': '1px solid white'};
/* Tablets*/
@media screen and (max-width: 992px) {
  min-height: 130px;
}

/* Large smartphones */
@media screen and (max-width: 768px) {
  min-height: 100px;

}
`

export const IconHolder = styled.div`
display: flex;
width: 30%;
padding: 10px;
justify-content: center;
align-items: center'
border-radius: 8px;
`

export const Img = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
`;

export const IconSubtitle=styled.p`
color: white;
display: flex;
align-items: center;
font-size: 18px;

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
`