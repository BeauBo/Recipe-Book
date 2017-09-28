var React=require('react') ;
var ReactBootstrap = require('react-bootstrap');
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;

var Ingredients = React.createClass({
    
   
    render: function(){
        
        var ingredients = this.props.ingredients.map(function(ingredient, index){
            
            return (
                
                <ListGroupItem key = {index}>{ingredient}</ListGroupItem>
                
                );
            
        });
        
        return(
            
                <ListGroup>{ingredients}</ListGroup>            
            );
    }
    
});

module.exports = Ingredients;