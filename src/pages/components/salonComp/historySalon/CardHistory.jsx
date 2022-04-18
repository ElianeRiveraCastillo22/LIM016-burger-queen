const CardHistory=({list})=>{
    const listItemOrder=list.itemsOrder;
    return(
            <div className="backgroundCardHistorySalon">
                <div className="cardHistorySalon">
                    <div className="headerOrderHistory">
                        <p><span># de mesa: </span>{list.numOrder}</p>
                        <p><span>nombre:</span> {list.nameOrder}</p>
                    </div>
                    <div className="detailsHistoryOrderSalon">
                        {listItemOrder.map((item ) => {
                        return <p>○ {item.nameItemOrder}</p>
                        })}
                    </div>
                    <p className="TotalHistory"><span>Total:</span>S/. {list.totalPriceOrder}</p>
                </div>
            </div>

    )
}
export default CardHistory;