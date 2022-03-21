import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ModalBtnInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  click: () => void;
  icon?: string | ReactNode;
  label: string;
}

export interface ModalInterface {
  show?: boolean;
  enableHeader?: boolean;
  customTitle?: ReactNode;
  title?: string;
  isHeaderNoCloseBtn?: boolean;
  isCancelClickOnOverlay?: boolean;
  maxWidth?: number;
  headerCloseHandler?: () => void;
  headerBtns?: ModalBtnInterface[];
  enableFooter?: boolean;
  footerBtns: ModalBtnInterface[];
}
