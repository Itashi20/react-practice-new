import React from 'react';
import { useOrder } from './OrderContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from "@material-ui/core";

function UserDetailsForm(props) {
    const {
        cart,
        order,
        userId,
        purchaseDate,
        udm,
        addOrder,
        setUdm,
    } = useOrder();

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
    
       
        setUdm((prevUdm) => ({
          ...prevUdm,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log("Form submitted:", udm);
      };

    return (
        <div>
             <form onSubmit={handleSubmit}>
                            <TextField
                                style={{ width: "300px", margin: "5px" }}
                                label="Name"
                                variant="outlined"
                                name="userName"
                                value={udm.userName}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField
                                style={{ width: "300px", margin: "5px" }}
                                type="number"
                                label="Age"
                                variant="outlined"
                                name="age"
                                value={udm.age}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField
                                style={{ width: "300px", margin: "5px" }}
                                type="text"
                                label="Tobacco Consumer?"
                                variant="outlined"
                                name="isTobaccoConsumer"
                                value={udm.isTobaccoConsumer}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField
                                style={{ width: "300px", margin: "5px" }}
                                type="text"
                                label="Do you drink alcohol?"
                                variant="outlined"
                                name="doesUserDrink"
                                value={udm.doesUserDrink}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField
                                style={{ width: "300px", margin: "5px" }}
                                type="text"
                                label="Nominee Name"
                                variant="outlined"
                                name="nomineeName"
                                value={udm.nomineeName}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField
                                style={{ width: "300px", margin: "5px" }}
                                type="number"
                                label="Nominee Age"
                                variant="outlined"
                                name="nomineeAge"
                                value={udm.nomineeAge}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField
                                style={{ width: "300px", margin: "5px" }}
                                type="text"
                                label="Nominee Relation"
                                variant="outlined"
                                name="nomineeRelation"
                                value={udm.nomineeRelation}
                                onChange={handleChange}
                            />
                            <br />
                            <br />
                            <Button type="submit" variant="contained" color="primary">
                                Save
                            </Button>
                        </form>
            
        </div>
    );
}

export default UserDetailsForm;