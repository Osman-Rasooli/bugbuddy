const ProgressBar = ({ progress, className }) => {
  return (
    <div className={`progress-bar ${className}`}>
      <div className="progress-fill" style={{ width: `${progress}%` }}>
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
