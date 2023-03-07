import * as React from 'react';
import {useEffect} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function MyCard() {
    const [data, setData] = React.useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(location.state.e,"props>>")
        fetch('https://express-t4.onrender.com/api/users/' + location.state.e)
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data,"cards>>>>",data)
            });
    },[])

    return (
        <>
            { data ?
                <>
                <h1 style={{textAlign : "center", marginTop : "20px"}}>Profile Page</h1>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.picture}
                        alt="img here"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data.greeting}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Address:- {data.address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone:- {data.phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email:- {data.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> </>: null }
        </>
    );
}