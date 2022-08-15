import { useState, useEffect } from "react";
import "./SecondPage.css";
import { ShibeProp, usePageContext } from "../context/PagesContext";

const SecondPage = () => {
  const [shibesToShow, setShibesToShow] = useState<ShibeProp[]>([]);
  const [number, setNumber] = useState(0);
  const { name, shibes } = usePageContext();
  const othersShibes = shibes.slice(5, 8);

  useEffect(() => {
    setShibesToShow(shibes.slice(0, 5));
  }, [shibes]);

  const AddShibes = () => {
    setShibesToShow((current: ShibeProp[]) => [
      ...current,
      othersShibes[number],
    ]);
    setNumber((value) => value + 1);
  };

  const ShuffleShibes = (array: ShibeProp[]) => {
    const newArray = [...array];
    let currentIndex = newArray.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
    return newArray;
  };

  console.log(shibes);
  console.log(shibesToShow);
  console.log(othersShibes);

  return (
    <div className="contentSecondPage">
      <div className="topSecondPage">
        <h1 className="title">Suas Cartas</h1>
        <span className="personName">Olá {name}</span>
      </div>
      <div className="buttons">
        <button
          className="addShibe"
          onClick={() => AddShibes()}
          disabled={number >= 3}
        >
          Mais Shibes
        </button>
        <button
          className="shuffleShibes"
          onClick={() => setShibesToShow(ShuffleShibes(shibesToShow))}
        >
          Bagunçar Shibes
        </button>
      </div>

      <div className="cards">
        {shibes.length ? (
          <>
            {shibesToShow?.map((shibe: ShibeProp) => {
              return (
                <div className="card" key={shibe.name}>
                  <h3 className="cardText">{shibe.name}</h3>
                  <img
                    className="cardImage"
                    src={shibe.image}
                    alt={shibe.description}
                  />
                  <span className="cardValue">
                    Valor do seu Shibe: <strong>{shibe.value}</strong>
                  </span>
                  <span className="cardDescription">
                    Descrição do Shibe: <strong>{shibe.description}</strong>
                  </span>
                </div>
              );
            })}
          </>
        ) : (
          <h2>Carregando...</h2>
        )}
      </div>
    </div>
  );
};

export default SecondPage;
