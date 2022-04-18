import CardOrderCompletado from "./CardOrderCompletado"

const AllOrderCompletado=({filterOrderCompletado,OrderById})=>{
    return(
        <div className="cardOrderCompletado">
            <div className="descriptionStateAlertSalon">
                <p>Pedidos Listos</p>
              
            </div>
            <div className="contentCardAlertSalon">
                {filterOrderCompletado.map((orderCompletado)=>(
                    filterOrderCompletado?.length>=0?<CardOrderCompletado
                        key={orderCompletado.id}
                        OrderById={OrderById}
                        orderCompletado={orderCompletado}
                    />:null
                ))}
            </div>

        </div>

    )
}
export default AllOrderCompletado;

