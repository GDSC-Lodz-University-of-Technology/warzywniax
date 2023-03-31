import { ContainedButton, OutlinedButton, TextButton } from './Button.styled';
import { CircularProgress } from '@mui/material';
import { CustomButtonProps } from './Button.types';
import { ElementType } from 'react';

export const Button = <C extends ElementType>({
  variant = 'contained',
  children,
  isLoading,
  ...buttonProps
}: CustomButtonProps<C>) => {
  const content = isLoading ? (
    <CircularProgress
      color={variant === 'contained' ? 'inherit' : 'primary'}
      size={24}
    />
  ) : (
    children
  );

  if (variant === 'contained') {
    return (
      <ContainedButton
        isLoading={isLoading}
        {...buttonProps}
      >
        {content}
      </ContainedButton>
    );
  } else if (variant === 'outlined') {
    return (
      <OutlinedButton
        isLoading={isLoading}
        {...buttonProps}
      >
        {content}
      </OutlinedButton>
    );
  }
  return (
    <TextButton
      isLoading={isLoading}
      {...buttonProps}
    >
      {content}
    </TextButton>
  );
};
