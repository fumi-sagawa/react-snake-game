const Button = ({ status, onStart, onStop, onRestart }) => {
  return (
    <div className="button">
      {status === "gameOver" && (
        <button onClick={onRestart} className="btn btn-gameover">
          gameover
        </button>
      )}
      {status === "init" && (
        <button onClick={onStart} className="btn btn-init">
          start
        </button>
      )}
      {status === "suspended" && (
        <button onClick={onStart} className="btn btn-suspended">
          start
        </button>
      )}
      {status === "playing" && (
        <button onClick={onStop} className="btn btn-playing">
          stop
        </button>
      )}
      {console.log(status)}
    </div>
  );
};

export default Button;
