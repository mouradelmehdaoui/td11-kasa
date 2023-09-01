
import axios from 'axios';

export const getLogementByID = async (id) => {
  try {
    const res = await axios.get(`${window.location.origin}/api/estateData.json`);
    const picked = res.data.find((logement) => logement.id === id);
    if (picked === undefined) {
      throw new Error("Can't get data");
    }
    return picked;
  } catch (error) {
    throw error;
  }
};

export default getLogementByID;