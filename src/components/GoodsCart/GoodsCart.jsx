import React from 'react';
import styles from './GoodsCart.module.css';

const GoodsCart = ({fruits}) => {


    return (
        <div className={styles['goodsCart']}>
            {fruits.map((fruit, index) => (
                <div key={index} className={styles['fruitItem']}>
                    <img src={fruit.url} alt={fruit.name} />
                    <h3 className={styles['fruitName']}>{fruit.name}</h3>
                    <p className={styles['fruitPrice']}>{fruit.price}</p>
                </div>
            ))}
        </div>
    );
};

export default GoodsCart;
