	import React ,{Component} from 'react';
	import {shufflecards,sortcards,deletecards ,sortDrawnCards,shuffleDrawnCard,addDrawnCards} from '../action/action.js';
	import { connect } from "react-redux";
	import Card from '../component/Card.js';
	import OperationButton from '../component/OperationButton.js';


	export class CardDeckBody extends Component{

	    callFunction(item){
		   this.props.deletecards(item.count) ;
		    this.props.addDrawnCards(item) ;
	    }

	    render(){
	    	
	        let element =  this.props.carddata.map((item, i) => {  
	             return (  	     
		           <Card 
		             data={item.value} 
			         onCardSelect={(item) => {this.callFunction(item)}} 
		             item={item}
		             key={i}
		             classtype={item.type}
		             type='deck'
		           />
		          ) 
	        })

	        return(
	            <div className="carddeck">
	             <h1 className="display-4">Card Deck</h1>
	              <div  className="col-md-10"> {element}
	              </div>
	              <OperationButton 
	                shuffle= {() => {this.props.shufflecards()}}
	                sort={() => {this.props.sortcards()}} 
	                sortText="Sort Card Deck" 
	                suffleText="Suffle Card Deck"
	               />
	             </div>
	        )
	    }
	}

	function mapStateToProps(state){
	    return  {
	       carddata : state.cards,
	     }
    };

	export default connect(mapStateToProps,{shufflecards,sortcards,deletecards,sortDrawnCards,shuffleDrawnCard,addDrawnCards})(CardDeckBody);


