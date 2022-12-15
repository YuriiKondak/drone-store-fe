import AuthenticationResult from "../models/authentication-models/AuthenticationResult";
import UserModel from "../models/user/UserModel";
import AsyncStorage from "../api-service/AsyncStorage"


const StorageManager = {
    getAuthData: async ()  => {
        const storedUser = await AsyncStorage.getItem("user");
        return JSON.parse(storedUser!) as UserModel
    },

    setAuthData: (data: AuthenticationResult) => {
        AsyncStorage.setItem("userToken", data.auth_token);
        AsyncStorage.setItem("user", JSON.stringify(data.user));
    },

    deleteAuthData: async () => {
        const promises: Promise<void>[] = [];

        promises.push(AsyncStorage.removeItem("userToken"));
        promises.push(AsyncStorage.removeItem("user"));

        await Promise.all(promises);
    },
}

export default StorageManager;
