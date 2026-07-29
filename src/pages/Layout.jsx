import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import ScrollToTop from "../components/ScrollToTop"
import Navbar from "../components/Navbar"
import { getCharacters, getLocations, getEpisodes } from "../ServicesAPI"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const {dispatch} = useGlobalReducer()

    useEffect(() => {
        const loadInitialData = async () => {
            const charactersData = await getCharacters();
            dispatch({type: 'LOAD_CHARACTERS', payload: charactersData})
            const locationsData = await getLocations();
            dispatch({type: 'LOAD_LOCATIONS', payload: locationsData})
            const episodesData = await getEpisodes();
            dispatch({type: 'LOAD_EPISODES', payload: episodesData})
        }
        loadInitialData();
    }, [])

    return (
        <ScrollToTop>
            <Navbar/>
                <Outlet />
        </ScrollToTop>
    )
}