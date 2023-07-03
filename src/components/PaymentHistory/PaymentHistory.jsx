import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function PaymentHistory() {
  const { user } = useAuth();
  console.log(user?.email);
  const token = localStorage.getItem('access-token');
  const [asc, setAsc] = useState(false);
  const { refetch, data: payments = [] } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      if (!user?.email) return []; // Check if user email is defined

      const res = await fetch(`http://localhost:5000/payments?email=${user.email}&sort=${asc ? 'asc' : 'desc'}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.json();
    },
  });

  useEffect(() => {
    refetch();
  }, [asc, refetch]);

  let handleSort = () => {
    setAsc(!asc);
  };

  if (!user?.email) {
    return <div>Loading...</div>; // or render a loading state while user data is being fetched
  }

  return (
    <div className='mt-7'>
      <div className='text-end'>
        <button className='btn bg-slate-700 text-white' onClick={handleSort}>
          {asc ? 'Rate High to Low' : 'Rate Low to High'}
        </button>
      </div>
      <div className='overflow-x-auto w-screen md:w-full mt-12'>
        <table className='table '>
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>transactionId</th>
              <td>Service Name</td>
              <td>Rate</td>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{payment.name}</td>
                  <td>{payment.email}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.cleaningName}</td>
                  <td>{payment.rate}</td>
                  <td>
                    <span className='bg-green-500 text-white px-5  rounded-xl'>{payment.status}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
