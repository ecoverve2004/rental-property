import React, { useState } from 'react';
import "./App.css";
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ListYourHome from './Components/ListYourHome/ListYourHome';
import HelpCenter from './Components/HelpCenter/HelpCenter';


function App() {
    const [selectedCategory, setSelectedCategory] = useState('trending');
    const [currentView, setCurrentView] = useState('home');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleViewChange = (view) => {
        setCurrentView(view);
    };

    const renderView = () => {
        switch (currentView) {
            case 'login':
                return <Login />;
            case 'signup':
                return <SignUp />;
            case 'listyourhome':
                return <ListYourHome />;
            case 'helpcenter':
                return <HelpCenter />;
            default:
                return <Home selectedCategory={selectedCategory} />;
        }
    };

    return (
        <div className="app-container">
            <Nav onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} onViewChange={handleViewChange}/>
            <main className="main-content">
                {renderView()}
            </main>
            <Footer />
        </div>
    );
}

export default App;
