import { useCallback, useEffect, useRef, Fragment, FC, PropsWithChildren } from 'react';
//interfaces
import {
  ModalBtnInterface,
  ModalInterface,
} from '@/ts/interfaces/components/shared/ModalInterface';

const Modal: FC<PropsWithChildren<ModalInterface>> = ({
  headerCloseHandler,
  show,
  enableHeader,
  customTitle,
  title,
  headerBtns,
  isHeaderNoCloseBtn,
  enableFooter,
  footerBtns,
  isCancelClickOnOverlay,
  maxWidth,
  children,
}) => {
  const modalWrapper = useRef(null);

  const shortcutsHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && headerCloseHandler && show) headerCloseHandler();
    },
    [headerCloseHandler, show]
  );

  useEffect(() => {
    window.addEventListener('keydown', shortcutsHandler);

    return () => {
      window.removeEventListener('keydown', shortcutsHandler);
    };
  }, [shortcutsHandler]);

  const renderHeader = () => {
    if (enableHeader === false) {
      return;
    }
    return (
      <div className="modal-header">
        <div>
          {customTitle ? customTitle : <h4 className="modal-title">{title}</h4>}
          <div>
            {headerBtns && renderModalBtns(headerBtns)}
            {!isHeaderNoCloseBtn && (
              <button className="header-close-btn" onClick={headerCloseHandler}>
                ×
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    if (enableFooter === false) {
      return;
    }
    return <div className="modal-footer">{footerBtns && renderModalBtns(footerBtns)}</div>;
  };

  const renderModalBtns = (buttons: ModalBtnInterface[]) =>
    buttons.map((el, i) => {
      let buttonColorClass = '';

      switch (el.color) {
        case 'red':
          buttonColorClass = 'modal-btn-danger';
          break;
        case 'grey':
          buttonColorClass = 'modal-btn-secondary';
          break;
        case 'green':
          buttonColorClass = 'modal-btn-success';
          break;
        case 'yellow':
          buttonColorClass = 'modal-btn-warning';
          break;
        case 'lightBlue':
          buttonColorClass = 'modal-btn-info';
          break;
        case 'black':
          buttonColorClass = 'modal-btn-dark';
          break;
        default:
          buttonColorClass = 'modal-btn-primary';
      }

      return (
        <Fragment key={i}>
          <button
            className={`modal-btn ${buttonColorClass}`}
            onClick={el.click}
            disabled={el.disabled}
          >
            <span className="btn-content">
              {el.icon && <i className={`fas ${el.icon} icon`} />}
              {el.label}
            </span>
          </button>
        </Fragment>
      );
    });

  return (
    <div
      className={`modal-window ${!show ? 'inactive-modal' : ''}`}
      style={{ cursor: headerCloseHandler ? 'pointer' : 'initial' }}
      onClick={(e) => {
        if (e.target === modalWrapper.current && !isCancelClickOnOverlay) {
          if (headerCloseHandler) {
            headerCloseHandler();
          }
        }
      }}
    >
      <div className="modal-wrapper" ref={modalWrapper}>
        <div
          className={`modal ${show ? 'animate-modal' : ''}`}
          style={{ maxWidth: maxWidth ? maxWidth : '' }}
        >
          {renderHeader()}
          <div className="modal-body">{show ? children : null}</div>
          {renderFooter()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
