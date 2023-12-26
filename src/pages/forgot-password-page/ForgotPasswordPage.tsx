import { useState, useRef,FC, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link  } from 'react-router-dom';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { recoverPassword, cleanRecoverPassword } from '../../services/forgot-password/actions';


export const ForgotPasswordPage: FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const dispatch: any = useDispatch();
  const { success, isRequestSent, isLoading, errorText }: any = useSelector((state : any) => state.recoverPassword);
  const navigate = useNavigate();
  const location = useLocation();

  const forgotPasswordHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(recoverPassword(emailValue));
  }

  useEffect(()=> {
    if(location.state?.from === '/reset-password') {
      dispatch(cleanRecoverPassword());
      return;
    }
  
    if (success && isRequestSent) {
        navigate('/reset-password');
        return
    }
  }, [dispatch, success, isRequestSent]);

  return (
    <div className='PageWrapper'>
      <h1 className="text text_type_main-medium mb-4">
        Восстановление пароля
      </h1>
      <form className='Form' onSubmit={forgotPasswordHandler}>
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
          value={emailValue}
          name={'name'}
          error={false}
          ref={inputEmailRef}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
        <Button disabled={isLoading} htmlType="submit" type="primary" size="medium">
          Восстановить
        </Button>
          { errorText &&
            <p className={`ErrorText text text_type_main-default text_color_inactive`}>
              { errorText }
            </p>
          }
      </form>
      <p className="text text_type_main-default text_color_inactive mb-4 mt-20">
        Вспомнили пароль? <Link className="Link" to={'/login'}>Войти</Link>
      </p>
    </div>
  )
}