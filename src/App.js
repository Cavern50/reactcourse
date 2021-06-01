import React from 'react';
import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';

import { useDispatch } from 'react-redux'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}









// class App extends React.Component {

//   componentDidMount() {
//     axios.get('/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     })
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path="/" exact><Home items={this.props.items ? this.props.items : []} /></Route>
//           <Route path="/cart" component={Cart} exact />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: items => dispatch(setPizzasAction(items)),
//   }
// }

export default App;
