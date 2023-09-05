import React, { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistic/Statistic';

import { Report } from 'notiflix/build/notiflix-report-aio';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeCount = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <SectionTitle titleSection={`Please leave feedBack`}>
          <FeedbackOptions
            onLeaveFeedback={this.onChangeCount}
            options={Object.keys(this.state)}
          />
          {this.countTotalFeedback() !== 0 ? (
            <Statistic
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              totalFeedBack={this.countTotalFeedback}
              feedBackPercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            Report.warning(
              ' Warning',
              '""There is no feedback"',
              'MAKE YOUR CHOOSE'
            )
          )}
        </SectionTitle>
      </div>
    );
  }
}
