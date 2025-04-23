import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
export default function App() {
  const STORAGE_KEY = 'feedbacks';

  const [feedback, setFeedback] = useState(() => {
    const zeroFeedback = { good: 0, neutral: 0, bad: 0 };
    const storedFeedback = window.localStorage.getItem(STORAGE_KEY);
    return storedFeedback ? JSON.parse(storedFeedback) : zeroFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  function clickFeedback(feedbackIs) {
    return () => {
      setFeedback({
        ...feedback,
        [feedbackIs]: feedback[feedbackIs] + 1,
      });
    };
  }
  function clickReset() {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    // window.localStorage.removeItem(STORAGE_KEY);
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        resetVisible={!!totalFeedback}
        clickFeedback={clickFeedback}
        clickReset={clickReset}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
