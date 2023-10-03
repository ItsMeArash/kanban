import { styled } from '@mui/material/styles';
import { HiPencilSquare, HiOutlineTrash } from 'react-icons/hi2';
import { useDeleteProject } from './useDeleteProject';
import toast from 'react-hot-toast';

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
  const { id: projectId, name, users: projectusers, createdDate, progress, finishedDate } = project;
  const { isDeleting, deleteProject } = useDeleteProject();
  return (
    <>
      <TableRow role="row">
        <div>{name}</div>
        <div>{projectusers}</div>
        <div>{createdDate}</div>
        <div>{finishedDate}</div>
        <div>{progress}</div>
        <button>
          <HiPencilSquare />
        </button>
        <button onClick={() => deleteProject(projectId)} disabled={isDeleting}>
          <HiOutlineTrash />
        </button>
      </TableRow>
    </>
  );
}

export default ProjectsRow;
