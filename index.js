//stateFull component
// class Item extends React.Component{

//     render(){
//         return(
//             <div>
//                 {/* <h1>From item class</h1> */}
//                 <p>Titlle: {this.props.title}</p>
//                 <p>Year: {this.props.year}</p>
//                 <p>Genre: {this.props.genre}</p>



//             </div>

//         )
//     }
// }

// functional component or stateless component
const Item=(props)=>(
        <div>
                <p>Titlle: {props.title}</p>
                <p>Year: {props.year}</p>
                <p>Genre: {props.genre}</p>
            </div>       
)
class ReactApp extends React.Component{
    state={
        name:String,
        age:Number,
        height:String
      }
     movies=[
          {
              title:"Dark Pheonix",year:2019,genre:"Drama"
          },
          {
            title:"Avenger End Game",year:2019,genre:"Action"
          },
          {
            title:"Avengers Infinity war",year:2018,genre:"Sci-fi"
          },
          {
            title:"Thor Ragnorok",year:2018,genre:"Action"
          },
          {
            title:"Bumblee Bee",year:2018,genre:"Drama"
          }
        ,
        {
            title:"Mirror",year:2019,genre:"Drama"
          },
          {
            title:"Captain Marvel",year:2018,genre:"Sci-fi"
          }
      ]
    render(){
        return(
            <div className="basic">
            <h1>Hello World</h1>
            <button onClick={this.handaling}>Find information</button><br/>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            <p>Height: {this.state.height}</p>
            <p>Message from prop is: {this.props.message}</p>
            <p>Message from prop is: {this.props.info}</p>
            <h3>List of Movies</h3>
            {
                this.movies.map(movie=><Item title={movie.title}
                    year={movie.year}
                    genre={movie.genre}/>)
            }

            </div>

        )
    }
    handaling=(event)=>{
        this.setState({
            name:"Keshar",
            age:20,
            height:"5'8 inch"
        })
    }
}
// ReactDOM.render(<ReactApp />, document.getElementById('reactApp'));
ReactDOM.render(<ReactApp info={20} message="this is from prop"/>,document.getElementById("reactApp"));
