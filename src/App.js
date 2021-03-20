import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

// function App() {
//     return ( 
//     <div className = "App" >
//         <header className = "App-header" >
            
//         <p>Aprenda react da melhor maneira!</p>
//         </header> 
//     </div>
//     );
// }

class App extends React.Component{
    render(){
        return(
            <div>
                 <Header />
                 <Article />
                 <Footer />
            </div>
           
        );
    }

}

export default App;