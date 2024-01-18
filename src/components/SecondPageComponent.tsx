import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';


const ApiComponent = () => {
  const [data, setData] = useState([]);

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;



//const result = ApiComponent.dosomething();

// Define TypeScript model/interface
// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const SecondPageComponent: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Define columns for the DataGrid
//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'title', headerName: 'Title', width: 300 },
//     { field: 'body', headerName: 'Body', width: 500 },
//   ];

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <DataGrid
//           rows={posts}
//           columns={columns}
//           pagination
//           pageSize={5}
//           rowsPerPageOptions={[5, 10, 20]}
//           checkboxSelection
//           disableSelectionOnClick
//         />
//       )}
//     </div>
//   );
// };

// export default SecondPageComponent;
