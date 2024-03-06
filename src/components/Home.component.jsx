import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { action1 } from '../redux/actions/actions';

export default function Home() {

    const dispatch = useDispatch();
    const mystate1 = useSelector((state) => state.reducer1);


// dispatch(action1);

  return (
    <div>
      Home Component
    </div>
  )
}
