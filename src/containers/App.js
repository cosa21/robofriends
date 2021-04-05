import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {

    // constructor(){
    //     super();
    //     this.state={
    //         robots:[],
    //         searchField:''
    //     }
    // }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
    // }

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{setRobots(users)});
    },[])

    const searchChange = (event) => {
        setSearchField(event.target.value);
    }
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (

        !robots.length ?
            < h1 > Loading...</h1 > :
            (
                <div className="tc">
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={(e) => searchChange(e)} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        );

}

export default App;