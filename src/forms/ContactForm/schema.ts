import * as yup from 'yup';

export type FormData = {
   name: string;
   contact: string;
   comment?: string;
};

export const schema = yup.object({
    name: yup.string().required(),
    contact: yup.string().required(),
    comment: yup.string(),
});
