import APIRoutes from "../APIRoutes";
import APIService from "../APIService";
import Drone from "../../models/drone/Drone"

const route = APIRoutes.DroneRoute();

const AuthService = {
    show: async (drone : Drone) => APIService.post<any>(route,drone),
    create: async (drone : Drone) => APIService.post<any>(route,drone),
    update: async (drone : Drone) => APIService.post<any>(route,drone),
    destroy: async (drone : Drone) => APIService.post<any>(route,drone),
}

export default AuthService;
