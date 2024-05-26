interface IButton {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  value?: string | number;
  name?: string;
  onClickHandler(): void
}

export const Button: React.FC<IButton> = ({
  title,
  type,
  disabled,
  value,
  name,
  onClickHandler,
}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        value={value}
        name={name}
        onClick={onClickHandler}
      >
        {title}
      </button>
    </>
  );
};
