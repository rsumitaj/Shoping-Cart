import React from 'react' ;

class CartItem extends React.Component {

  // arrow function automatically binds "" this """ 
  increaseQuantity = () => {
    // console.log("this.state",this.state);

    // set state form -1 
    // this.setState({
    //   Qty:this.state.Qty+1
    // },(callback is executed whenever the state is finshed updating if we want to perform some action as state is asynchronus)=>{});

    // in case there is multiple this.state then in form -1 the last this.state will be executed but in form-2 all will be exexuted

    // set state form -2 = if previous state required use this
    this.setState((prevState) => {
      return{
        Qty:prevState.Qty+1
      }
    });
  }

  

  decreaseQuantity = () => {

    const {Qty} = this.state ;
    if(Qty === 0){
      return;
    }

    this.setState((prevState) => {
      return{
        Qty:prevState.Qty-1
      }
    });
  }

  render(){
    const {title,price,Qty}=this.props.product;
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
              onClick={this.increaseQuantity}
            />
            <img 
              alt="decrease" 
              className="action-icons" 
              src="https://image.flaticon.com/icons/png/512/992/992683.png" 
              onClick={this.decreaseQuantity}
            />
            <img 
              alt="delete" 
              className="action-icons" 
              src="https://img-premium.flaticon.com/png/512/3368/premium/3368158.png?token=exp=1628330026~hmac=27d8d700647101fe0bfb574f21d287ee" 
            />
          </div>
        </div>

      </div>
    );
  }
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