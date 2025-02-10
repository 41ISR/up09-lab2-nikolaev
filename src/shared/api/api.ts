import axios from "axios"

const BASE_URL = "https://api.ktkv.dev"

const apish = axios.create({ baseURL: BASE_URL });

// const API_KEY = import.meta.env.VITE_API_KEY;
interface ILoginRDO {
    id: string
}

export const api = {
    login: async (id: string) => {
        const res = await apish.post<ILoginRDO>("/login", { id: id });
        return res.data.id
    },
    // searchMovie: async (id: string) => {
    //     const res = await apish.get<IMoviePage>("", {
    //         params: {  i: id },
    //     });

    //     return res.data
    // },
};
