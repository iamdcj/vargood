import * as React from 'react';

interface Props {
  name: string;
  id: string;
  value: any;
  label: string;
  checked?: boolean;
  onChange: any;
  type: string;
}

const Control: React.SFC<Props> = ({
  name,
  id,
  value,
  label,
  checked,
  type,
  onChange
}) => {
  return (
    <div className='control  control--flex'>
      <div>
        <input
          onChange={({ target }) => onChange(target)}
          className='control__input'
          type={type}
          name={name}
          id={id}
          value={value}
          checked={checked}
        />
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export { Control };
