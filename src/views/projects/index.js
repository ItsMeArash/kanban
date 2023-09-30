// material-ui
import { Typography } from '@mui/material';

const { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } = require('@mui/material');

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Projects = () => (
  <MainCard title="Projects">
    <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography>
    <TableContainer variant="outlined">
      <Table aria-label="demo table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell>Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Frozen yoghurt</TableCell>
            <TableCell>109</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cupcake</TableCell>
            <TableCell>305</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </MainCard>
);

export default Projects;
