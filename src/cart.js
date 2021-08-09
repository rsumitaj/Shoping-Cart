import React from 'react' ;
import CartItem from './cartItem';

class Cart extends React.Component {
  constructor (){
    super();
    this.state = {
      products:[
        {
          title:"Macbook Air 1",
          price:79999,
          Qty:5,
          img:' ',
          id:1
        },
        {
          title:"Apple Iphone",
          price:89999,
          Qty:2,
          img:' ',
          id:2
        },
        {
          title:"Apple Watch",
          price:19999,
          Qty:8,
          img:' ',
          id:3
        }
      ]
    }
    //this.increaseQuantity = this.increaseQuantity.bind(this) ;
  }

  render(){
    const {products} = this.state;
  
    return(
      <div className="cart">
        {products.map((product)=>{
          return( 
           < CartItem  
              product={product} 
              key={product.id} 
          />
          )
        })}
      </div>
    );
  }
}

export default Cart;