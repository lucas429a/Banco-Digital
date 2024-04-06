import { useState } from "react"
import style from "./index.module.scss"

export  const FormSection = ({addtransfer , totalbalance})=>{
    const [description , setDescription] = useState("")
    const [transferValue ,setTranferValue] = useState ("")
    const [tranferState , setTransferState] = useState("entrada")

    const submit = (event)=>{
        event.preventDefault();
        addtransfer({description , transferValue , tranferState})
        setDescription("");
        setTranferValue("");
    }

    return(
        <>
            <div className="container" >
                <form onSubmit={submit} >
                    <p className="font four" >Descrição</p>
                    <input 
                    className={style.input}
                    type="text" 
                    placeholder="Digite sua descrição"
                    id={description}
                    value ={description}
                    onChange={(event)=>setDescription(event.target.value)}   
                    />
                    <p className="font four" >Valor R$</p>
                    <input 
                    className={style.input}
                    type="number" 
                    placeholder="Insira o valor"
                    id={transferValue}
                    value ={transferValue}
                    onChange={(event)=>setTranferValue(event.target.value)}   
                    />
                    <div className={style.display} >
                        <p className="font four" >Tipo de valor</p>
                        <select className={style.select} value={tranferState} onChange={(event)=>setTransferState(event.target.value)} name="Transfer" id="transfer">
                            <option  value="entrada">entrada</option>
                            <option value="saida">saida</option>
                        </select>
                        <button className="button one" > inserir valor </button>
                    </div>
                </form>
                <div className={style.balance} >
                    <p className="font three" >Valor total das transações</p>
                    <p className={style.result} > R$ {totalbalance}</p>
                </div>
            </div>
        </>
    )
}