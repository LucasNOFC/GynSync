import { createContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("token");

            if (token) {
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                try{
                    const res = await api.get("/me");
                    setUser(res.data);
                } catch {
                    localStorage.removeItem("token");
                }
            }

            setLoading(false);
        }

        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}