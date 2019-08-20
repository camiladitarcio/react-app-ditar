import React from 'react';
import Car from '../car/Car';
import {get} from '../../api/request';
import { Container, Row, Col } from 'react-grid-system';
import "./style.css";

const pugImage = "https://previews.123rf.com/images/tanjaesser/tanjaesser1706/tanjaesser170600001/79608436-pug-steers-the-car.jpg";


// Statefull component
class List extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
    };

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
        const { handleDeleteModal, handleEditModal } = this.props;
        if (!this.state.items) {
            return null
        } else {
            return (
                <Container fluid>
                    <Row>
                        {this.state.items.map(car =>
                            <Col sm={4} className="car-column">
                                <Car
                                    image= {pugImage}
                                    id={car.id} 
                                    model={car.model}
                                    make={car.make}
                                    trim={car.trim}
                                    fuelType={car.fueltype}
                                    year={car.year}
                                    colors={car.colors}
                                    handleDeleteModal={handleDeleteModal}
                                    handleEditModal={handleEditModal}
                                />
                            </Col>
                        )}
                    </Row>
                </Container>
            )
        }

    }
};

export default List;
