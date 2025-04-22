import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
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

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        resetVisible={!!totalFeedback}
        setFeedback={setFeedback}
        STORAGE_KEY={STORAGE_KEY}
      />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    </>
  );
}
