import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatusState } from './recoil/todo';

export default function TodoListStatus() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatusState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}