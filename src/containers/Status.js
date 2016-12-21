import {
  Spinner,
  View
} from 'native-base';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loading: state.loading
});

const Status = ({ loading }) => (
  <View>
    {loading && <Spinner />}
  </View>
);

Status.propTypes = { loading: PropTypes.bool.isRequired };

export default connect(mapStateToProps)(Status);
