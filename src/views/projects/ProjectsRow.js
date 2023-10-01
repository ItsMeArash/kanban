import { styled } from '@mui/material/styles';
import { HiPencilSquare, HiOutlineTrash } from 'react-icons/hi2';

const TableRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
  columnGap: '2.4rem',
  alignItems: 'center',
  padding: '1.4rem 0'
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
        <button>
          <HiPencilSquare />
        </button>
        <button>
          <HiOutlineTrash />
        </button>
      </TableRow>
    </>
  );
}

export default ProjectsRow;
