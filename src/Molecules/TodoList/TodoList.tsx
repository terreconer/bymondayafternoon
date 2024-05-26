import { memo } from 'react';

import './styles/TodoList.css';

interface TodoListItem {
  id: string;
  title: string;
}

interface TodoListProps {
  list: TodoListItem[];
  onDeleteItem: (id: string) => void;
}

export const TodoList = memo(({ list, onDeleteItem }: TodoListProps) => {
  const handleItemDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onDeleteItem) {
      onDeleteItem(event.currentTarget.dataset.id!);
    }
  };

  return (
    <div className="todo-list-wrapper">
      <ul className="todo-list-list">
        {
          list.length ? (
            list.map((el, i) => {
              const { id, title } = el;
              return (
                <li className="todo-list-list-item" key={id + i}>
                  <span className="todo-list-list-title">{title}</span>
                    <button
                      data-id={id}
                      className="todo-list-list-button"
                      onClick={handleItemDelete}
                    >
                      Delete
                    </button>
                </li>
              );
            })
          )
          : <div>No items yet</div>
        }
      </ul>
    </div>
  );
});
