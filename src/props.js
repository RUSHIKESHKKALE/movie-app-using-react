import { Component } from "react";

class Student extends Component{

    render(){
        console.log(this.props);
        const {name}=this.props;
        return (
        <h1>hello {name}</h1>
        )
    }
}


// function Student(props){
//    const {name,marks}=props;
//    return(
//     <>
//     <h1>hello {name}</h1>
//     </>
//    )
// }

Student.defaultProps={
    name:"student"
}
export default Student;