import React, { Component } from "react";
import List from "../../components//list";
import Button from "../../components/button";
import {
  Modal,
  ModalFooter,
  ModalHeader,
  ModalContent
} from "../../components/modal";
import Form from "../../components/form/";
import NavBar from "../../components/navbar";
import Spinner from "../../components/spinner";
import { post, remove, put } from "../../api/request";
import "./style.css";

export default class Home extends Component {
  state = {
    showAddModal: false,
    showDeleteModal: false,
    showEditModal: false,
    make: "",
    year: "",
    model: "",
    fuelType: "",
    trim: "",
    colors: "",
    carIdSelected: null,
    isLoading: false
  };
  handleAddModal = () =>
    this.setState({ showAddModal: !this.state.showAddModal });
  handleEditModalEnhanced = (make, year, model, fuelType, trim, colors, id) => {
    this.handleEditModal();
    this.setState({
      make,
      year,
      model,
      fuelType,
      trim,
      colors,
      carIdSelected: id
    });
  };
  handleEditModal = () =>
    this.setState({ showEditModal: !this.state.showEditModal });
  handleDeleteModalEnhanced = id => {
    this.handleDeleteModal();
    this.setState({ carIdSelected: id });
  };
  handleLoading = () => this.setState({isLoading: !this.state.isLoading})
  handleDeleteModal = () =>
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleAdd = async () => {
    const { make, year, model, fuelType, trim, colors } = this.state;
    const res = await post(
      JSON.stringify({
        make,
        year,
        model,
        fueltype: fuelType,
        trim,
        colors
      })
    );
    return res;
  };
  handleDelete = async () => {
    this.handleLoading();
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
    remove(this.state.carIdSelected);
    setTimeout(() => this.handleLoading(), 3000);
  };
  handleEdit = async () => {
    const {
      carIdSelected,
      make,
      model,
      colors,
      fuelType,
      year,
      trim
    } = this.state;
    put(
      carIdSelected,
      JSON.stringify({
        make,
        model,
        colors,
        fueltype: fuelType,
        year,
        trim
      })
    );
  };
  render() {
    const {
      showEditModal,
      showAddModal,
      showDeleteModal,
      make,
      year,
      model,
      fuelType,
      trim,
      colors,
      isLoading
    } = this.state;
    return (
      <>
        <NavBar title="My App" />
        <div className="home-container">
          <List
            handleDeleteModal={this.handleDeleteModalEnhanced}
            handleEditModal={this.handleEditModalEnhanced}
          />
          <div className="btn-container">
            <Button onClick={this.handleAddModal} float primary>
              +
            </Button>
          </div>
          {showAddModal && (
            <Modal>
              <ModalHeader>Add Car</ModalHeader>
              <ModalContent>
                <Form
                  make={make}
                  year={year}
                  model={model}
                  fuelType={fuelType}
                  trim={trim}
                  colors={colors}
                  onChange={this.handleChange}
                />
              </ModalContent>
              <ModalFooter>
                <Button primary onClick={this.handleAdd}>
                  Add
                </Button>
                <Button secondary onClick={this.handleAddModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          )}
          {showDeleteModal && (
            <Modal>
              <ModalHeader>Delete Car</ModalHeader>
              <ModalContent>
                <p>Are you sure you want delete this car ?</p>
              </ModalContent>
              <ModalFooter>
                <Button primary onClick={this.handleDelete}>
                  Delete
                </Button>
                <Button secondary onClick={this.handleDeleteModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          )}
          {showEditModal && (
            <Modal>
              <ModalHeader>Edit Car</ModalHeader>
              <ModalContent>
                <Form
                  make={make}
                  year={year}
                  model={model}
                  fuelType={fuelType}
                  trim={trim}
                  colors={colors}
                  onChange={this.handleChange}
                />
              </ModalContent>
              <ModalFooter>
                <Button primary onClick={this.handleEdit}>
                  Edit
                </Button>
                <Button secondary onClick={this.handleEditModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          )}
        </div>
        {isLoading && <Spinner />}
      </>
    );
  }
}
