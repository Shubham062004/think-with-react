
// let container= document.getElementById("react-container");
// ReactDOM.render("Hello! Welcome to React",container)
// container.innerHTML="Hello! Welcome to JS"

// function kalviclass (){
//         return (
//             React.createElement(
//                 'div',
//                 {id:"h1-tag"},
//                 'Hey Kalvians! Welcome to React Learning',
//                 React.createElement('div',null,`Let's rock and roll`))  //(tag_name,props,children(message))
//          )
//         }

// ReactDOM.render(kalviclass() ,container)

class klaviclass extends React.Component{
    render(){
        return (
                    React.createElement(
                    'div',
                    {id:"h1-tag"},
                    'Hey Kalvians',
                    React.createElement('div',null,`Let's rock and roll with classes`))  //(tag_name,props,children(message))
                )



            }
}

let container= document.getElementById("react-container");
ReactDOM.render(React.createElement(klaviclass),container)