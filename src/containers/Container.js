		import React ,{Component} from 'react';		
		import { connect } from "react-redux";
		import CardDeckBody from './CardDeckBody.js';
		import DrawnCardDeck from './DrawnCardDeck.js';



		export default  class Board extends Component{

		  render(){

		    return(
		       <div>
		          <CardDeckBody/>

		          <div>
                         <hr />
		          </div>
		          <DrawnCardDeck/>
		        </div>)
		    }
		}

