import { store } from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { Form } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import useTranslation from '@/hooks/use-translation';
import ButtonCheckBox from '../Button/ButtonCheckBox';

const RegisterForm = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Form
        {...store.form()}
        resetOnSuccess={['password', 'password_confirmation']}
        disableWhileProcessing
        className="flex flex-col gap-6 w-full"
      >
        {({ processing, errors }) => (
          <div className="w-full grid gap-6">
            <div className="grid gap-2 w-full">
              <Label htmlFor="name">{t('Name')}</Label>
              <Input
                id="name"
                type="text"
                required
                autoFocus
                tabIndex={1}
                autoComplete="name"
                name="name"
                placeholder={t('Full name')}
                className="w-full"
              />
              <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="grid gap-2 w-full">
              <Label htmlFor="checkbox">{t('Account type')}</Label>
              <ButtonCheckBox />
              <InputError message={errors.checkbox} />
            </div>

            <div className="grid gap-2 w-full">
              <Label htmlFor="email">{t('email')}</Label>
              <Input
                id="email"
                type="email"
                required
                tabIndex={2}
                autoComplete="email"
                name="email"
                placeholder="email@example.com"
                className="w-full"
              />
              <InputError message={errors.email} />
            </div>

            <div className="grid gap-2 w-full">
              <Label htmlFor="phone">{t('Phone Number')}</Label>
              <Input
                id="phone"
                type="number"
                required
                tabIndex={3}
                autoComplete="phone"
                name="phone"
                placeholder={t('Phone')}
                className="w-full"
              />
              <InputError message={errors.phone} />
            </div>

            <div className="grid gap-2 w-full">
              <Label htmlFor="password">{t('Password')}</Label>
              <Input
                id="password"
                type="password"
                required
                tabIndex={4}
                autoComplete="new-password"
                name="password"
                placeholder={t('Password')}
                className="w-full"
              />
              <InputError message={errors.password} />
            </div>

            <div className="grid gap-2 w-full">
              <Label htmlFor="password_confirmation">{t('Confirm password')}</Label>
              <Input
                id="password_confirmation"
                type="password"
                required
                tabIndex={5}
                autoComplete="new-password"
                name="password_confirmation"
                placeholder={t('Confirm password')}
                className="w-full"
              />
              <InputError message={errors.password_confirmation} />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" name="terms" required />
              <Label htmlFor="terms" className="text-sm">
                {t('I agree to the Terms and Conditions')}
              </Label>
            </div>
            <InputError message={errors.terms} />

            <Button
              type="submit"
              className="mt-2 w-full flex items-center justify-center gap-2"
              tabIndex={6}
            >
              {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
              {t('Create account')}
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default RegisterForm;
