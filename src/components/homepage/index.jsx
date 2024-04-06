import { useState } from "react"
import { FormSection } from "../FormSection"
import { TranfersList } from "../TransfersSection"
import { HeaderSection } from "../header"
import style from "./ondex.module.scss"

export const Homepage = ()=>{
    const [list , setList] = useState([]);

    const addtransfer = (newTransfer) => {

        const newList ={... newTransfer , id: crypto.randomUUID()}
        setList([...list,newList])
    }

    const removeTransfer = (removeid) =>{

        const newTransferList = list.filter((li) => li.id !== removeid)
        setList(newTransferList)
    }
    const totalbalance = list.reduce((previousvalue,balance)=>{
       if(balance.tranferState === "entrada"){
        return previousvalue + parseFloat(balance.transferValue)
       }else{
        return previousvalue - parseFloat(balance.transferValue)
       }
    },0)

    return(
        <>
                <HeaderSection/>
                <div className={style.display} >  
                    <FormSection totalbalance={totalbalance} addtransfer={addtransfer}/>
                    <TranfersList list={list} removeTransfer={removeTransfer} />
                </div>
                
        </>
    )
}