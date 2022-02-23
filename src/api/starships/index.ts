import api from "..";
import IStarship from "./interfaces";

export const STARSHIP_URL = "starships";

const StarshipsApi = {
  get: async (id: number): Promise<IStarship> => {
    const { data } = await api.get<IStarship>(`${STARSHIP_URL}/${id}`);
    data.crew = Number(data.crew.toString().replace(",", ""));
    if (isNaN(data.crew)) data.crew = 0;
    return data;
  },
};

export default StarshipsApi;
