import React from "react";
import s from "./Paginado.module.css";

const Paginado = ({
  countriesPerPage,
  allCountries,
  paginado,
  currentPage,
  setCurrentPage,
  max,
}) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  function handleClickFirstPage(e) {
    e.preventDefault();
    setCurrentPage(1);
  }

  function handleClickNext(e) {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  }

  function handleClickPrev(e) {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  }

  function handleClickLastPage(e) {
    e.preventDefault();
    setCurrentPage(max);
  }

  return (
    <div>
      <div className={s.centerize}>
        <button
          className={s.buttonBackA}
          style={{ display: "column", alignItems: "center" }}
          disabled={currentPage <= 1}
          onClick={(e) => {
            handleClickFirstPage(e);
          }}
        >
          {"<<"}
        </button>
        <button
          className={s.buttonBackA}
          style={{ display: "column" }}
          disabled={currentPage <= 1}
          onClick={(e) => {
            handleClickPrev(e);
          }}
        >
          {"<"}
        </button>
        <p className={s.p}>Actual page: {currentPage}</p>
        <button
          className={s.buttonNextA}
          disabled={currentPage >= Math.ceil(max)}
          onClick={(e) => {
            handleClickNext(e);
          }}
        >
          {" > "}
        </button>
        <button
          className={s.buttonNextB}
          disabled={currentPage >= Math.ceil(max)}
          onClick={(e) => {
            handleClickLastPage(e);
          }}
        >
          {">>"}
        </button>
      </div>

      {pageNumbers &&
        pageNumbers.map((number) => (
          <li key={number} className={s.pagination}>
            <button
              className={s.pagination}
              onClick={() => {
                paginado(number);
              }}
            >
              {number}{" "}
            </button>
          </li>
        ))}
    </div>
  );
};

export default Paginado;
