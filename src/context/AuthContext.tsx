"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, logoutAction } from "@/app/actions";

type User = {
    id?: string;
    name: string;
    email: string;
    profileImage?: string;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check for session on mount
        const checkSession = async () => {
            const currentUser = await getCurrentUser();
            if (currentUser) {
                setUser(currentUser as User);
            }
        };
        checkSession();
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        router.push("/dashboard");
    };

    const logout = async () => {
        await logoutAction();
        setUser(null);
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
