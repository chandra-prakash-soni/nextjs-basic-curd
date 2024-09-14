"use client"
import { FeedbackHandle } from '@/redux/action/api';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'

const Feedback = () => {
    const dispatch = useDispatch()
    const { responseOk } = useSelector((state) => state.collections)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [spinner, setspinner] = useState(false)

    useEffect(() => {
        if (responseOk) {
            setspinner(false)

        }
    }, [responseOk])

    const onSubmit = (data) => {
        setspinner(true)
        dispatch(FeedbackHandle(data))

    }
    return (
        <div >
            <span className="d-flex justify-content-center mt-8 font-bold">FeedBack</span>
            <div class="col-lg-8 mt-5 mt-lg-0 mx-auto my-3 mt-8">

                <form class="php-email-form my-4" onSubmit={handleSubmit(onSubmit)}>
                    <div class="row gy-2 gx-md-3">
                        <div class="col-md-6 form-group">
                            <label className="ml-2">Name</label>
                            {/* <input type="password" className="form-control" {...register('password', {
                                required: { value: true, message: 'Password is required' }
                            })} */}
                            <input type="text"
                                name="name"
                                class="form-control"
                                placeholder="Your Name"
                                {...register('name', {
                                    required: { value: true, message: 'Name Required.' }
                                })} />
                            {errors?.name?.type && <small className="m-2 text-danger">{errors?.name?.message}</small>}

                        </div>
                        <div class="col-md-6 form-group">
                            <label className="ml-2">Email</label>
                            <input type="email"
                                class="form-control"
                                name="email"
                                placeholder="Your Email"
                                {...register('email', {
                                    required: { value: true, message: 'Email Required.' }
                                })} />
                            {errors?.email?.type && <small className="m-2 text-danger">{errors?.email?.message}</small>}
                        </div>
                        <div class="form-group col-12">
                            <label className="ml-2">subject</label>
                            <input type="text"
                                class="form-control"
                                placeholder="Subject"
                                {...register('subject', {
                                    required: { value: true, message: 'Subject Required.' }
                                })} />
                            {errors?.subject?.type && <small className="m-2 text-danger">{errors?.subject?.message}</small>}

                        </div>
                        <div class="form-group col-12">
                            <textarea
                                class="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                {...register('message', {
                                    required: { value: true, message: 'message Required.' }
                                })}></textarea>
                            {errors?.message?.type && <small className="m-2 text-danger">{errors?.message?.message}</small>}

                        </div>

                        <div class="text-center col-12 mt-3">
                            {!spinner ? <button
                                type="submit"
                                disabled={errors?.name?.type || errors?.message?.type || errors?.subject?.type || errors?.email?.type}
                                className="btn btn-outline-primary py-2 px-6 w-fit"
                            >
                                Submit Feedback
                            </button>
                                :
                                <button class="btn btn-outline-primary" type="button" disabled>
                                    <span class="spinner-grow spinner-grow-sm mx-2" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Feedback
