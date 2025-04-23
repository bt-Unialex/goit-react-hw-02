import Button from './Button/Button';
import css from './Options.module.css';
export default function Options({
  feedback,
  resetVisible,
  clickFeedback,
  clickReset,
}) {
  return (
    <div className={css.wrapper}>
      <div className={css.feedbuttons}>
        {Object.keys(feedback).map((key) => (
          <Button key={key} values={feedback} onClick={clickFeedback(key)}>
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
