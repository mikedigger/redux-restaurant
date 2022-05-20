import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCards } from './features/cards/cardsSlice';


import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Routing from './routing/Routes';


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <Routing />
            <Footer />
        </div>
    )
}

export default App;
