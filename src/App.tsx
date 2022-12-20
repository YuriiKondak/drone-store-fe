import { AuthProvider } from "./auth/AuthContext";
import DroneStoreRoutes from "./routes/DroneStoreRoutes"

function App() {
  return (
    <AuthProvider >
        <DroneStoreRoutes />
    </AuthProvider>
  );
}

export default App;
