import React from "react";
import { ColumnWrapper, IconHolder, IconSubtitle, Img } from "./ColumnElements";

export const FooterColumn = ({ src, alt, subtitle, position,href }) => {
  return (
    <ColumnWrapper position={position}>
      <a style={{all: 'inherit', cursor: 'pointer'}} href={href} target={'_blank'} rel='noreferrer'><IconHolder>
        <Img src={src} alt={alt} style={{fill: 'white'}}/>
      </IconHolder>
      <IconSubtitle>{subtitle}</IconSubtitle>
      </a>
    </ColumnWrapper>
  );
};
