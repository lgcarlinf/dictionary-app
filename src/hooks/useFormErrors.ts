import { Input } from '@/components/InputSearch';
import { useEffect } from 'react'
import { FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';

export const useFormErrors = (errors:FieldErrors<Input>) => {
    useEffect(() => {
        if (errors.search) {
            toast(errors.search.message, {
                type: "error",
                toastId: "search-error", 
                autoClose: 3000
            });
        }
    }, [errors.search]);
}
