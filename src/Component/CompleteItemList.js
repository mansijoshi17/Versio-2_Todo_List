import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function CompleteItemList(props) {

   
    const [completedItem, setCompletedItem] = useState(props.CompleteItemArray);//Items which are completed and add in this page as props.
    const [StartdateList] = useState(props.startdate);//List of start date as a props from todocontainer
    const [FTimeList] = useState(props.completedatelist.sort());//This is for the array of time.
   const [Totaltime] = useState(props.Totaltime);
    

    function DeleteItem(index) {
        const TodoItemList = [...completedItem];//Store itemlist in one variable todoitemlist.
        TodoItemList.splice(index, 1);//delete item of particular index and number of item one from itemlist.
        setCompletedItem(TodoItemList);
    }
  
    return (

        <Container style={{ paddingTop: '10px', background: 'white', marginTop: '80px' }}>
            <h1>Completed Items:</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Items</TableCell>
                        <TableCell align="right">Time&nbsp;</TableCell>
                        <TableCell align="right">Total Time&nbsp;</TableCell>
                        <TableCell align="right">Delete&nbsp;</TableCell>
                    </TableRow>
                </TableHead>

                {completedItem.map((item, index) =>
                    <TableBody key={index} >
                        <TableRow>
                            <TableCell align="right">{item}</TableCell>
                            <TableCell align="right">
                           {FTimeList[index]}
                             </TableCell>
                            <TableCell align="right" >
                           You took {Totaltime[index]}
                                    </TableCell>
                            <TableCell align="right">
                                <DeleteIcon onClick={() => DeleteItem(index)} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                )}
            </Table>

        </Container>
    )
}
export default CompleteItemList;