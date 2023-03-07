import * as React from 'react';
import {useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TableContainer} from "@mui/material";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
export default function Home() {
    const [users, setUsers] = React.useState([]);
    const [searchText, setSearchText] = React.useState("");

    let navigate = useNavigate();

    useEffect(()=>{
        fetch('https://express-t4.onrender.com/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                console.log(data,"users>>>>",users)
            });
    },[])

    const handleClick = (e) => {
        navigate("/card", {state : {
                e
            }});
    }
    return (
        <>
            <TableContainer component={Paper}>
                <h1 style={{textAlign : "center", marginTop : "20px"}}>Click On Any User</h1>
                <TextField
                    id="search-bar"
                    className="text"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    label="Enter a user name"
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                />
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                    Index
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Address
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                Phone
                            </TableCell>
                            <TableCell>
                                Image
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.filter((val)=> {
                            if(searchText == "") {
                                return val
                            } else if (val.name.toLowerCase().includes(searchText.toLowerCase())) {
                                return val
                            }
                        }).map((row) => (
                            <TableRow key={row.index} onClick={e => {handleClick(row._id)}}>
                                <TableCell component="th" scope="row">
                                    {row.index}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell><img src={row.picture} alt="img here"/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}