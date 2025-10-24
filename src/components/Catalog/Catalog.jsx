import Card from './Card/Card'
import s from './Catalog.module.css'
import {products} from '../../data'
import Search from '../Search/Search'
import { useState } from 'react'
export default function Catalog(){
    const [search, setSearch] = useState('');
    let filteredProducts = products.filter(product=>product.name.toLowerCase().includes(search.toLowerCase()))
    return(
        <div className={s.catalog}>
            <div className="container">
                <div className={s.catalog__inner}>
                    <h2 className={s.title}>Каталог</h2>
                    <Search handleChange={(e)=>setSearch(e.target.value)}/>
                    <div className={s.row}>
                        {   filteredProducts.length  ?
                            filteredProducts.map(product=>{
                                return(
                                    <Card key={product.id} {...product}/>
                                )
                            })
                            :
                            <p>Нет товаров по запросу "{search}"</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}