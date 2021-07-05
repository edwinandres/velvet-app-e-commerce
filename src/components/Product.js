import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export default function Product({product:{id, name, productType, image, price, rating, description}}) {

    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const addToBasket = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id:id,
                name:name,
                productType:productType,
                image:image,
                price:price,
                rating:rating,
                description:description

            }
        })
    };

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

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {productType} 
                </Typography>
            </CardContent>
            
            <CardActions disableSpacing>
                <IconButton aria-label="add to cart" >
                    <AddShoppingCart fontSize='large' onClick={addToBasket} />
                </IconButton>

                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>&#11088;</p>
                    ))
                }

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{description}</Typography>
                </CardContent>
            </Collapse>

        </Card>
    );
}
