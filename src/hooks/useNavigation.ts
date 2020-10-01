import {RootState} from '../redux/rootReducer';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ViewType} from '../navigation/StackNavigator';
import {changeCurrent, setViewProps} from '../redux/navigation/actions';

export default function useNavigation() {
  const navState = useSelector((state: RootState) => state.NavReducer);
  const dispatch = useDispatch();

  const changeCurrentNav = useCallback(
    (view: ViewType) => {
      dispatch(changeCurrent(view));
    },
    [dispatch],
  );
  const setDefaultViewProps = useCallback(
    (props: any) => {
      dispatch(setViewProps(props));
    },
    [dispatch],
  );

  return {state: navState, action: {changeCurrentNav, setDefaultViewProps}};
}
