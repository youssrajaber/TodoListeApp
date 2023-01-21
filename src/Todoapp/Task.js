
export default function Task({done,txt,delf,donef}) {
  return (
    <div>
    <div className="parent">
          <div className="d-flex  align-items-center ">
              <div style={done ? {textDecoration:'line-through',color:' rgba(93,12,255,1)',fontSize:'18px'} : {color:'black'}}>{txt}</div>
          </div>
          <div className="d-flex  align-items-center td">
            <span className="deleticon"><i class="fas fa-trash-alt" onClick={delf}></i></span>
            <span className="ml-2 doneicon "><i class="fa-sharp fa-solid fa-circle-check" onClick={donef} ></i></span>
          </div>
    </div>
      {/* <hr /> */}
    </div>
  )
}
