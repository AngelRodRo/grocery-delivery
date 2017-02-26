import React from 'react';
import firebase from 'firebase';

class Profile extends React.Component{
	constructor(){
		super();
	}
}

class UserInfo extends React.Component{
	constructor(){
		super();
	}
}


class App extends React.Component {

	constructor() {
		super();
		var config = {
			apiKey: "AIzaSyBaBgGKOx-o818zHDnaCaLRaVgXhU21BPw",
			authDomain: "personalhosting-d5cd6.firebaseapp.com",
			databaseURL: "https://personalhosting-d5cd6.firebaseio.com",
			storageBucket: "personalhosting-d5cd6.appspot.com",
			messagingSenderId: "750940164737"
		};
		firebase.initializeApp(config);

		this.state = {
			list:[]
		}

	}

	componentWillMount(){
		this.firebaseRef = firebase.database().ref('products');
		this.firebaseRef.on("child_added", function(dataSnapshot) {
			let product = dataSnapshot.val();
			let list = this.state.list.slice();
			product.id = dataSnapshot.key;
			list.push(product);
			this.setState({
				list:list
			})

		}.bind(this));
	}

	componentWillUnmount() {
  	this.firebaseRef.off();
	}

	deleteProduct(key){
		let product = this.firebaseRef.child(key)
		product.ref.remove();
	}


	handleClick(){
		// const list = this.state.list.slice();
		let data = {
			name: "Producto 2",
			description: "Description",
			date: new Date()
		}
		// list.push(data);
		this.firebaseRef.push(data);
		// this.setState({list: list});
	}

   render() {
      return (
				<div className="container">
				 <div className="row">
					 <div className="col-md-12">
						 <h1>Mi lista de mercado</h1>
					 </div>
					 <div className="col-md-6">
						 <ListGrocery handleClick={()=> this.handleClick()} items={this.state.list} deleteProduct = {(product) => this.deleteProduct(product)}  />
					 </div>
					 <div className="col-md-6">
						 <a onClick={()=> this.handleClick() } className="btn btn-primary">Add new grocery</a>
					 </div>
				 </div>
			 </div>
      );
   }
}


class ListGrocery extends React.Component{
	render(){
		return(
			<div className="list-group">
				{this.props.items.map(item => <Grocery grocery={item} deleteProduct = { () => this.props.deleteProduct(item.key) }  /> )}
			</div>
		);
	}
}

class Grocery extends React.Component{
	render(){
		return(
		<a href="#" className="list-group-item">
			<div className="row">
				<div className="col-md-2">
					<img src="http://www.imagenesdeamor.pro/wp-content/uploads/2016/09/imagenes-con-frases-de-desamor-8-320x320.jpg" className="img-responsive" width="100" height="100"></img>
				</div>
				<div className="col-md-7">
					<h4 className="list-group-item-heading">{this.props.grocery.name}</h4>
					<p className="list-group-item-text">{this.props.grocery.description}</p>
				</div>
				<div className="col-md-3">
					<button onClick={ () => this.props.deleteProduct()} className="btn btn-danger">Eliminar</button>
				</div>
			</div>
		</a>
		);
	}
}

export default App;
