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

function ContextApp(props) {
    const {
        cart,
        order,
        userId,
        purchaseDate,
        udm,
        addOrder,
        setUdm,
    } = useOrder();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} alignItems="center">
                    <Item>
                        <toolbar>
                            <h1>YOUR POLICIES</h1>
                        </toolbar>
                        {cart?.policies?.map((c) => (
                            <div key={c.policyId}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography color="text.secondary" gutterBottom>
                                            <b><h2>{c.policyName}</h2></b>
                                        </Typography>
                                        <Typography component="div">
                                            {c.policyCompany}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {c.policyType.policyTypeValue} Insurance
                                        </Typography>
                                        <Typography color="text.secondary">
                                            $ {c.policyPrice}
                                        </Typography>
                                        <Typography variant="body2">
                                            {c.benefit.benefitValue.replace(/"/g, ' ')}
                                        </Typography>
                                        <br />
                                        <Button variant="outlined" color="error">
                                            REMOVE
                                        </Button>
                                    </CardContent>
                                </Card>

                                
                            </div>
                        ))}
                    </Item>
                </Grid>
                <Grid item xs={6} alignItems="center">
                    <Item>
                        <toolbar>
                            <h1>PERSONAL DETAILS FORM </h1>
                        </toolbar>
                        {/* <form>

              
              <Button variant="contained" color="primary">
                save
              </Button>
            </form> */}
                       
                    </Item>
                </Grid>
            </Grid>
            <Button onClick={addOrder} variant="contained" color="primary">
                Buy Now
            </Button>
        </div>
    );
}

export default ContextApp;
