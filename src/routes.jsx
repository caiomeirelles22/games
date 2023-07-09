import { Route, Routes } from "react-router-dom"

import App from "./pages/home"
import Shooter from "./pages/shooter"
import Mmorpg from "./pages/mmoarpg"
import Fighting from "./pages/fighting"
import Moba from "./pages/moba"
import Sports from "./pages/sports"
import Racing from "./pages/racing"
import CardGames from "./pages/card-game"
import BattleRoyale from "./pages/BattleRoyale"
import Strategy from "./pages/Strategy"
import ActionRpg from "./pages/ActionRpg"



export function AppRoutes() {
    return (
        <Routes>
            <Route path="/games">
                <Route path="/games" element={<App />} />
                <Route path="/games/shooter" element={<Shooter />} />
                <Route path="/games/mmoarpg" element={<Mmorpg />} />
                <Route path="/games/fighting" element={<Fighting />} />
                <Route path="/games/moba" element={<Moba />} />
                <Route path="/games/sports" element={<Sports />} />
                <Route path="/games/racing" element={<Racing />} />
                <Route path="/games/card-Games" element={<CardGames />} />
                <Route path="/games/battle-royale" element={<BattleRoyale />} />
                <Route path="/games/strategy" element={<Strategy />} />
                <Route path="/games/action-rpg" element={<ActionRpg />} />

            </Route>
        </Routes>
    )
}