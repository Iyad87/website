import styled from 'styled-components';
import { textLighter, textLight } from 'styles/colours';

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.61;
  letter-spacing: normal;
  color: ${textLight};
`;

export const Main = styled.p`
  p-style-type: none;
  font-size: 24px;
  font-weight: 300;
  font-style: normal:
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: normal;
  color: ${textLighter};
`;

export const Sub = styled.p`
  color: ${textLighter};
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: normal;
`;
