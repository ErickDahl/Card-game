import React, { FormEvent } from "react";
import "./FirstPage.css";
import { usePageContext } from "../context/PagesContext";

const FirstPage = () => {
  const { setPage, setName } = usePageContext();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setPage(true);
  };

  const handleName = (event: FormEvent<HTMLInputElement>) => {
    setName(event?.currentTarget.value);
  };

  return (
    <div>
      <h1>Por Favor preencha com seus dados</h1>

      <form className="firstPageForm" onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Seu Nome:</label>
          <input
            className="inputName"
            type="text"
            required
            onChange={handleName}
          />
        </div>
        <input className="submitButton" type="submit" value="Ver Cartas" />
      </form>
    </div>
  );
};

export default FirstPage;
