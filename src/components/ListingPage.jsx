import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getSubmissions } from '../services/api';
import './ListingPage.css';

const ListingPage = () => {
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      full_name: 'Tushar Jain',
      email: 'tusharj.work@gmail.com',
      contact_no: '8690041886',
      message: 'dummy data to test',
    },
  ]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await getSubmissions();
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
        // Handle error appropriately (e.g., display error message)
      }
    };
  
    fetchSubmissions();
  }, []);
  

  const columns = [
    { field: 'id', headerName: 'S.No', width: 90 },
    { field: 'full_name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'contact_no', headerName: 'Contact no.', width: 200 },
    { field: 'message', headerName: 'Message', width: 300 },
  ];

  const rows = submissions?.length > 0 ? submissions.map((submission, index) => ({
    id: index + 1,
    ...submission,
  })) : [];
  

  return (
    <div className='listing-container'>
     <header className="header">
         <img src="/assests/logo1.png" alt="Logo" className="logo" />
     </header>
      <div className="waiting-list-container">
        <h2 className="waiting-list-text">Waitlist Database</h2>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid className='.submission-table td'
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
