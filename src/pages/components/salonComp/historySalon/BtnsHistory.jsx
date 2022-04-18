const BtnsHistory=({setCurrentStateHistory,listOrderHistory})=>{
    const HandleStateHistory = (e) => {
        const currentState = e.target.value;
        return setCurrentStateHistory(currentState);
      };

return(

    <div className="btnsHistorySalon">
        <div className="btnGenerados">
            <button className="btnGenerados"
            value={"all"}
            onClickCapture={HandleStateHistory}
            >Generados</button>
        </div>
        <div className="EnProcesoChef">
            <button className=""
            value={"generado"}
            onClickCapture={HandleStateHistory}
            >Por entregar</button>
        </div>
        <div className="btnEntregadosMesero">
            <button className=""
            onClickCapture={HandleStateHistory}
            value={"EntregadoAlUsuario"}>Entregado</button>
        </div>
    </div>

)
}
export default BtnsHistory;