import { useState, useRef, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/login/actions';
import { useAppSelector, useAppDispatch  } from '../../hooks/index';



export const LoginPage: FC  = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loginData } = useAppSelector(
    (state) => state.login,
  );
  const [isPassType, setIsPassType] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const [passValue, setPassValue] = useState('');
  const inputPassRef = useRef<HTMLInputElement>(null);
  const onPassIconClick = () => {
    setIsPassType(!isPassType);
  };
  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(login(inputEmailRef?.current?.value, inputPassRef?.current?.value));
  };
  const { logOutRequest } = useAppSelector((state ) => state.logout);

  useEffect(() => {
    if (loginData && !logOutRequest) {
      navigate('/');
    }
  }, [loginData, navigate, logOutRequest]);

  return (
    <div className="PageWrapper">
      <h1 className="text text_type_main-medium mb-4">Вход</h1>
      <form className="Form" onSubmit={loginHandler}>
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
          value={emailValue}
          name={'name'}
          error={false}
          ref={inputEmailRef}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
        <Input
          type={isPassType ? 'password' : 'text'}
          placeholder={'Пароль'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassValue(e.target.value)}
          icon={isPassType ? 'ShowIcon' : 'HideIcon'}
          value={passValue}
          name={'name'}
          error={false}
          ref={inputPassRef}
          onIconClick={onPassIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
        <Button
          // disabled={isLoading}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Войти
        </Button>
        {/* {errorText && (
          <p
            className={`ErrorText text text_type_main-default text_color_inactive`}
          >
            {errorText}
          </p>
        )} */}
      </form>
      <p className="text text_type_main-default text_color_inactive mb-4 mt-20">
        Вы — новый пользователь?{' '}
        <Link className="Link" to={'/register'}>
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль?{' '}
        <Link className="Link" to={'/forgot-password'}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};
