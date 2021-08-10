import React from 'react' ;

const CartItem = (props) => {

    const {title,price,Qty}=props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
    } = props ;
    return (
      <div className="cart-item">

        <div className="left-block">
          <img style={styles.image} />
        </div>

        <div className="right-block">
          <div style={{fontSize:25}}>{title}</div>
          <div style={{color:'#777'}}>Rs {price}</div>
          <div style={{color:'#777'}}>Qty : {Qty}</div>
          <div className="cart-item-actions">
            {/*  buttons */}
            <img 
              alt="increase" 
              className="action-icons" 
              src="https://image.flaticon.com/icons/png/512/1828/1828926.png" 
              onClick={() => onIncreaseQuantity(product)}
            />
            <img 
              alt="decrease" 
              className="action-icons" 
              src="https://image.flaticon.com/icons/png/512/992/992683.png" 
              onClick={() => onDecreaseQuantity(product)}
            />
            <img 
              alt="delete" 
              className="action-icons" 
              src="https://img-premium.flaticon.com/png/512/3368/premium/3368158.png?token=exp=1628330026~hmac=27d8d700647101fe0bfb574f21d287ee"
              onClick = {()=>onDeleteProduct(product.id)} 
            />
          </div>
        </div>

      </div>
    );

}

const styles = {
  image :{
    height:110,
    width:110,
    bordeeRadius:4,
    background:'#ccc'
  }
}

export default CartItem;