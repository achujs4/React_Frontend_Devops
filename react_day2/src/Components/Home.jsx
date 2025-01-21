import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@mui/material'
import React from 'react'

const data=[
   {"Name": "Anuja","Course":"BTech","Place":"Trivandrum"},
   {"Name":"Priya","Course":"BTech","Plaace":"Kollam"},
   {"Name":"Gokul","Course":"BTech","Place":"Trivandrum"}
  ];

const Home = () => {
  return (
   <>
   <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Courses</TableCell>
                
               
            </TableRow>
        </TableHead>

        <TableBody>

            <TableRow>
                <TableCell>Anuja</TableCell>
                <TableCell>BTech</TableCell>
                <TableCell>Trivandrum</TableCell>
                <TableCell>Anchu House</TableCell>
            </TableRow>
        </TableBody>


        <TableBody>
            <TableRow>
                <TableCell>Gokul</TableCell>
                <TableCell>BTech</TableCell>
                <TableCell>Kollam</TableCell>
                <TableCell>S V Nivas</TableCell>
            </TableRow>
        </TableBody>

        <TableBody>
            <TableRow>
                <TableCell>Priya</TableCell>
                <TableCell>BTech</TableCell>
                <TableCell>Trivandrum</TableCell>
                <TableCell>Priya Bhavan</TableCell>
            </TableRow>
        </TableBody>

    </Table>
   </TableContainer>
   </>
  )
}

export default Home

