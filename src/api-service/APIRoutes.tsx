import APIConfig from "./APIConfig";

const APIRoutes = {
    getLoginUrl: () => APIConfig.URL + "users/sign_in",
    getSignUpUrl: () => APIConfig.URL + "users",
    getSignOutUrl: () => APIConfig.URL + "users/sign_out",
    getCurrentUser: () => APIConfig.URL + "user",
    DroneRoute: () => APIConfig.URL + "drones",
}

export default APIRoutes;
