import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { invoiceTableHeadings } from "../../utils/constants/subscription";
import { pastInvoices } from "../../utils/helpers/mock-data";

const Invoices = () => {
  return (
    <Box sx={{ paddingTop: "2rem" }}>
      <Typography fontSize="1.25rem">Past Invoices</Typography>
      <TableContainer>
        <Table
          sx={{
            marginTop: "1rem",

            ".MuiTableCell-body, .MuiTableCell-head": {
              fontSize: "1.1rem",
            },
          }}
        >
          <TableHead>
            {invoiceTableHeadings.map((heading, index) => (
              <TableCell
                key={index}
                sx={(theme) => ({
                  color: theme.colors.textSecond,
                  textTransform: "uppercase",
                  width: index === 0 ? "33%" : undefined,
                  whiteSpace: "nowrap",
                })}
              >
                {heading}
              </TableCell>
            ))}
          </TableHead>
          <TableBody>
            {pastInvoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                sx={(theme) => ({
                  "& td": {
                    color: theme.colors.textFirst,
                  },
                })}
              >
                <TableCell>{invoice.name}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.plan}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={(theme) => ({
                      backgroundColor: theme.colors.button,
                      color: theme.colors.textFirst,
                    })}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Invoices;
