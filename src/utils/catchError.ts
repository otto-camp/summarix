import { toast } from 'sonner';
import { z } from 'zod';

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    toast(errors.join('\n'));
  } else if (err instanceof Error) {
    toast(err.message);
  } else if (typeof err === 'string') {
    toast(err);
  } else {
    toast('Something went wrong, please try again later.');
  }
}

export function catchErrorServer(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      throw new Error(issue.message);
    });
    throw new Error(errors.join('\n'));
  } else if (err instanceof Error) {
    throw new Error(err.message);
  } else {
    throw new Error('Something went wrong, please try again later.');
  }
}
