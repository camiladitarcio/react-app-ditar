import React from 'react';
import Car from '../car/Car';
import {get} from '../../api/request';
const apiUrl = "https://fathomless-cove-96315.herokuapp.com/car";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    
    async componentDidMount() {
        try {
            const dataFetch = await get();
            this.setState({
                isLoaded: true,
                items: dataFetch.data
            })
        } catch (error) {
            this.setState({
                isLoaded: true,
                error
            })
        }
    }

    render() {
        if (!this.state.items) {
            return null
        } else {
            return (
                <ul>
                    {this.state.items.map(car => <Car car={car} key={car.id} />)}
                </ul>
            )
        }

    }
};

export default List;

/*
const fetchApi = async apiLink => {
  const dataFetched =  await fetch(apiLink, {
    method: "GET",
    headers: {
      key
    },
    mode: "cors"
  }).then(res => res.json());
};
*/