import { InputField } from './InputField';
import { LoginSchema, type LoginFormData } from '../../schemas/AuthSchema';
import { UseAuth } from '../../context/AuthContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { login, isLoading } = UseAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange'
  });

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  return (
    <section className="body-sign">
      <div className="center-sign">
        <div className="panel panel-sign">
          <div className="panel-title-sign mt-xl text-right">
						<h2 className="title text-uppercase text-bold m-none">
              <i className="fa fa-user mr-xs"></i> Sign In
            </h2>
					</div>

          <div className="panel-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-lg">
                <InputField
                  label="Email"
                  type="email"
                  register={register('email')}
                  error={errors.email}
                  placeholder="you@example.com"             
                />
              </div>

              <div className="form-group mb-lg">
                  <InputField
                    label="Password"
                    type="password"
                    register={register('password')}
                    error={errors.password}
                    placeholder="••••••••"
                  />
                  <a href="pages-recover-password.html" className="pull-right">Lost Password?</a>
              </div>

              <div className="row">
                <div className="col-sm-8">
									<div className="checkbox-custom checkbox-default">
										<input id="RememberMe" name="rememberme" type="checkbox"/>
										<label>Remember Me</label>
									</div>
								</div>

                <div className="col-sm-4 text-right">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;