class Item extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>From item class</h1> */}
                <p>Titlle: {this.props.title}</p>
                <p>Year: {this.props.year}</p>

            </div>

        )
    }
}
// ReactDOM.render(<Item title="Leap year" year={2020}/>, document.getElementById('propId'));
class ReactApp extends React.Component{
    state={
        name:String,
        age:Number,
        height:String
      }
     movies=[
          {
              title:"Dark Pheonix",year:2019
          },
          {
            title:"Avenger End Game",year:2019
          },
          {
            title:"Avengers Infinity war",year:2018
          },
          {
            title:"Thor Ragnorok",year:2018
          },
          {
            title:"Bumblee Bee",year:2018
          }
        ,
        {
            title:"Mirror",year:2019
          },
          {
            title:"Captain Marvel",year:2018
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
                this.movies.map(movies=><Item title={movies.title}
                    year={movies.year}/>)
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
