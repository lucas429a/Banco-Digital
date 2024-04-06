import style from "./index.module.scss"

export const Card = ({description, id ,transferValue ,tranferState,removeTransfer})=>{
    return(
        <li className="container" >
            <div className={style.display} >
                <div>
                    <h2 className="font three" >{description}</h2>
                    <p className=" font six " >{tranferState}</p>
                </div>
                <div>
                    <p className="font six" > R$ {transferValue}</p>
                    <button className="font six button twwo" onClick={()=>removeTransfer(id)} >excluir</button>
                </div>
            </div>
        </li>
    )
}