export const SelectHistory = ({ SetCurrentState }) => {
  const HandleState = (e) => {
    const currentState = e.target.value;

    return SetCurrentState(currentState);
  };

  return (
    <div className="btnsHistoryCocina">
      <div>
        <button
          value={"all"}
          onClick={HandleState}
        >
          Todos
        </button>
      </div>
      <div>
          <button
            value={"generado"}
            onClick={HandleState}
          >
            Generado
          </button>
      </div>
      <div>
        <button
          value={"proceso"}
          onClick={HandleState}
        >
          En proceso
        </button>
      </div>
      <div>
        <button
          value={"completado"}
          onClick={HandleState}
        >
          Completados
        </button>
      </div>
    </div>
  );
};
