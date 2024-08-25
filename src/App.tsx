import MainPage from "./pages/MainPage.tsx";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutWithBottomNavigation from "./layouts/LayoutWithBottomNavigation.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import TaskPage from "./pages/TaskPage.tsx";
import FriendsPage from "./pages/FriendsPage.tsx";
import StakingPage from "./pages/StakingPage.tsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutWithBottomNavigation />}>
					<Route path="/" element={<MainPage />}/>
					<Route path="/shop" element={<ShopPage />}/>
					<Route path="/task" element={<TaskPage />}/>
					<Route path="/stacking" element={<StakingPage />}/>
					<Route path="/friends" element={<FriendsPage />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
