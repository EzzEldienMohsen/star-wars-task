import React from 'react';
import * as Yup from 'yup';
import { AppDispatch, RootState, useTypedSelector } from '../store';
import { useDispatch } from 'react-redux';
import { getSingleName } from '../features/starWars/starWarsSlice';
import { toast } from 'react-toastify';
import { Box, TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [values, setValues] = React.useState<{ name: string }>({ name: '' });
  const { allNames } = useTypedSelector((state: RootState) => state.starWars);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const FromSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await FromSchema.validate(values, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          validationErrors[error.path!] = error.message;
        });
        setErrors(validationErrors);
      }
      return false;
    }
  };
  const navigate = useNavigate();
  const onSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const isFormValid = await validateForm();
    if (!isFormValid) {
      return;
    }

    const theName = allNames.results.find((i) => values.name === i.name);
    const url = theName?.url;
    const parts = url?.split('/');
    const id = parts ? parts[parts.length - 2] : null;

    if (id) {
      dispatch(getSingleName({ id }));
      navigate('/singleName');
    } else {
      toast.error('Character not found in Star Wars.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        width: '100%', // Full width of the screen
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        variant="outlined"
        value={values.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  backgroundColor: '#E1E8D9',
                  height: '100%',
                  padding: '16px 8px', // Adjust padding for the label
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '1px solid #CCC',
                  color: '#000',
                  fontWeight: 'bold',
                  width: '150px', // Ensure the label area takes enough space without margins
                }}
              >
                Search by name:
              </Box>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#FFF',
            paddingLeft: '0px', // Remove any padding from the left
          },
        }}
      />
    </Box>
  );
};

export default Form;
