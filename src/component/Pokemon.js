import React from 'react'
import axios from 'axios'
const url = "http://localhost:8080/pokemon";

class Pokemon extends React.Component {
        constructor(props){
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
      }
      handleSubmit(e){
        e.preventDefault(e)
      }
      handleChange(e){
          this.setState({[e.target.name]: e.target.value})
          console.log({[e.target.name]: e.target.value})
      }

    async getPokemon(){
         try{
          const res = await axios.get(url)
          this.setState({pokedex :res.data}) 
          console.log(res.data) 
        } catch(e){
          console.error(e);
        }
      }
      componentDidMount(){
          console.log(this.getPokemon())
      }
    render() {
        return (
            <div>
               {this.state.pokedex &&  this.state.pokedex.map(poke=><li> Name:{poke.name} Type: {poke.type} Level:{poke.level} Ability: {poke.ability}</li>)}


               <form 
               onChange={this.handleChange}
               onSubmit={this.handleSubmit}
               >
               <label>Name <input type="text" placeholder="name" name="name"/>
                </label>
               <label>Type <input type="text" placeholder="type" name="type"/>
                </label>
               <label>Level <input type="text" placeholder="level" name="level"/>
                </label>
               <label>Found <input type="text" placeholder="found" name="found"/>
                </label>
                <label>Ability <input type="text" placeholder="ability" name="ability"/>
                </label>
                <input type="submit"/>
               </form>
            </div>
        )
    }
}

export default Pokemon
