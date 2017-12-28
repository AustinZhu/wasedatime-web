import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchBldgCurrentClassrooms } from '../actions/index';
import ClassroomList from '../components/ClassroomList';
import allBldgs from '../api/buildingList';
import PropTypes from 'prop-types';
import '../styles/classroomList.css';

class ClassroomListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.bldgName = this.props.match.params.bldgName;
    this.redirect = false;
  }

  componentDidMount() {
    this.props.fetchBldgCurrentClassrooms(this.bldgName);
  }

  render() {
    if (allBldgs.includes(this.bldgName)) {
      console.log('no redirect');
      return (
        <div className="classroomListContainer__wrapper">
          <div className="classroomListContainer__overlay">
            <ClassroomList
              bldgName={this.bldgName}
              classrooms={this.props.mergedClassrooms}
            />
          </div>
        </div>
      );
    } else {
      console.log('redirect');
      return <Redirect from={this.props.match.url} to="/roomfinder" />;
    }
  }
}

const mergeClassrooms = (clrmIds, clrmsById, oClrmIds, oClrmsById) => {
  var mergedClassrooms = Object.assign({}, clrmsById);
  oClrmIds.forEach(id => {
    mergedClassrooms[id] = oClrmsById[id];
  });
  return mergedClassrooms;
};

const mapStateToProps = (state, ownProps) => {
  const mergedClassroomsObject = mergeClassrooms(
    state.bldgClassroomIds,
    state.bldgClassroomsById,
    state.bldgOccupiedClassroomIds,
    state.bldgOccupiedClassroomsById
  );
  const mergedClassrooms = Object.values(mergedClassroomsObject);
  return { mergedClassrooms };
};

//using shorthand syntax
const mapDispatchToProps = {
  fetchBldgCurrentClassrooms
};

//export a container component generated by react-redux
export default connect(mapStateToProps, mapDispatchToProps)(
  ClassroomListContainer
);
