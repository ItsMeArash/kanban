// material-ui
import * as React from 'react';

import MainCard from 'ui-component/cards/MainCard';
import { useProjects } from './useProjects';
import Loader from 'ui-component/Loader';
import { styled } from '@mui/material/styles';
import ProjectsRow from './ProjectsRow';

const Table = styled('div')({
  border: '1px solid #d1d5db',
  backgroundColor: '#e5e7eb',
  borderRadius: '7px',
  overflow: 'hidden'
});
const TableHeader = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: '2.4rem',
  alignItems: 'center',
  backgroundColor: '#d1d5db',
  borderBottom: '1px solid red',
  textTransform: 'uppercase',
  letterSpacing: '0.4px',
  fontWeight: 600,
  color: 'black',
  padding: '1.6rem 2.4rem'
});
function Projects() {
  const { isLoading, projects } = useProjects();
  if (isLoading) return <Loader />;
  return (
    <MainCard title="Projects">
      <Table role="row">
        <TableHeader role="row">
          <div></div>
          <div>Project name</div>
          <div>users</div>
          <div>created date</div>
          <div>finished date</div>
          <div>progress</div>
          <div></div>
        </TableHeader>
        {projects.map((project) => (
          <ProjectsRow project={project} key={project.id} />
        ))}
      </Table>
    </MainCard>
  );
}

export default Projects;
