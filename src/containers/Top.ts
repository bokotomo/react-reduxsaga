import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '../components/Top';
import { AppState } from '../redux/reducers';
import { ActionUser } from '../redux/actions/user';

const mapStateToProps = (appState: AppState) => {
  return {
    name: appState.user.name,
    age: appState.user.age,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestGetUser: (id: string) => dispatch(ActionUser.requestGetUserName(id)),
    requestGetUserAge: (id: string) =>
      dispatch(ActionUser.requestGetUserAge(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopPage);
