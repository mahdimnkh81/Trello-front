import Profile from "../asserts/Img/Avatar.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];




function Assign() {
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-start items-center w-5/6">
                    <div className="flex justify-start items-center w-full p-10">
                        <img src={Profile} alt="" />
                        <div className="flex flex-col p-5">
                            <h3 className="font-bold text-silverbold"> Mahdi Mansorikhah</h3>
                            <h3 className="font-medium text-silverbold"> @mahdi_m</h3>
                        </div>
                    </div>
                    <div className="flex items-center w-full p-10">
                        <ul className="flex flex-row border-b border-silver w-full">
                            <li className="p-3 text-borderlite font-bold ">Profile</li>
                            <li className="p-3 text-borderlite font-bold">Activity</li>
                            <li className="p-3 text-primary font-bold border-b-2">Cards</li>
                            <li className="p-3 text-borderlite font-bold">Setting</li>
                        </ul>
                    </div>

                    <div className="w-5/6">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Assign;