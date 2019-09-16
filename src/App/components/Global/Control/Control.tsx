import * as React from 'react';

interface Props {
  name: string;
  id: string;
  value: any;
  label: string;
  checked?: boolean;
  hiddenLabel?: boolean;
  onChange: any;
  type: string;
  placeholder?: string;
  className?: string;
}

const Control: React.SFC<Props> = ({
  name,
  id,
  value,
  label,
  checked,
  type,
  hiddenLabel,
  onChange
}) => {
  return (
    <div className='control  control--flex'>
      <input
        onChange={({ target }) => {
          if (type === 'checkbox') {
            onChange(target.checked);
          } else {
            onChange(target.value);
          }
        }}
        className='control__input'
        type={type}
        name={name}
        id={id}
        value={value}
        checked={checked}
      />
      {!hiddenLabel && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export { Control };
