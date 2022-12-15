import { LeadGrid } from "./components/LeadGrid/LeadGrid"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./components/Layout/SharedLayout"
import { DroneBuyPage } from './components/Drone/DroneBuyPage';
import { IconGasStation, IconGauge, IconManualGearbox } from '@tabler/icons';
import { AuthContext, AuthProvider } from "./auth/AuthContext";
import { AuthenticationLogin } from "./auth/AuthenticationImage/AuthenticationLogin";
import { AuthenticationRegistration } from "./auth/AuthenticationImage/AuthenticationRegistration";
import { useContext } from "react";

const cardData =
{
  droneName: "Mavic 3",
  photoUrl: "https://images.unsplash.com/photo-1650943043200-a9d69dcc52a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWF2aWMlMjAzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  link: "#",
  information: "Drone FPV Max",
  price: 800,
  data: [
    { label: '100 km/h in 4 seconds', icon: IconGauge },
    { label: 'Automatic', icon: IconManualGearbox },
    { label: 'Electric', icon: IconGasStation },
  ]
}

function App() {
  return (
    <AuthProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route index element={<LeadGrid />} />
          </Route>

          <Route path='/users/sign_in' element={<AuthenticationLogin />}></Route>
          <Route path='/users/sign_out' element={<AuthenticationLogin />}></Route>
          <Route path='/users' element={<AuthenticationRegistration />}></Route>
          <Route path='/drone/:id' element={<DroneBuyPage cardData={cardData} />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
