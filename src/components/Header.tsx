const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="navigation-container width-control">
          <p className="navigation-element">Timer</p>
          <p className="">|</p>
          <p className="navigation-element">Notes</p>
          <p className="">|</p>
          <p className="navigation-element">AI Chat</p>
          <p className="">|</p>
          <p className="navigation-element">Flashcards</p>
          <p className="">|</p>
          <p className="navigation-element">Social</p>
        </div>

        <img src="avatar.jpg" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
