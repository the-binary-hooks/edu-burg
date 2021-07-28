import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../DashboardCommon/Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className="col-md-10 mt-5 shadow m-auto px-3 py-4" style={{ maxWidth: '900px' }}>
                    <h2 className="text-center pt-4">Make An Admin</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-id">ID</label>
                                <input  {...register("adminrId", { required: true })} type="number" className="form-control" id="admin-id" />
                                {errors.adminId && <span>This field is required</span>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-name">Name</label>
                                <input  {...register("adminName", { required: true })} type="text" className="form-control" id="admin-name" />
                                {errors.adminName && <span>This field is required</span>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-email">Email</label>
                                <input  {...register("adminEmail", { required: true })} type="text" className="form-control" id="admin-email" />
                                {errors.adminEmail && <span>This field is required</span>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="admin-phone">Phone</label>
                                <input  {...register("teacherPhone", { required: true })} type="tel" className="form-control" id="admin-phone" />
                                {errors.adminPhone && <span>This field is required</span>}
                            </div>
                            <div className="form-group mb-3">
                                <input type="file" name="teacher-image" id="admin-image" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Make Admin" className="form-control btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;