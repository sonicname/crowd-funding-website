import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { FormGroup } from 'components/common';
import { Button } from 'components/button';
import { Checkbox } from 'components/checkbox';
import { IconEyeToggle } from '../components/icons';

import LayoutAuth from 'layouts/LayoutAuth';
import useToggleValue from '../hooks/useToggleValue';

const schema = yup.object({
  name: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('This field is required'),
  password: yup
    .string()
    .required('This field is required')
    .min(8, 'Password must be 8 character')
});

const SignUpPage = () => {
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue(false);

  const { value: showPass, handleToggleValue: handleToggleShowPass } =
    useToggleValue(false);
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });

  const handleSignUp = (values) => {
    console.log(values);
  };

  return (
    <LayoutAuth heading="Sign Up">
      <p className="text-center text-xs lg:text-sm font-normal text-text3 mb-6 lg:mb-8">
        Already have an account?{' '}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>

      <button className="flex items-center justify-center py-3 gap-x-3 w-full border border-strock rounded-xl text-text2 text-base font-semibold mb-4">
        <img srcSet="/google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            type="text"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          />
        </FormGroup>
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
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="text-xs lg:text-sm text-text2 flex-1">
              I agree to the{' '}
              <span className="text-secondary underline">Terms of Use</span> and
              have read and understand the{' '}
              <span className="text-secondary underline">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>

        <Button className="w-full bg-primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuth>
  );
};

export default SignUpPage;
