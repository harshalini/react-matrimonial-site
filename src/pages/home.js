import DrawerAppBar from "../components/appbar/appbar"
import { HomeGrid } from "../components/home/homeGrid"
import { SearchBar } from "../components/home/SearchBar"
import { SpotlightSection } from "../components/home/SpotlightSection"
import { Poster } from "../components/home/Poster"
import { HorizontalCard } from "../components/home/HorizontalCard"
import { SuccessStories } from "../components/home/SuccessStories"
import "../styles/home.css"
export const Home = () => {
    return (
        <div>
            <DrawerAppBar />
            <HomeGrid />
            <SearchBar />
            <SpotlightSection />
            <Poster />
            <SuccessStories />
        </div>
    )
}