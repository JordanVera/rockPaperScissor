const Header = ({ scoreCount }) => {
  return (
    <div id="header">
      <div className="left-element">
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <div className="right-element score">
        <h3>SCORE</h3>
        <h2>{scoreCount}</h2>
      </div>
    </div>
  );
};
export default Header;
