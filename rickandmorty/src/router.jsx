import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import AboutPage from "./pages/AboutPage"
import CharactersPage from "./pages/CharactersPage"
import CharacterDetailsPage from "./pages/CharacterDetailsPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "about-us",
                element: <AboutPage />
            },
            {
                path: "characters",
                element: <CharactersPage />
            },
            {
                path: "character-details/:id",
                element: <CharacterDetailsPage />
            }
        ],
        errorElement: <NotFound />
    }
])

export default router