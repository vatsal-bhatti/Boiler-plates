import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import NavbarHoc from '../Hoc/NavbarHoc.component';
import { action1 } from '../redux/actions/actions';

 function Home() {

    const dispatch = useDispatch();
    const mystate1 = useSelector((state) => state.reducer1);


// dispatch(action1);

  return (
    <div>
      Home Component
    </div>
  )
}

export default NavbarHoc(Home);