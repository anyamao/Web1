const Header = () => {
  return (
    <div className="header-container text-brown normal-size">
      <div className="header-content">
        <div className="navigation-container width-control">
          <p className="navigation-element text-brown">Timer</p>
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
