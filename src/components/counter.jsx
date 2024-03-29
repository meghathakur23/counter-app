import React, { Component } from 'react';
class Counter extends Component {
    componentUpdate(prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //ajax call the new data from the server 
        }
    }
    

    componentWillUnmount(){
        console.log('Counter-Unmount');
    }
    //constructor(){
    //    super ();
    //    this.handleIncrement = this.handleIncrement.bind('this');
    //}
    
    render() {
        console.log("Counter-Rendered");

        return( 
            <div> 
                
                <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
                <button 
                onClick={()=> this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() =>this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete</button>
            
            </div>
        );
    }

    getBadgeclasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

formatCount(){
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
}
}
 
export default Counter;

