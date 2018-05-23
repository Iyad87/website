import React from 'react';
import PropTypes from 'prop-types';
import { Before, Header, DefaultTitle, Main, Wrapper } from './styled';

const PageHero = ({ before, children, title }) => {
  const renderedTitle =
    typeof title === 'string' ? <DefaultTitle>{title}</DefaultTitle> : title;

  return (
    <Wrapper>
      <Header>
        {before && <Before>{before}</Before>}
        {renderedTitle}
      </Header>
      <Main>{children}</Main>
    </Wrapper>
  );
};

PageHero.propTypes = {
  before: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.node.isRequired,
};

PageHero.defaultProps = {
  before: null,
  children: [],
};

export default PageHero;