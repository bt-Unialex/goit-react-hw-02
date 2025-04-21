import { useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  console.log(' App feedback:', feedback);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        resetVisible={!!totalFeedback}
        setFeedback={setFeedback}
      />
      {!!totalFeedback && (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      )}
    </>
  );
}
