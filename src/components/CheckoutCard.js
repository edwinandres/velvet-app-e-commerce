import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    action: {
        marginTop: "1rem",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardAction:{
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    cardRating:{
        display: 'flex'
    }
    
   
}));

export default function CheckoutCard({product:{id, name, productType, image, price, rating, description}}) {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [{basket}, dispatch] = useStateValue();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const removeItem = () => dispatch({
        type: actionTypes.REMOVE_ITEM,
        id:id,
    });

    return (
        <Card className={classes.root}>
            <CardHeader

                action={
                    <Typography
                        className={classes.action}
                        variant='h5'
                        color='textSecondary'
                    >
                        {accounting.formatMoney(price,"COP ")}
                    </Typography>
                }
                title={name}
                subheader="In stock"
            />

            <CardMedia
                className={classes.media}
                image={image}
                title={name}
            />

           
            <CardActions disableSpacing className={classes.cardActions}>
                <div className={classes.cardRating}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                        ))
                    }
                </div>

                <IconButton>
                    <DeleteIcon fontSize='large' onClick={removeItem} />
                </IconButton>

            </CardActions>
            
            

        </Card>
    );
}
