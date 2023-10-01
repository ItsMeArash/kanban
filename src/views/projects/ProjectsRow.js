import { styled } from '@mui/material/styles';
const TableRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '0.6fr 1.8fr 2.2fr 1fr 1fr 1fr',
  columnGap: '2.4rem',
  alignItems: 'center',
  padding: '1.4rem 2.4rem'
});
const Project = styled('div')({
  fontSize: '1.6rem',
  fontWeight: 600,
  color: 'black,',
  fontFamily: 'Sono'
});
function ProjectsRow({ project }) {
  const { id, name, users, createdDate, progress, finishedDate } = project;

  return (
    <>
      <TableRow role="row">
        <div>{name}</div>
        <div>{users}</div>
        <div>{createdDate}</div>
        <div>{finishedDate}</div>
        <div>{progress}</div>
      </TableRow>
    </>
  );
}

export default ProjectsRow;
