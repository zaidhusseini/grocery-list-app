import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount(){
    this.retrieveGroceryList();
  }

  postGroceryItem(item){
    console.log('item posted', item)
    axios.post('/add', {description:item.description, quantity: item.quantity})
    .then(response=>{
      console.log('items posted', response)
      this.retrieveGroceryList();
    })
    .catch(err=>{
      console.log('error received', err);
    });
  }

  async retrieveGroceryList(){
    
    try{
      console.log('fetching items from server...');

      let response = await axios.get('/retrieve');

      console.log('response received', response.data);

      this.setState({list: response.data});

    }
    catch(err){
      console.log('received error from server', err);
    }
  }

    
  render () {
    return (<div>
          <AddGrocery postItem={this.postGroceryItem.bind(this)}/>
          <GroceryList list={this.state.list} />
        </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));