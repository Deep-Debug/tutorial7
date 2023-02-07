import React, {useState} from "react";
import logo from './logo.svg';
import {
    AppBar, IconButton, Toolbar, Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    TableContainer,
    Paper,
    Table
} from "@mui/material";
import './index.css'


function createData(
    eventId: number,
    eventName: string,
    eventPrice: number,
) {
    return {eventId, eventName, eventPrice};
}

const rows = [
    createData(1, "Welcome party", 100.99),
    createData(2, "Convocation", 200.99),
];

function Mycard() {
    const [isEvent, setIsEvent] = useState(false);

    return (
        <>
            <Grid container spacing={2} marginTop="10vh" >
                <Grid item xs={12} md={4}>
                    <Card sx={{maxWidth: 350}}>
                        <CardMedia
                            sx={{height: 250}}
                            image={img1}
                            title="img1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Dalhousie
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                Dalhousie is known for it's great event culture.
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Address:- Halifax, NS
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Rating:- 5.0
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => {
                                setIsEvent(true)
                            }} size="large">Check Events</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{maxWidth: 350}}>
                        <CardMedia
                            sx={{height: 250}}
                            image={img2}
                            title="img2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Night Club
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                Night club is hosting party every night on weekends!!
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Address:- Halifax, NS
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Rating:- 5.0
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => {
                                setIsEvent(true)
                            }} size="large">Check Events</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{maxWidth: 350}}>
                        <CardMedia
                            sx={{height: 250}}
                            image={img3}
                            title="3"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Tedx Talk
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                We have guest speakers every week at Bridge terminal.
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Address:- Bridge terminal, NS
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Rating:- 4.5
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => {
                                setIsEvent(true)
                            }} size="large">Check Events</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{maxWidth: 350}}>
                        <CardMedia
                            sx={{height: 250}}
                            image={img4}
                            title="4"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Dinner Dash
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                We are serving delicious dinner since 1967 and number one in it.
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Address:- Mumford terminal
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Rating:- 4.1
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => {
                                setIsEvent(true)
                            }} size="large">Check Events</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{maxWidth: 350}}>
                        <CardMedia
                            sx={{height: 250}}
                            image={img5}
                            title="5"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Sale store
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                Sale store is giving 50% to all membership holder in our Halifax.
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Address:- Bridge terminal, NS
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Rating:- 4.2
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => {
                                setIsEvent(true)
                            }} size="large">Check Events</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{maxWidth: 350}}>
                        <CardMedia
                            sx={{height: 250}}
                            image={img6}
                            title="6"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Edunova
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                Career help and job searching platform,get news letter.
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Address:- Service Canada, NS
                            </Typography>
                            <br/>
                            <Typography variant="body3" color="text.secondary">
                                Rating:- 4.5
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => {
                                setIsEvent(true)
                            }} size="large">Check Events</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br/>
            {isEvent ? <>
                <h1 style={{textAlign : "center"}}>
                    EVENTS
                </h1>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight : 900}}>ID</TableCell>
                                <TableCell style={{fontWeight : 900}}>NAME</TableCell>
                                <TableCell style={{fontWeight : 900}}>PRICE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.eventId}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.eventId}
                                    </TableCell>
                                    <TableCell>{row.eventName}</TableCell>
                                    <TableCell>{row.eventPrice}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </> : null
            }
        </>
    );
}

export default Mycard;