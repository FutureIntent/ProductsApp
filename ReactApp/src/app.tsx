import Axios from "@configs/Axios";
import { useEffect } from "preact/hooks";

export function App() {

  useEffect(() => {

    Axios.get('/zxc')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  }, []);

  return (
    <div>
      zxc
    </div>
  );
}

export default App;