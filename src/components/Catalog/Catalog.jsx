import Card from './Card/Card'
import s from './Catalog.module.css'
import {products} from '../../data'
export default function Catalog(){
    return(
        <div className={s.catalog}>
            <div className="container">
                <div className={s.catalog__inner}>
                    <h2 className={s.title}>Каталог</h2>
                    <div className={s.row}>
                        {
                            products.map(product=>{
                                return(
                                    <Card {...product}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}