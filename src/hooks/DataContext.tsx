import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Post {
    id: string;
    heading: string;
    body: string;
    image: string;
    idUser: string;
}

interface User {
    id: string;
    avatar: string;
    name: string;
    last_name: string;
    postsCreate: Post[];
}

interface DataContextType {
    post: Post[];
    user: User | null;
    addPost: (newPost: Post) => void;
    logout: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [post, setPosts] = useState<Post[]>([]);
    const [user, setUser] = useState<User | null>(null);

    // Функция для установки данных в localStorage
    const saveUserToLocalStorage = (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    // Функция для получения данных из localStorage
    const getUserFromLocalStorage = (): User | null => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    };

    // Функция для очистки localStorage при выходе
    const clearUserFromLocalStorage = () => {
        localStorage.removeItem('user');
    };


    useEffect(() => {
        const localUser = getUserFromLocalStorage();
        if (localUser) {
            setUser(localUser);
        }

        fetch('https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/post')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const addPost = (newPost: Post) => {
        setPosts(prevPosts => [...prevPosts, newPost]);
        if (user) {
            setUser(prevUser => ({
                ...prevUser!,
                postsCreate: [...(prevUser?.postsCreate || []), newPost]
            }));
            saveUserToLocalStorage({
                ...user!,
                postsCreate: [...(user?.postsCreate || []), newPost]
            });
        }
    };

    const logout = () => {
        clearUserFromLocalStorage();
        setUser(null);
    };

    return (
        <DataContext.Provider value={{ post, user, addPost, logout }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
