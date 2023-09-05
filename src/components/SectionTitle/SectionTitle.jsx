import React from 'react';
import PropTypes from 'prop-types';
import { SectionFeedBack, Title } from './SectionTitle.styled';

export const SectionTitle = ({ titleSection, children }) => {
  return (
    <SectionFeedBack>
      <Title>{titleSection}</Title>
      {children}
    </SectionFeedBack>
  );
};

SectionTitle.propTypes = {
  titleSection: PropTypes.string.isRequired,
};
