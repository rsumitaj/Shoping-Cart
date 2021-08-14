import React from 'react';
import Cart from './cart';
import Navbar from './Navbar'

class App extends React.Component {

  constructor (){
    super();
    this.state = {
      products:[
        {
          title:"Macbook Air M1",
          price:79999,
          Qty:5,
          img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000',
          id:1
        },
        {
          title:"Apple Iphone",
          price:89999,
          Qty:2,
          img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-silver?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1579299535944',
          id:2
        },
        {
          title:"Apple Watch",
          price:19999,
          Qty:8,
          img:'https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg',
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

  handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id!== id);

    this.setState({
      products:items
    });
  }

  getCartCount = () =>{
    const {products} = this.state;

    let count =0;

    products.forEach((product) => {
      count += product.Qty ;
    })

    return count;
  }

  getCartTotal = () =>{
    const {products} =this.state

    let cartTotal = 0;

    products.map((product)=>{
      cartTotal = cartTotal + product.Qty*product.price ;
    });

    return cartTotal ;
  }

  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />

        <Cart 
              products = {products}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}  
              onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style={ {fontSize:20,padding:20} }>
          TOTAL: Rs.{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
