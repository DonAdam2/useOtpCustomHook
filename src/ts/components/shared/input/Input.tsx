//styles
import classes from './Input.scss';
import { InputInterface, OptionInterface } from '@/ts/interfaces/components/shared/InputInterface';
import ErrorMessages from '@/ts/constants/ErrorMessages';
import { Fragment, Key, ReactNode, useState } from 'react';
import { objectWithoutKey } from '@/ts/constants/Helpers';

const Input = ({
  invalid,
  touched,
  elementType,
  elementClasses,
  elementConfig,
  value,
  changed,
  label,
  labelClasses,
  errorsArray,
  required,
  checkboxLabelPlacement,
  isColumnRadioGroup,
  icon,
  outlined,
  isTransparent,
}: InputInterface) => {
  const [showPassword, setShowPassword] = useState(false),
    inputClasses = [classes.input],
    errors: any = {
      isRequiredError: ErrorMessages.getRequiredErrorMessage(),
      isEmailError: ErrorMessages.getEmailErrorMessage(),
      isPasswordEqualError: ErrorMessages.getIdenticalErrorMessage(),
      isAlphaNumError: ErrorMessages.getAlphaNumErrorMessage(),
      isNumError: ErrorMessages.getNumErrorMessage(),
      isPhoneNumError: ErrorMessages.getPhoneNumErrorMessage(),
      isMinLengthError: ({ num, type }: { num: number; type: string }) =>
        ErrorMessages.getMinLengthErrorMessage({ num, type }),
      isMaxLengthError: ({ num, type }: { num: number; type: string }) =>
        ErrorMessages.getMaxLengthErrorMessage({ num, type }),
      isCharError: ErrorMessages.getCharErrorMessage(),
    },
    checkboxWrapperClasses = [' align-items-center'];
  let inputElement: ReactNode = null;

  if (elementConfig.datatype === 'password') {
    inputClasses.push(classes.passwordInput);
  }
  if ((invalid && touched) || (elementType === 'checkbox' && invalid && !value)) {
    inputClasses.push(classes.invalidInput);
  } else if (!invalid && touched && value) {
    inputClasses.push(classes.validInput);
  }
  if (
    (value ||
      elementConfig.type === 'date' ||
      elementConfig.type === 'datetime-local' ||
      elementType === 'select' ||
      elementType === 'select-group') &&
    elementType !== 'file-input'
  ) {
    inputClasses.push(classes.pushLabelUp);
  }
  if (isTransparent) {
    inputClasses.push(classes.transparentInput);
  }

  if (checkboxLabelPlacement === 'start') {
    checkboxWrapperClasses.push('flex-row-reverse', 'justify-content-end');
  } else if (checkboxLabelPlacement === 'top') {
    checkboxWrapperClasses.push('flex-column-reverse');
  } else if (checkboxLabelPlacement === 'bottom') {
    checkboxWrapperClasses.push('flex-column');
  }

  const toggleShowPassword = () => {
    setShowPassword((prev) => {
      elementConfig.type = prev ? 'password' : 'text';
      return !prev;
    });
  };

  const renderRequiredInput = () => (
    <Fragment>
      {inputElement}
      {label && elementType === 'file-input' && (
        <label
          //add it if your site supports rtl language => ${lang === 'ar' ? 'rightToLeft' : ''}
          className={`${classes.label} ${classes.fileInputLabelWrapper} ${
            labelClasses ? labelClasses.join(' ') : ''
          }`}
          htmlFor={elementConfig.id ? elementConfig.id : ''}
        >
          {icon && <div className={classes.fileInputIconWrapper}>{icon}</div>}
          <span className={classes.labelText} style={{ paddingInlineStart: icon ? 5 : '' }}>
            <span className={classes.fileInputLabel}>
              {label}
              {required ? '*' : ''}
            </span>
            {elementConfig.placeholder &&
              value &&
              typeof value !== 'number' &&
              typeof value !== 'boolean' && (
                <span className={classes.fileInputPlaceholder}>
                  {value?.length > 0 ? `Selected ${value?.length}` : elementConfig.placeholder}
                </span>
              )}
          </span>
        </label>
      )}
      {label && elementType !== 'file-input' && (
        <label
          //add it if your site supports rtl language => ${lang === 'ar' ? 'rightToLeft' : ''}
          className={`${classes.label} ${labelClasses ? labelClasses.join(' ') : ''}`}
          htmlFor={elementConfig.id ? elementConfig.id : ''}
        >
          {label}
          {required ? '*' : ''}
        </label>
      )}
      {elementConfig.datatype === 'password' && (
        <i
          className={`far fa-eye${showPassword ? '-slash' : ''} ${classes.showPasswordIcon}`}
          onClick={toggleShowPassword}
        />
      )}
    </Fragment>
  );

  const renderErrors = () => (
    <Fragment>
      {errorsArray && errorsArray.length > 0
        ? errorsArray.map((el, i) => (
            <Fragment key={i}>
              {el.value && (
                <p className={classes.errorMessage}>
                  {el.args ? errors[el.key](el.args) : errors[el.key]}
                </p>
              )}
            </Fragment>
          ))
        : null}
    </Fragment>
  );

  const renderInputWrapper = () => {
    if (elementType === 'checkbox') {
      return (
        <div>
          <div className={`${classes.checkboxContainer} ${checkboxWrapperClasses.join(' ')}`}>
            {renderRequiredInput()}
          </div>
          {renderErrors()}
        </div>
      );
    } else if (elementType === 'radio-group') {
      return (
        <div>
          <div className="d-flex flex-column-reverse">{renderRequiredInput()}</div>
          {renderErrors()}
        </div>
      );
    }
    return (
      <div>
        <div
          className={`${classes.inputWrapper} ${outlined ? classes.outlinedWrapper : ''}`}
          style={{ marginTop: outlined ? '' : 20 }}
        >
          {icon && elementType === 'input' && (
            <div
              //add it if your site supports rtl language => ${lang === 'ar' ? 'rightToLeft' : ''}
              className={classes.iconWrapper}
            >
              {icon}
            </div>
          )}
          <div
            className={`${classes.inputContainer} ${
              elementType === 'file-input' ? classes.fileInputWrapper : ''
            } ${icon && elementType === 'input' ? classes.inputWithIcon : ''} ${
              outlined ? classes.outlinedInputContainer : ''
            }`}
            style={{ marginTop: elementType === 'textarea' ? 10 : 'none' }}
          >
            {renderRequiredInput()}
          </div>
        </div>
        {renderErrors()}
      </div>
    );
  };

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
          {...elementConfig}
          value={value as string}
          onChange={changed}
          required={required}
        />
      );
      break;
    case 'file-input':
      inputElement = (
        <input
          className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
          {...elementConfig}
          onChange={changed}
          required={required}
        />
      );
      break;
    case 'radio-group':
      inputElement = (
        <div
          className={`${classes.radioGroupContainer} ${isColumnRadioGroup ? 'flex-column' : ''}`}
        >
          {elementConfig.options?.map((el, i) => (
            <label key={i} className={`${classes.radio} ${classes.radioInputWrapper}`}>
              <span className={classes.radioInput}>
                <input
                  checked={el.value === value}
                  type="radio"
                  name={elementConfig.name}
                  value={el.value}
                  onChange={changed}
                />
                <span className={classes.radioControlWrapper}>
                  <svg className={classes.radioControl} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                  </svg>
                  <svg className={classes.innerRadioControl} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.465 8.465A4.984 4.984 0 0112 7c2.76 0 5 2.24 5 5 0 1.38-.56 2.63-1.465 3.535A4.984 4.984 0 0112 17c-2.76 0-5-2.24-5-5 0-1.38.56-2.63 1.465-3.535z" />
                  </svg>
                </span>
              </span>
              <span className={classes.radioLabel}>{el.displayValue}</span>
            </label>
          ))}
        </div>
      );
      break;
    case 'checkbox':
      inputElement = (
        <input
          className={`${inputClasses.join(' ')} ${classes.checkbox} ${
            elementClasses ? elementClasses.join(' ') : ''
          }`}
          {...elementConfig}
          type="checkbox"
          onChange={changed}
          checked={value as boolean | undefined}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
          {...(elementConfig as any)}
          style={{ paddingTop: 19 }}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
          {...objectWithoutKey(elementConfig, 'options')}
          value={value as string}
          onChange={changed}
        >
          {elementConfig.options?.map((option) => (
            <option key={option.value as Key | null | undefined} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    case 'select-group': {
      const options = elementConfig.options as OptionInterface[];

      inputElement = (
        <select
          className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
          {...objectWithoutKey(elementConfig, 'options')}
          value={value as string}
          onChange={changed}
        >
          {options.length > 0 && (
            <Fragment>
              {options.map((group, i) => (
                <Fragment key={i}>
                  {group.options ? (
                    <optgroup key={i} label={group.groupName}>
                      {group.options.map((option, i) => (
                        <Fragment key={i}>
                          <option value={option.value}>{option.displayValue}</option>
                        </Fragment>
                      ))}
                    </optgroup>
                  ) : (
                    <option value={group.value}>{group.displayValue}</option>
                  )}
                </Fragment>
              ))}
            </Fragment>
          )}
        </select>
      );
      break;
    }
    default:
      inputElement = (
        <input
          className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
          {...elementConfig}
          value={value as string}
          onChange={changed}
          required={required}
        />
      );
  }

  return <>{renderInputWrapper()}</>;
};

export default Input;
