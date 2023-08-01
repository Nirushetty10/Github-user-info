import React, { Component } from 'react'
import "./App.css"
// import Nav from './Components/Zalora/Nav/Nav'
// import Demo from './Components/Demo/Demo'
// import ContactManager from './Components/ContactManager/ContactManager'
// import Timer from './Components/Timer/Timer'
// import SearchBox from './Components/SearchBox/SearchBox'
// import NavBar from './Components/NavBootstrap/NavBar/NavBar'
// import Nav from './Components/Nav1/Nav/Nav'
// import Todo from './Components/Todo/Todo'
// import Task from './Components/Task/Task'
// import Cource from './Components/Cource/Cource'
// import Array from './Components/Array/Array'
// import MobileNumber from './Components/MobileNumber/MobileNumber'
// import MyComponent from './Components/D3/D3'
// import BarChart from './Components/D3/D3'
// import Weather from './Components/Weather/Weather'
// import Form from './Components/Style/Form/Form'
// import Layout from './Components/GitHubApiProject/Layout/Layout'
// import HomePage from './Material-ui/Project/HomePage';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import AtMedia from './Components/AtMedia/AtMedia'
// import MainPage from './Components/Food delivery/MainPage/MainPage.jsx'
// import Comment from './Components/ReduxTask/Comment';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import Unsplash from './Components/Unsplash/Unsplash.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Components/axios/Form';
import Display from './Components/axios/Display';

export default class App extends Component {
  
  render() {
    // let data = [{id:1, name: "Raju", "mobile":9876543210}]
    // const theme = createTheme({
    //   typography: {
    //     h3: {
    //       fontSize: '1.5rem'
    //     },
    //     h5 : {
    //       fontSize: '1.2rem'
    //     },
    //     h6: {
    //       fontSize: '0.8rem',
    //       color : "#bcb9b9"
    //     }
    //   },
    // });
    return (
      <div>
        {/* <Nav /> */}
        {/* <NavBar /> */}
        {/* <Nav /> */}
        {/* <Demo /> */}
        {/* <Provider store={store}>
          <ContactManager/>
        </Provider> */}
        
        {/* <Timer /> */}
        {/* <SearchBox /> */}
        {/* <Todo />
         */}
         {/* <Task / */}
         {/* <Cource /> */}
         {/* <Array /> */}
         {/* <MobileNumber /> */}
         {/* <LinePlot data={data}/> */}
         {/* <Weather /> */}
         {/* <Form /> */}
         {/* <Layout /> */}
         {/* <ThemeProvider theme={theme}>
         <HomePage/>
         </ThemeProvider> */}
          {/* <AtMedia /> */}
         {/* <MainPage /> */}
         {/* <Provider store={store}>
            <Comment />
         </Provider> */}
         {/* <Unsplash /> */}
         <BrowserRouter>
           <Routes>
              <Route path='/' element={<Form />}/>
              <Route path='/display' element={<Display />}/>
           </Routes>
         </BrowserRouter>
      </div>
    )
  }
}
