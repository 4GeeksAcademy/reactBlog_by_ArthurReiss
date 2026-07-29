const baseURL = "https://rickandmortyapi.com/api";

export const getCharacters = async () => {
  try {
    const response = await fetch(`${baseURL}/character`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    }
  } catch (error) {
    console.log("Error obteniendo characters");
    console.error("Error obteniendo personajes", error);
    return [];
  }
};

export const getLocations = async () => {
  try {
    const response = await fetch(`${baseURL}/location`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    }
  } catch (error) {
    console.log("Error obteniendo locations");
    console.error("Error obteniendo locations", error);
    return [];
  }
};

export const getEpisodes = async () => {
  try {
    const response = await fetch(`${baseURL}/episode`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    }
  } catch (error) {
    console.log("Error obteniendo episodes");
    console.error("Error obteniendo episodes", error);
    return [];
  }
};
