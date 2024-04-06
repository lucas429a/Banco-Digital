import style from "./index.module.scss"

export const HeaderSection = ()=>{
    return(
        <>
            <div className="container" >
                <h1 className="font two" >Nu <span className={style.color} >Kenzie</span></h1>
            </div>
        </>
    )
}