import { googleAuthenticate, loginUser } from '@/redux/action/api';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { SiGridsome } from "react-icons/si";


const LogIn = ({ pageHandler }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin } = useSelector((state) => state.collections);
 
  const dispatch = useDispatch()
  const router = useRouter();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

 

  const handleGoogleAuth = () => {
    // Implement your Google authentication logic here
    signIn("google")
    
  };

  return (
    <div>
      <div className="modal d-block" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title fw-bold">Login</p>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => pageHandler(undefined)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="form-group">
                  <small for="exampleInputEmail1">E-mail</small>
                  <input type="text" className="form-control" {...register('email',
                    {
                      required: { value: true, message: 'email is required' },
                      pattern: { value: /^\S+@\S+$/i, message: 'check email Syntex' }
                    })} placeholder="email" />
                  {errors?.email?.type && <small className="text-danger">{errors?.email?.message}</small>}
                </div>
                <div className="form-group">
                  <small for="exampleInputPassword1">Password</small>
                  <input type="password" className="form-control" {...register('password', {
                    required: { value: true, message: 'Password is required' }
                  })} placeholder="password" />
                  {errors?.password?.type && <small className="text-danger">{errors?.password?.message}</small>}
                </div>


              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary p-1">Submit</button>
                {/* Google authentication button */}
                <button type="button" className="btn text-light bg-success d-flex " onClick={handleGoogleAuth}>
                  <SiGridsome className="m-0.5 mr-1 text-light" /> <small>Login with Google</small>
                </button>
                <button type="button" className="btn btn-secondary p-1" onClick={() => pageHandler(undefined)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
