import { ReactNode } from 'react';

export type AuthFormWrapperProps = {
  formHeader: string;
  children: ReactNode;
  questionHeader: string;
  questionLinkLabel: string;
  questionLinkUrl: string;
};
