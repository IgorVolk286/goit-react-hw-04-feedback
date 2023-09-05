import PropTypes from 'prop-types';
import { WrapButtons, Button } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <WrapButtons>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={nanoid()}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </WrapButtons>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
