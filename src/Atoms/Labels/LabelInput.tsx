interface LabelInputProps {
  label: string;
  title: string;
};

export const LabelInput = ({ label, title}: LabelInputProps) => {
  return (
    <label htmlFor={label}>
      {title}
    </label>
  );
};
