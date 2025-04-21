import Button from './Button/Button';
import css from './Options.module.css';
export default function Options({ feedback, setFeedback, resetVisible }) {
  function handleClick(feedbackIs) {
    return () => {
      setFeedback({
        ...feedback,
        [feedbackIs]: feedback[feedbackIs] + 1,
      });
    };
  }
  function clickReset() {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  return (
    <div className={css.wrapper}>
      <div className={css.feedbuttons}>
        {Object.keys(feedback).map((key) => (
          <Button key={key} values={feedback} onClick={handleClick(key)}>
            {key}
          </Button>
        ))}
      </div>
      {resetVisible && (
        <Button key="reset" values={feedback} onClick={clickReset}>
          reset
        </Button>
      )}
    </div>
  );
}
