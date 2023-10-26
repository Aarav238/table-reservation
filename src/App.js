import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReservationForm from "./components/ReservationForm";
import Success from "./components/Success";

function App() {
  return (
   
   <div  className="flex justify-center items-center w-full">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReservationForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
