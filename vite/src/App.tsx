import { Bridge, CustomRpcs } from "@synapsecns/widget";
import { useEthereumWallet } from "./hooks/useEthereumWallet";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const customRpcs: CustomRpcs = {
  1: "https://ethereum.my-custom-rpc.com",
  10: "https://optimism.my-custom-rpc.com",
  42161: "https://arbitrum.my-custom-rpc.com",
};

function App() {
  const [count, setCount] = useState(0);

  const { web3Provider } = useEthereumWallet();

  return (
    <>
      <div>
        <Bridge web3Provider={web3Provider} customRpcs={customRpcs} />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
