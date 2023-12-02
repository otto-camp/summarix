import React from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

interface CalloutProps extends React.PropsWithChildren {
  icon?: string;
  title?: string;
}

export function Callout({ title, children, icon, ...props }: CalloutProps) {
  return (
    <Alert {...props}>
      {icon && <span className='mr-4 text-2xl'>{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}