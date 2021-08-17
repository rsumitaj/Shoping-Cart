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
    this.db = firebase.firestore();
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
      this.db
        .collection('products')
        .onSnapshot((snapshot)=>{

          const products = snapshot.docs.map((doc)=>{
            const data = doc.data();
            data['id'] = doc.id;
            return data;
          })

          this.setState({
            products,
            loading:false
          })

        });

  }

  handleIncreaseQuantity = (product) => {
    const {products}=this.state;
    const index = products.indexOf(product);

    // products[index].Qty +=1;

    // this.setState({
    //   products
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
        .update({
          Qty:products[index].Qty + 1
        })
        .then( () => {
          console.log('Updated Succefully')
        })
        .catch((err)=>{
          console.log('Error :' ,err);
        })

  }

  handleDecreaseQuantity = (product) => {
    const {products}=this.state;
    const index = products.indexOf(product);
    
    if(products[index].Qty === 0){
      return;
    }

    // products[index].Qty -=1;

    // this.setState({
    //   products
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
        .update({
          Qty:products[index].Qty - 1
        })
        .then( () => {
          console.log('Updated Succefully')
        })
        .catch((err)=>{
          console.log('Error :' ,err);
        })
        
  }

  handleDeleteProduct = (id) => {
    const {products} = this.state;

    // const items = products.filter((item) => item.id!== id);

    // this.setState({
    //   products:items,
    //   loading:false
    // });

    const docRef = this.db.collection('products').doc(id);

    docRef
        .delete()
        .then( () => {
          console.log('Deleted Succefully')
        })
        .catch((err)=>{
          console.log('Error :' ,err);
        })

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

  addProduct = () => {
    this.db
        .collection('products')
        .add({
          img:' ',
          price:900,
          Qty:3,
          title:'Apple Watch'
        })
        .then((docRef)=>{
          console.log("product has been added ",docRef)
        })
        .catch((err)=>{
          console.log("error: ",err)
        })
  }

  render(){
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style = {{padding:20,fontSize:20,margin:10,borderRadius:10}} >Add a product</button> */}

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
