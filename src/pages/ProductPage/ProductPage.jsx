import s from './ProductPage.module.css'
import Button from '../../components/Button/Button'
import { useParams } from 'react-router'
import {products} from '../../data'
export default function ProductPage(){
    let {id: productId} = useParams();
    let product = products.find(product => product.id == productId);

    return(
        <div className="container">
            <section className={s.product}>
                <div className={s.img}>
                    <img src={product.img} alt="#" />
                </div>
                <div className={s.body}>
                    <h2 className={s.title}>{product.name}</h2>
                    <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iste quo harum dolorum laudantium consectetur dolor alias commodi perferendis odit.</p>
                    <p className={s.price}>{product.price}$</p>
                    <Button text='В корзину'/>
                </div>
            </section>
        </div>
    )
}