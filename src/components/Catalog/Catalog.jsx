import Card from './Card/Card'
import s from './Catalog.module.css'
export default function Catalog(){
    return(
        <div className={s.catalog}>
            <div className="container">
                <div className={s.catalog__inner}>
                    <h2 className={s.title}>Каталог</h2>
                    <div className={s.row}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    )
}