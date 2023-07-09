/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "./action/contact";
import { GiCancel, GiSave } from "react-icons/gi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const ContactCard = ({ name, phone, index }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [inputs, setInputs] = useState({ name, phone });

  const updateFormValue = ({ target: { name, value } }) =>
    setInputs((inputObj) => ({ ...inputObj, [name]: value }));

  const toggleEditMode = () => setEditMode((mode) => !mode);

  const updateContactData = () => {
    dispatch(updateContact({ ...inputs }, index));
    toggleEditMode();
  };

  const deleteContactFromList = () => {
    dispatch(deleteContact(index));
  };

  return (
    <li className="list-group-item">
      <div className="card border-0">
        <div className="row no-gutters">
          <div
            className="col-md-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"https://picsum.photos/200/305"}
              alt=""
              className="img-thumbnail border-secondary rounded-circle"
            />
          </div>
          <div className="col-md-9" style={{ textAlign: "justify" }}>
            <div className="card-body py-1 px-2 text-left">
              <h5 className="card-title">
                {!editMode && name}
                {editMode && (
                  <>
                    <input
                      type="text"
                      className="input-text"
                      value={inputs.name}
                      name="name"
                      onChange={(e) => updateFormValue(e)}
                    />
                  </>
                )}
              </h5>
              <p className="card-text">
                {!editMode && phone}
                {editMode && (
                  <input
                    type="text"
                    className="input-text"
                    value={inputs.phone}
                    name="phone"
                    onChange={(e) => updateFormValue(e)}
                  />
                )}
              </p>
              <p className="card-text">
                {!editMode && (
                  <>
                    <div style={{ display: "flex", float: "left" }}>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-info mr-2"
                          onClick={toggleEditMode}
                          style={{ marginRight: "35px" }}
                        >
                          <TiEdit />
                          Edit
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={deleteContactFromList}
                        >
                          <RiDeleteBinLine />
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {editMode && (
                  <>
                    <button
                      type="button"
                      className="btn btn-outline-success  mr-2"
                      onClick={updateContactData}
                      style={{ marginRight: "35px" }}
                    >
                      <GiSave />
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2"
                      onClick={toggleEditMode}
                    >
                      <GiCancel />
                      Cancel
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
