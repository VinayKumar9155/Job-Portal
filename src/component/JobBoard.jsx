// // src/components/JobBoard.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const JobBoard = () => {
//   const [jobPostings, setJobPostings] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [noMoreJobs, setNoMoreJobs] = useState(false);

//   useEffect(() => {
//     if (page === 1) {
//       setLoading(true);
//       fetchInitialJobPostings();
//     }
//   }, [page]);

//   const fetchInitialJobPostings = async () => {
//     const response = await axios.get(
//       `https://hacker-news.firebaseio.com/v0/jobstories.json`
//     );

//     const startIndex = 0;
//     const endIndex = 6; // Display only 6 jobs initially

//     const jobIds = response.data.slice(startIndex, endIndex);

//     if (jobIds.length === 0) {
//       setNoMoreJobs(true);
//       setLoading(false);
//       return;
//     }

//     const jobPromises = jobIds.map(async (jobId) => {
//       const jobResponse = await axios.get(
//         `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
//       );
//       return jobResponse.data;
//     });

//     const jobs = await Promise.all(jobPromises);
//     setJobPostings(jobs);
//     setLoading(false);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     const formattedDate = date.toLocaleDateString();
//     const formattedTime = date.toLocaleTimeString();
//     return `            ${formattedDate} , ${formattedTime}`;
//   };

//   const loadMore = async () => {
//     if (!loading) {
//       setLoading(true);
//       const response = await axios.get(
//         `https://hacker-news.firebaseio.com/v0/jobstories.json`
//       );

//       const startIndex = page * 6;
//       const endIndex = startIndex + 6;

//       const jobIds = response.data.slice(startIndex, endIndex);

//       if (jobIds.length === 0) {
//         setNoMoreJobs(true);
//         setLoading(false);
//         return;
//       }

//       const jobPromises = jobIds.map(async (jobId) => {
//         const jobResponse = await axios.get(
//           `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
//         );
//         return jobResponse.data;
//       });

//       const jobs = await Promise.all(jobPromises);
//       setJobPostings((prevJobs) => [...prevJobs, ...jobs]);
//       setPage(page + 1);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto py-6 text-gray-900" style={{ background: '#f0f0f0' }}>
//       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
//         {jobPostings.map((job) => (
//           <div key={job.id} className="bg-white p-4 rounded shadow m-4 mx-auto job-posting" style={{ width: "600px"}}>
//             <h3 className="text-lg font-bold mb-2 capitalize">
//               {job.url ? (
//                 <a style={{ color: 'black' }}
//                   href={job.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   {job.title}
//                 </a>
//               ) : (
//                 job.title
//               )}
//             </h3>
//             <p className="text-gray-600 capitalize">By {job.by}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatDate(job.time)}</p>
//           </div>
//         ))}
//       </div>
//       {!noMoreJobs && (
//         <button
//           className="bg-blue-500 text-white p-3 my-4 rounded mx-auto block hover:bg-blue-700"
//           onClick={loadMore}
//         >
//           {loading ? "Loading..." : "Load More Jobs"}
//         </button>
//       )}
//     </div>
//   );
// };

// export default JobBoard;
