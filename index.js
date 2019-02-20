class ReactApp extends React.Component{
    state={
        name:String,
        age:Number,
        height:String
      }
    render(){
        return(
            <div className="basic">
            <h1>Hello World</h1>
            <button onClick={this.handaling}>Find information</button><br/>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            <p>Height: {this.state.height}</p>
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
ReactDOM.render(<ReactApp />, document.getElementById('reactApp'));