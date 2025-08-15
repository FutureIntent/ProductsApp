import { store } from '@configs/Redux';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import router from '@pages/router';


const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;