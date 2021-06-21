


function Plan(props){
    console.log('plan')

    return(
        <>
        
            <li className="shadow p-2 my-2 col-sm-9 col-lg-9"  >{props.value}</li>
            <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{props.senddata(props.id)}}    >X</button>{/* The outline-offset property adds space between an outline and the edge or border of an element.*/}
        
        </>
    )
        
    
}
export default Plan;