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
  handleIncreaseQuantity = (product) => {
    const {products}=this.state;
    const index = products.indexOf(product);

    products[index].Qty +=1;

    this.setState({
      products
    });
  }

  handleDecreaseQuantity = (product) => {
    const {products}=this.state;
    const index = products.indexOf(product);
    
    if(products[index].Qty === 0){
      return;
    }

    products[index].Qty -=1;

    this.setState({
      products
    });
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
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}  
          />
          )
        })}
      </div>
    );
  }
}

export default Cart;