import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description:'',
      quantity:''
    }
  }

  changeDescription(e){
    this.setState({description:e.target.value});
  }

  changeQuantity(e){
    this.setState({quantity:e.target.value});
  }


  render () {
    return (<div>
              Description:<input type="text" value={this.state.description} onChange={this.changeDescription.bind(this)}/>
              Quantity:<input type="text" value={this.state.quantity} onChange={this.changeQuantity.bind(this)}/>
              <button style={{marginTop:10, width: 100, height: 30}}>Add Item</button>
            </div>);
  }
}

export default AddGrocery;

