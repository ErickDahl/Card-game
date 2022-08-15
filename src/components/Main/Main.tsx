import { ReactNode } from "react";
import "./Main.css";

type MainProps = {
  children: ReactNode;
};

const Main = (props: MainProps) => {
  return (
    <div className="App">
      <header className="header">
        <div>
          <span className="header-text">Card Game</span>
        </div>
      </header>

      <main className="content">{props.children}</main>

      <footer className="footer">
        <small className="footer-text">&copy; Copyright 2022, Cards Game</small>
      </footer>
    </div>
  );
};

export default Main;
