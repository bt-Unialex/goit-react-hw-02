import css from './Feedback.module.css';
export default function Feedback({ totalFeedback, feedback }) {
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <div className={css.wrapper}>
      <p className={css.textline}>Good: {feedback.good}</p>
      <p className={css.textline}>Neutral: {feedback.neutral}</p>
      <p className={css.textline}>Bad: {feedback.bad}</p>
      <p className={css.textline}>Total: {totalFeedback}</p>
      <p className={css.textline}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
