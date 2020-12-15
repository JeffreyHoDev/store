import './App.scss';

// Start Importing components
import Sidebar from './component/sidebar/sidebar.component'
import Topbar from './component/topbar/topbar.component'
import FulfillPage from './page/fulfillpage/fulfill.page';
// End Importing components

// Start importing page components
import HomePage from './page/homepage/home.page'
import RequestItemPage from './page/requestitempage/request_item.page';
import RequestListPage from './page/requestlistpage/requestlist.page';
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
        <RequestListPage />
      </div>
    </div>
  );
}

export default App;
