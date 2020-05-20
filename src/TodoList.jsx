import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './recoil/todo';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStatus from './TodoListStatus';
import TodoListFilters from './TodoListFilters';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStatus />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}