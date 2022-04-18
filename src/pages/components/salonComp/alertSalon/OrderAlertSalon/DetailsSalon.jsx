const DetailsSalon=({details})=>{

    const {
        extraOrder1,
        extraOrder2,
        nameItemOrder,
        noteOrder,
        numItemOrder,
        optionOrder,
      } = details;
 
     return (
         <div className="detailsOrderCardAlert">
            <p className="num">{numItemOrder}</p>
            <div>
                 <h3>{nameItemOrder}</h3>
                 <p><span>Detalle:  </span>{optionOrder}</p>
                 <p>
                     {extraOrder1}
                     {extraOrder2}
                 </p>
                 <p><span>Nota:</span> {noteOrder}</p>
             </div>
        </div>
      )
}
export default DetailsSalon;