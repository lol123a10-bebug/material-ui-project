import {
  Box,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Header from "../components/Shared/Header";
import Blocks from "../components/Subscription/Blocks";
import { invoiceTableHeadings } from "../utils/constants/subscription";
import { pastInvoices } from "../utils/helpers/mock-data";

interface Props {}

const Subscription = (props: Props) => {
  return (
    <Box>
      <Header title="Subscription" subtitle="Manage your billing information and invoices." />
      <Blocks />
      <Divider />

      <Box sx={{ paddingTop: "2rem" }}>
        <Typography fontSize="1.25rem">Past Invoices</Typography>
        <TableContainer>
          <Table
            sx={{
              marginTop: "1rem",

              ".MuiTableCell-body, .MuiTableCell-head": {
                fontSize: "1.25rem",
              },
            }}
          >
            <TableHead>
              {invoiceTableHeadings.map((heading, index) => (
                <TableCell
                  key={index}
                  sx={(theme) => ({
                    color: theme.palette.primary.light,
                    textTransform: "uppercase",
                    width: index === 0 ? "33%" : undefined,
                  })}
                >
                  {heading}
                </TableCell>
              ))}
            </TableHead>
            <TableBody>
              {pastInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.name}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.plan}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={(theme) => ({
                        color: theme.palette.primary.contrastText,
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
    </Box>
  );
};

export default Subscription;
