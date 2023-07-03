import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

export default function MyAppoinments() {
  const { user,loading } = useAuth();
  const token = localStorage.getItem('access-token');

  const { refetch, data: myappoinments = [] } = useQuery({
    queryKey: ['appoinments'],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://cleaning-service-server-delta.vercel.app/appoinments?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      
      return res.json();
    },
  });

  console.log(myappoinments);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/appoinments/${_id}`).then((res) => {
          if (res.deletedCount > 0) {
            refetch();
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-screen md:w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Service Name</th>
            <th>Service Date</th>
            <th>Time of Service</th>
            <th>Rate</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myappoinments.map((myappoinment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{myappoinment.firstName + ' ' + myappoinment.lastName}</td>
              <td>{myappoinment.email}</td>
              <td>{myappoinment.address}</td>
              <td>{myappoinment.phoneNumber}</td>
              <td>{myappoinment.cleaningName}</td>
              <td>{new Date(myappoinment.serviceDate).toLocaleDateString()}</td>
              <td>
                {myappoinment.hour + ':' + myappoinment.minute + myappoinment.period}
              </td>
              <td>${myappoinment.rate}</td>
              <td>
                <span
                  className={
                    myappoinment.status === 'pending'
                      ? 'bg-yellow-400 px-4 rounded-xl'
                      : myappoinment.status === 'approved'
                      ? 'bg-green-500 px-4 rounded-xl'
                      : myappoinment.status === 'denied'
                      ? 'bg-red-500 px-4 rounded-xl text-white'
                      : ''
                  }
                >
                  {myappoinment.status}
                </span>
              </td>
              <td>
                <button
                  className="btn bg-red-500 text-white"
                  onClick={() => handleDelete(myappoinment._id)}
                >
                  Delete
                </button>
                <Link to={`/dashboard/payment/${myappoinment._id}`}>
                  <button
                    className="btn bg-yellow-500 text-white"
                    disabled={myappoinment.status === 'denied' || (myappoinment.status !== 'approved' && true)}
                  >
                    Pay
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
