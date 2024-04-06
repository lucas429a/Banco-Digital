import { Card } from "./card"
import style from "./index.module.scss"

export const TranfersList = ({list , removeTransfer})=>{
 

    return (
        <section className="container" >
            <h2 className="font three" >Resumo financeiro</h2>
            <ul>{list.map((li)=>(
                <Card key={li.id} id={li.id} description={li.description} transferValue={li.transferValue} tranferStates={li.tranferState} removeTransfer={removeTransfer} />
            ))}</ul>
        </section>
    )
}