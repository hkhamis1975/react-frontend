import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { v4 as uuidv4 } from "uuid";

function AddEmployee(props) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [img, SetImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleImageChange = (e) => {
    SetImage(e.target.value);
  };
  const addEmployee = (e) => {
    e.preventDefault();

    props.addEmployee(name, role, img);
    setName("");
    setRole("");
    SetImage("");
    handleClose();
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="block mx-auto px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        + Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="role"
              >
                Role
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="role"
                type="text"
                value={role}
                onChange={handleRoleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="img"
              >
                Image Url
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="img"
                type="text"
                value={img}
                onChange={handleImageChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addEmployee}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
