import React from "react";
import { OrderDetailsProvider, useOrderDetails } from "./context/OrderDetails";
import SummaryForm from "./SummaryForm";
import Options from './pages/entry/Options'

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <OrderDetailsProvider>
          <SummaryForm />
        </OrderDetailsProvider>
      </div>
    </div>
  );
}

export default App;
