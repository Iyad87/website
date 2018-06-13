import styled from 'styled-components';
import remcalc from 'remcalc';
import breakpoints from 'styles/breakpoints';
import PageSection from 'components/PageSection';

import BG from '../../../assets/page-hero.png';

export const Section = styled(PageSection)`
    background: url('${BG}');
    background-position: left top;
    background-size: 100% 100%;
    margin: 0;
    max-width: 100%;
    padding-top: ${remcalc(230)};
    margin-top: ${remcalc(-170)};
    z-index: 0;
    position: relative;
    padding-bottom: ${remcalc(141)};

  ${breakpoints.tablet`
    margin-top: ${remcalc(-130)};
  `};
`;

export const ServicesList = styled(PageSection)`
  margin-top: 0;
  box-shadow: none;
  padding-bottom: 0;
`;