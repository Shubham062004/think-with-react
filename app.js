// Part I React 2
    // ReactDOM.render("Hello! Welcome to React",container);

// Part I React 3 and Part II
    // const Container = () => {
    //     return React.createElement(`div`,null,`Hey Kalvians! welcome learning React`,
    //     React.createElement(`div`,null,`Let's Rock and Roll`)
    //     )
    // }

const container = document.getElementById('react-container')

// ReactDOM.render(React.createElement(Container),container)

class ReactContainer extends React.Component{
    render(){
        return (
            <div>Hello! Welcome to Kalvium   
               <div>This is babel</div>
           </div> )
    }
}
ReactDOM.render(<ReactContainer/>,container);