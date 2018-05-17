import styled from 'styled-components';
import { highlight, text } from '../../../../styles/colours';
import { columns } from '../../../../styles/spacing';

export const Title = styled.h2`
  color: ${text};
  font-weight: 500;
  font-size: 4.5rem;

  &:after {
    content: '.';
    color: ${highlight};
  }
`;

export const Body = styled.p`
  color: ${text};
  font-size: 1.25rem;
  line-height: 2em;
  max-width: ${columns(10)}px;
  margin: 40px 0;
`;