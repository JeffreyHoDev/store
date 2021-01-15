import './App.scss';

// Start Importing components
import Sidebar from './component/sidebar/sidebar.component'
import Topbar from './component/topbar/topbar.component'
import AddItem from './component/addItem/addItem.component'
import FulfillPage from './page/fulfillpage/fulfill.page';

// End Importing components

// Start importing page components
import HomePage from './page/homepage/home.page'
import LoginPage from './page/loginpage/login.page';
import RequestItemPage from './page/requestitempage/request_item.page';
import RequestListPage from './page/requestlistpage/requestlist.page';
import StoreListPage from './page/storelistpage/storelist.page';
import UserManagementPage from './page/usermanagementpage/usermanagement.page'
// End importing page components

// Start Importing React Router
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import EditItemPage from './page/edititempage/edititem.page';
// End Importing React Router

function App() {
  return (
    <Router>
      <div className="App">
      <AddItem />
        <div className='App-content'>
          <Sidebar className='sidebar-main'/>
          <Topbar className='topbar-main'/>
          <div className='main'>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/request_item'>
                <RequestItemPage />
              </Route>
              <Route path='/fulfill/:request_id'>
                <FulfillPage />
              </Route>
              <Route path='/request_list'>
                <RequestListPage />
              </Route>
              <Route path='/user_management'>
                <UserManagementPage />
              </Route>
              <Route path='/store_list'>
                <StoreListPage />
              </Route>
              <Route path='/login'>
                <LoginPage />
              </Route>
              <Route path='/edit/:item_id'>
                <EditItemPage />
              </Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
