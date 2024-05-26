import { useState, useCallback, useEffect } from 'react';
import { InputText, Button } from '../../Atoms';
import { TodoList } from '../../Molecules';

import './styles/TodoForm.css';

interface TodoItem {
  id: string;
  title: string;
}

export const TodoForm = () => {
  const [listData, setListData] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInput = (data: string) => setInputValue(data);

  const handleDeleteItem = useCallback((data: string) => {
    const newList = listData.filter((el) => el.id !== data);
    setListData(newList);
  }, [listData]);

  const handleCollectData = () => {
    if (!inputValue) return;

    setListData((prev) => {
      const filteredArray = prev.filter(el => el.id !== inputValue);

      return [
        ...filteredArray,
        {
          id: inputValue,
          title: inputValue
        },
      ]
    });

    setInputValue('');
  };

  return (
    <div className="todo-list">
      <h3>To Do List</h3>
      <div className="todo-list-input">
        <InputText
          value={inputValue}
          name="userFullName"
          placeholder="Add item"
          onDataChange={handleInput}
          disabled={false}
        />
        <Button
          onClickHandler={handleCollectData}
          type="button"
          title="Add"
        />
      </div>
      <TodoList list={listData} onDeleteItem={handleDeleteItem} />
    </div>
  );
}