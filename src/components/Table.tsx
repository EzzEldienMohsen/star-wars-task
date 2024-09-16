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

const Table: React.FC<TableProps> = ({ results }) => {
  const detailsRoute = results.length > 1 ? '/details' : '/singleDetail';
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
              Gender
            </TableCell>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: { xs: '12px', md: '16px' } }}
            >
              Height
            </TableCell>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: { xs: '12px', md: '16px' } }}
            >
              Eye color
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
                {result.gender}
              </TableCell>
              <TableCell sx={{ fontSize: { xs: '10px', md: '14px' } }}>
                {result.height}
              </TableCell>
              <TableCell sx={{ fontSize: { xs: '10px', md: '14px' } }}>
                {result.eye_color}
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
                  <Link
                    to={detailsRoute}
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    Details
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TheTable>
    </TableContainer>
  );
};

export default Table;
