import React from 'react';
import { SingleName } from '../features/starWars/types';
import {
  Table as TheTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface TableProps {
  results: SingleName[];
}

const DetailsTable: React.FC<TableProps> = ({ results }) => {
  return (
    <TableContainer component={Paper} sx={{ marginY: 2 }}>
      <TheTable
        sx={{
          minWidth: { xs: 300, sm: 600, md: 800 },
          '& .MuiTableCell-root': { padding: { xs: '8px', md: '16px' } },
          '& .MuiTableHead-root': { backgroundColor: '#D6E0F5' },
        }}
        aria-label="character table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: { xs: '12px', md: '16px' } }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: { xs: '12px', md: '16px' } }}
            >
              Mass
            </TableCell>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: { xs: '12px', md: '16px' } }}
            >
              Hair Color
            </TableCell>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: { xs: '12px', md: '16px' } }}
            >
              Birth Year
            </TableCell>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: { xs: '12px', md: '16px' } }}
            >
              Home World
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.name}>
              <TableCell sx={{ fontSize: { xs: '10px', md: '14px' } }}>
                {result.name}
              </TableCell>
              <TableCell sx={{ fontSize: { xs: '10px', md: '14px' } }}>
                {result.mass}
              </TableCell>
              <TableCell sx={{ fontSize: { xs: '10px', md: '14px' } }}>
                {result.hair_color}
              </TableCell>
              <TableCell sx={{ fontSize: { xs: '10px', md: '14px' } }}>
                {result.birth_year}
              </TableCell>
              <TableCell sx={{ fontSize: { xs: '10px', md: '14px' } }}>
                {result.homeworld}
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { xs: '8px', md: '12px' },
                    padding: { xs: '4px 6px', md: '6px 12px' },
                  }}
                >
                  <Link to="/allNamesPage">prev</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TheTable>
    </TableContainer>
  );
};
export default DetailsTable;
