import './App.scss';

// Start Importing components
import Sidebar from './component/sidebar/sidebar.component'
import Topbar from './component/topbar/topbar.component'
import AddItemPage from './page/additempage/additem.page';
import FulfillPage from './page/fulfillpage/fulfill.page';
// End Importing components

// Start importing page components
import HomePage from './page/homepage/home.page'
import RequestItemPage from './page/requestitempage/request_item.page';
import RequestListPage from './page/requestlistpage/requestlist.page';
import StoreListPage from './page/storelistpage/storelist.page';
// End importing page components



function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='App-content'>
        <Topbar />
        {/* <HomePage /> */}
        {/* <RequestItemPage /> */}
        {/* <FulfillPage /> */}
        {/* <RequestListPage /> */}
        {/* <StoreListPage /> */}
        <AddItemPage />
      </div>
    </div>
  );
}

export default App;
