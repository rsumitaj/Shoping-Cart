import React from 'react';
import Cart from './cart';
import Navbar from './Navbar'
import  firebase from 'firebase';

class App extends React.Component {

  constructor (){
    super();
    this.state = {
      products:[],
      loading:true
    }
    //this.increaseQuantity = this.increaseQuantity.bind(this) ;
  }

  componentDidMount(){
    // firebase
    //     .firestore()
    //     .collection('products')
    //     .get()
    //     .then((snapshot)=>{
    //       snapshot.docs.map((doc)=>{
    //         console.log(doc.data());
    //       });

    //       const products = snapshot.docs.map((doc)=>{
    //         const data = doc.data();
    //         data['id'] = doc.id;
    //         return data;
    //       })

    //       this.setState({
    //         products
    //       })

    //     });

    firebase
        .firestore()
        .collection('products')
        .onSnapshot((snapshot)=>{
          snapshot.docs.map((doc)=>{
            console.log(doc.data());
          });

          const products = snapshot.docs.map((doc)=>{
            const data = doc.data();
            data['id'] = doc.id;
            return data;
          })

          this.setState({
            products
          })

        });

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
      products:items,
      loading:false
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
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />

        <Cart 
              products = {products}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}  
              onDeleteProduct = {this.handleDeleteProduct}
        />

        {loading && <h1>Loading Products...</h1>}
        <div style={ {fontSize:20,padding:20} }>
          TOTAL: Rs.{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
