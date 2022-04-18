import CardHistory from "./CardHistory";

const SectionShowHistory=({filterOrderHistory})=>{

return(
    <div className="sectionShowHistory">
    {filterOrderHistory.map((list)=>(
        filterOrderHistory?.length>=0?<CardHistory
        key={list.id}
        list={list}
        />:null

    ))}
</div>
)
}
export default SectionShowHistory;