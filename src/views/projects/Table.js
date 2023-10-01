import { styled } from '@mui/material/styles';
import { createContext, useContext } from 'react';

const StyledTable = styled('div')({
  border: '1px solid var(--color-grey-200)',
  fontSize: '1.4rem',
  backgroundColor: 'red',
  borderRadius: '7px',
  overflow: 'hidden'
});
const CommonRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '0.6fr 1.8fr 2.2fr 1fr 1fr 1fr',
  columnGap: '2.4rem',
  alignItems: 'center',
  transition: 'none'
});
const StyledHeader = styled(CommonRow)({
  padding: '1.6rem 2.4rem',
  backgroundColor: 'red',
  borderBottom: '1px solid red',
  textTransform: 'uppercase',
  letterSpacing: '0.4rem',
  fontWeight: '600',
  color: 'red'
});
const StyledRow = styled(CommonRow)({
  padding: '1.2rem 2.4rem'
});
const StyledBody = styled('section')({
  margin: '0.4rem 0'
});
const Footer = styled('footer')({
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'center',
  padding: '1.2rem'
});
const Empty = styled('p')({
  fontSize: '1.6rem',
  fontWeight: '500',
  textAlign: 'center',
  margin: '2.4rem'
});
const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}
function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the momment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
