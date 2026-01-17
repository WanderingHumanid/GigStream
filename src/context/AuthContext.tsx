"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Mock User Type
type User = {
    name: string;
    email: string;
    profileImage?: string;
    retirementGoal?: string;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    isVerified: boolean;
    login: (method: 'google' | 'phone') => void;
    logout: () => void;
    verifyIdentity: () => void;
    updateGoal: (goal: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isVerified, setIsVerified] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Load state from local storage on mount
        const storedUser = localStorage.getItem("gigstream_user");
        const storedVerified = localStorage.getItem("gigstream_verified");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (storedVerified) {
            setIsVerified(JSON.parse(storedVerified));
        }
    }, []);

    const login = (method: 'google' | 'phone') => {
        // Simulate login delay
        setTimeout(() => {
            const newUser = {
                name: "Alex Driver",
                email: "alex.driver@gigstream.com",
                profileImage: "https://api.dicebear.com/9.x/avataaars/svg?seed=Alex"
            };
            setUser(newUser);
            localStorage.setItem("gigstream_user", JSON.stringify(newUser));
            router.push("/goals");
        }, 800);
    };

    const logout = () => {
        setUser(null);
        setIsVerified(false);
        localStorage.removeItem("gigstream_user");
        localStorage.removeItem("gigstream_verified");
        router.push("/");
    };

    const verifyIdentity = () => {
        // Simulate verification delay
        setTimeout(() => {
            setIsVerified(true);
            localStorage.setItem("gigstream_verified", "true");
            router.push("/dashboard");
        }, 1500);
    };

    const updateGoal = (goal: string) => {
        if (user) {
            const updatedUser = { ...user, retirementGoal: goal };
            setUser(updatedUser);
            localStorage.setItem("gigstream_user", JSON.stringify(updatedUser)); // Persist goal
            router.push("/kyc");
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            isVerified,
            login,
            logout,
            verifyIdentity,
            updateGoal
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
