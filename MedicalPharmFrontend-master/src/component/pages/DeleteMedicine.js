import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMedicinesAction } from "../../action/LoginAction";


export const DeleteMedicine = (props) => {
  const[state,setState] = useState(
      {
          medicineId:props.id,
          medicineName:props.name,
          price:props.price,
          minAge:props.minAge,
          maxAge:props.maxAge
      }
  )
  const dispatch = useDispatch();
  console.log(state);
  const deleteMedicines = async () => {
    const result= await axios
      .delete(`http://localhost:9090/MedicineDetail/Delete`,{data:{
        medicineId:props.id,
        medicineName:props.name,
        price:props.price,
        minAge:props.minAge,
        maxAge:props.maxAge 
      }})
      .catch((err) => {
        console.log("Error ", err);
      })
      .then(alert("Deleted Successfully"));
    dispatch(deleteMedicinesAction(result.data));
  };

  return (
    <div className="container">
      <div className="row">
        <form>
          <h2 className="text-center">do you want to delete it ? </h2>
          <div className="text-center">
            <button
              className="btn btn-primary  w-25"
              onClick={() => {
                deleteMedicines();
              }}
            >
              Submit
            </button>
            <button
              className="btn btn-secondary ms-5 w-25"
              onClick={() => props.setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
