import React from 'react';
import LayoutAuth from '../layouts/LayoutAuth';
import { Link } from 'react-router-dom';
import { FormGroup } from '../components/common';
import { Label } from '../components/label';
import { Input } from '../components/input';
import { useForm } from 'react-hook-form';
import { IconEyeToggle } from '../components/icons';
import useToggleValue from '../hooks/useToggleValue';
import { Button, ButtonGoogle } from '../components/button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('This field is required'),
  password: yup
    .string()
    .required('This field is required')
    .min(8, 'Password must be 8 character')
});

const SignInPage = () => {
  const { value: showPass, handleToggleValue: handleToggleShowPass } =
    useToggleValue(false);

  const {
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });

  const handleSubmitLogin = (value) => {
    console.log(value);
  };

  return (
    <LayoutAuth heading="Welcome Back!">
      <p className="text-center text-xs lg:text-sm font-normal text-text3 mb-6 lg:mb-8">
        Dont have an account?{' '}
        <Link to="/sign-up" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>

      <ButtonGoogle />

      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${!showPass ? 'password' : 'text'}`}
            placeholder="Create a password"
            error={errors.password?.message}>
            <IconEyeToggle open={showPass} onClick={handleToggleShowPass} />
          </Input>
        </FormGroup>

        <FormGroup>
          <div className="text-right">
            <a
              href="#"
              className="inline-block text-sm font-medium text-primary">
              Forget Password
            </a>
          </div>
        </FormGroup>

        <Button className="w-full bg-primary" type="submit">
          Sign In
        </Button>
      </form>
    </LayoutAuth>
  );
};

export default SignInPage;
