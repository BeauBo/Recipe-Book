var React=require('react') ;
var ReactBootstrap = require('react-bootstrap');
var Well = ReactBootstrap.Well;
var Panel = ReactBootstrap.Panel;
var Accordion = ReactBootstrap.Accordion;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Ingredients = require('./ingredients');

window.globalName = '', window.globalIngredients=[];


var Recipes = React.createClass ({
    
    
    
    
    delete: function(index){
        
        this.props.delete(index);
    },
    
    edit: function(name, ingredients){
        
        
            window.globalName = name;
            window.globalIngredients = ingredients;
            document.getElementById('show').click();
            
            
    },
    
    
    eachElement: function(){
        
        var recipes = this.props.recipes ;
        
        return recipes.map(function(recipe, index){
            
            
            
            return (
                
               
        
                <Panel header={recipe.name} key={index} eventKey = {index} bsStyle='success'>
                    <Well>
                       <h2 className='text-center'>Ingredients</h2>
                        <hr />
                        <Ingredients ingredients = {recipe.ingredients}/>
                        <ButtonToolbar>
                            <Button bsStyle='danger' onClick = {() =>this.delete(index)} >Delete</Button>
                            <Button bsStyle='primary'onClick = { () => this.edit(recipe.name, recipe.ingredients.join(','))}>Edit</Button>
                        </ButtonToolbar>
                        
                    </Well>
                </Panel>
                
                
                
                );
            
        }.bind(this));
    },
    
    
     render :function(){
         
       
        
         
       return(
            
            <div>
                <Well>
                  <Accordion>
                    {this.eachElement()}
                  </Accordion>  
                </Well>
            </div>
            
            );
       
    }
    
}); 
    
   


module.exports = Recipes;




