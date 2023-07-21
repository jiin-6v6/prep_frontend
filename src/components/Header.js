import "../assets/styles/Header.css";

const Header = ({ headerText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="header_of_left">{leftChild}</div>
      <div className="header_text">{headerText}</div>
      <div className="header_of_right">{rightChild}</div>
    </header>
  );
};

export default Header;
