import { useState } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistic/Statistic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onChangeCount = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
    }
    default:
      return
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <SectionTitle titleSection={`Please leave feedBack`}>
        <FeedbackOptions
          onLeaveFeedback={onChangeCount}
          options={['good', 'neutral', 'bad']}
        />
        {countTotalFeedback() !== 0 ? (
          <Statistic
            datas={[good, neutral, bad]}
            totalFeedBack={countTotalFeedback}
            feedBackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          toast.warn('MAKE YOUR CHOOSE')
        )}
      </SectionTitle>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};
