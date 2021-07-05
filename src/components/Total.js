import { CallMissedSharp } from '@material-ui/icons'
import React from 'react'
import accounting from 'accounting'
import { Button, makeStyles } from '@material-ui/core';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) =>({

    root:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh'
    },
    button:{
        marginTop:'2rem'
    }
}))

const Total = () => {

    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();
    console.log(basket)

    return (
        <div className={classes.root}>
            <h5>Total items : {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "COP ")}</h5>
            <Link to='/checkout-form'>
                <Button className={classes.button} variant='contained' color='secondary'>
                    Check out
                </Button>
            </Link>
        </div>
    )
}

export default Total
