import React from 'react';
import PropTypes from 'prop-types';
import { Item, TitleList } from './Statistic.styled';

export const Statistic = ({
  good,
  bad,
  neutral,
  totalFeedBack,
  feedBackPercentage,
}) => {
  return (
    <div>
      <TitleList>STATISTICS</TitleList>
      <ul>
        <Item>GOOD:{good}</Item>
        <Item>NEUTRAL:{neutral}</Item>
        <Item>BAD:{bad}</Item>
        <Item>
          Total:
          {totalFeedBack()}
        </Item>
        <Item>
          Positive feedBack:
          {feedBackPercentage()}%
        </Item>
      </ul>
    </div>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  totalFeedBack: PropTypes.func.isRequired,
  feedbackPercentage: PropTypes.func.isRequired,
};
