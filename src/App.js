import './App.css';
import Portfolio from "./components/Portfolio";
import {useEffect, useState} from "react";
import nextId from "react-id-generator";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div align={'center'}>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка данных</div>;
    } else {

        let projects = [];
        projects = items.map(item => (
            {
                id: nextId(),
                img: item.img,
                category: item.category
            }
        ))

        return (
            <Portfolio projects={projects}/>
        );
    }
}

export default App;
