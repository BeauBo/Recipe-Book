var React = require('react') ;
var Recipes = require('./recipes') ;
var AddRecipe = require ('./addRecipe');
var localStorage = require('localStorage');

var recipes = (typeof localStorage['recipeBook'] !== undefined) ? JSON.parse(localStorage['recipeBook']) : 
                    [
                        {
                            name: 'Chicken & Mushroom Penne Pasta', 
                            ingredients: ['1Tbsp. corn starch', '1cup 25%-less-sodium chicken broth','2 Tbsp. balsamic vinegar',
                            '6 slices bacon','cut into 1-inch pieces','1-1/2 lb. (675 g) boneless skinless chicken breasts',
                            'cut into strips','1-1/2 tsp. dried Italian seasoning','3/4 lb. (340 g) sliced fresh mushrooms',
                            '1/3 cup chopped Italian parsley','2-1/2 cups penne pasta','1/2 cup Touch of Philadelphia Shredded',
                            'Creamy Mozza Cheese']
                        },
                        
                    ];
                    

      

var App = React.createClass({
    
    getInitialState: function(){
        

       return {
           recipes: recipes,
          };
    },
    
    add: function(name, ingredients){
      
      recipes.push({name: name, ingredients: ingredients});
      this.update();
      this.setState({
          recipes: recipes
      })
        
    },
    edit: function(name, ingredients, index){
        recipes[index].name = name;
        recipes[index].ingredients = ingredients;
        this.update();
        this.setState({
            recipes: recipes
        });
    },
   
    
    delete: function (index){
        
        recipes.splice(index,1);
        this.update();
        this.setState({
          recipes: recipes
      });
        
    },
    
    
    
    
    
    update: function(){
       localStorage.setItem('recipeBook', JSON.stringify(recipes)) 
    },
    
     
     render : function(){
          
         return (
             
            <div>
                <h1>Recipes Book</h1>
                <Recipes recipes = {this.state.recipes} delete = {this.delete} />
                <AddRecipe recipes = {this.state.recipes} add = {this.add} edit = {this.edit}/>
          
          
            </div>  
             
             ); 
          
          
      }    
    
});
  
     



module.exports = App;