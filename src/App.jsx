import React, { useEffect, useState, createContext } from 'react';
import HomePage from './pages/home/HomePage';
import NavBar from './components/nav-bar/NavBar';
import { Route, Routes } from 'react-router-dom';
import SingleCoursePage from './pages/single-course-page/SingleCoursePage';
import PageNotFound from './components/page-not-found/PageNotFound';
import Footer from './components/footer/Footer';
import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';





export const Data = createContext();
export const FetchState = createContext();
export const SearchTermContext = createContext();
export const SetSearchTermContext = createContext();

const App = () => {
	const [coursesData, setCoursesData] = useState({});
	const [fetched, setAsFetched] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const getData = () => {
			fetch('https://api.npoint.io/97d7e0d71e507947a59f')
				.then((response) => response.json())
				.then((jsonFile) => {
					setCoursesData(jsonFile['data']);
					setAsFetched(true);
				});
		};
		getData();
	}, []);

	return (
		<div className='App'>
			<Data.Provider value={coursesData}>
				<FetchState.Provider value={fetched}>
					<SearchTermContext.Provider value={searchTerm}>
						<SetSearchTermContext.Provider value={setSearchTerm}>
							<NavBar />
							<Routes>
								<Route
									path='/mocc'
									element={<HomePage />}
								></Route>
								<Route
									path='/mocc/login'
									element={<Login />}
								></Route>
								
								<Route
									path='/mocc/register'
									element={<Register />}
								></Route>
								
								<Route
									path='/mocc/courses/:courseId'
									element={<SingleCoursePage />}
								></Route>
								<Route
									path='*'
									element={<PageNotFound />}
								></Route>
							</Routes>
							<Footer />
						</SetSearchTermContext.Provider>
					</SearchTermContext.Provider>
				</FetchState.Provider>
			</Data.Provider>
		</div>
	);
};

export default App;
