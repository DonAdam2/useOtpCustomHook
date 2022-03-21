import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

export interface OptionInterface {
  value: string | number | readonly string[] | undefined;
  displayValue: string;
  options?: {
    value: string | number | readonly string[] | undefined;
    displayValue: string;
  }[];
  groupName?: string;
}

interface InputElementConfigInterface extends InputHTMLAttributes<HTMLInputElement> {
  options?: OptionInterface[];
  datatype?: string;
}

interface ErrorsInterface {
  key: string;
  value: boolean;
  args?: any;
}

export type InputElementTypes =
  | 'input'
  | 'radio-group'
  | 'checkbox'
  | 'textarea'
  | 'select'
  | 'select-group'
  | 'file-input';

export interface InputInterface {
  invalid?: boolean;
  touched?: boolean;
  elementType: InputElementTypes;
  elementClasses?: string[];
  elementConfig: InputElementConfigInterface;
  value: string | number | readonly string[] | boolean | undefined;
  changed: (e: any) => void;
  label?: string;
  labelClasses?: string[];
  errorsArray?: ErrorsInterface[];
  required?: boolean;
  checkboxLabelPlacement?: 'start' | 'top' | 'bottom';
  isColumnRadioGroup?: boolean;
  icon?: string | ReactNode;
  outlined?: boolean;
  isTransparent?: boolean;
}
