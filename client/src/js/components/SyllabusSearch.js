import React from 'react';

import SyllabusSearchBar from '../containers/SyllabusSearchBar';
import CourseListContainer from '../containers/CourseListContainer';
import { Wrapper } from '../styledComponents/Wrapper';

const SyllabusSearch = () => {
  return (
    <Wrapper>
      <SyllabusSearchBar />
      <CourseListContainer />
    </Wrapper>
  );
};

export default SyllabusSearch;
