import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "react-bootstrap";

const App = () => {
  const [count, setCount] = useState(0);

  // HANDLE MINUS
  const handleMinus = () => {
    if (count > 0) return setCount((c) => c - 1);
  };

  // DATE FORMAT
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = new Date();
  const stringDay = toTitleCase(
    today.toLocaleDateString("fr-FR", { weekday: "long" })
  );

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const dateToday =
    stringDay + ", " + today.toLocaleDateString("fr-FR", options);

  // DATE DEAD LINE
  const date = new Date("july 21 2027 ");
  date.setDate(date.getDate() + count);
  const dateDeadLine = date.toLocaleDateString("fr-FR", options);

  return (
    <div className="container-fluid bg-light vh-100 text-center pt-4 ">
      <h1 className="btn-outline-danger btn d-block">Gestion des délais</h1>
      <p className="float-md-start fw-bold text-primary"> Date: {dateToday} </p>
      <ButtonGroup aria-label="basic count" className="gap-1 pt-5">
        <Button variant="secondary" onClick={handleMinus}>
          -
        </Button>
        <Button variant="secondary"> {count} </Button>
        <Button variant="secondary" onClick={() => setCount((c) => c + 1)}>
          +
        </Button>
      </ButtonGroup>
      <p className="pt-5">
        Je dois terminer le projet le <strong>21 juillet 2027</strong> et si je
        rajoute <strong> {count} </strong> {count > 1 ? "jours" : "jour"}, le
        projet se terminera le <strong>{dateDeadLine}</strong>
      </p>
    </div>
  );
};

export default App;
