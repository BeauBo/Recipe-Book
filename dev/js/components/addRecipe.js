var React = require ('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var Well = ReactBootstrap.Well;



console.log(window.globalName);
//require('bootstrap');

var AddRecipe = React.createClass({
    
    getInitialState: function() {
        
        return({ showModal: false });
        
    },
    
    close: function(){
      this.setState({showModal: false});
      window.globalName='';
      window.globalIngredients=[];
     
    },
    
    open: function(){
        this.setState ({showModal: true});
        
        
        if(document.getElementById('name') && document.getElementById('ingredients')){
            
            document.getElementById('name').value = window.globalName;
            document.getElementById('ingredients').value = window.globalIngredients;
            if(window.globalName != ''){
                document.getElementById('addRecipe').innerHTML = 'Edit Recipe';
                document.getElementById('addButton').innerHTML = 'Edit Recipe';
            }
        
        }
        else requestAnimationFrame(this.open);
        
    },
    
    // add recipe 
    
    add: function(){
        
       var exist = false;
       var name = this.refs.name.value;
       var ingredients = this.refs.ingredients.value.split(',');
       for ( var i = 0; i < this.props.recipes.length; i++){
           if (name == this.props.recipes[i].name){
               this.props.edit(name, ingredients, i);
               exist = true;
               break;
           }
        
       }
       
       if (!exist && name != '' && ingredients != []) {
           this.props.add(name, ingredients); 
        }
       
       this.close();
       
    },
    
    
    
    
    render: function() {
        
        return(

            <div>
                <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.open}
                 id='show'
                >Add Recipe
                </Button>
                
                <Modal show = {this.state.showModal} onHide = {this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title id='addRecipe'>Add a Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Well>
                            <form>
                                <h4>Recipe</h4>
                                <input  ref = 'name'type ='text' className='form-control' id='name' placeholder='Recipe Name'/>
                                <h4>Ingredients</h4>
                                <textarea ref = 'ingredients' className='form-control' id='ingredients' placeholder='Type in ingredients, Seperate, By commas'/>
                            </form>    
                        </Well>
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button 
                        bsStyle = 'primary'
                        onClick = {this.add}
                        id = 'addButton'
                        >Add Recipe</Button>
                        <Button onClick={this.close}>Close</Button>
                        
                    </Modal.Footer>
                </Modal>
            </div>
            
            );
        
    }
    
}); 

module.exports = AddRecipe;