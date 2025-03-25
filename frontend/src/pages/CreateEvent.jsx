// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CreateEvent = () => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [location, setLocation] = useState('');
//   const [category, setCateory] = useState('');
//   const [difficulty, setDifficulty] = useState('');
//   const [teamSize, setTeamSize] = useState('');
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('date', date);
//     formData.append('location', location);
//     formData.append('category', category);
//     formData.append('difficulty', difficulty);
//     formData.append('teamSize', teamSize);
//     formData.append('file', image);

//     try {
//       await axios.post('/api/events/new', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       navigate('/');
//     } catch (error) {
//       console.error('Error creating event:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Create Event</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//             <input
//               type="text"
//               id="title"
//               className="common-input"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               id="description"
//               className="common-input"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
//             <input
//               type="date"
//               id="date"
//               className="common-input"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               id="location"
//               className="common-input"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
//             <input
//               type="text"
//               id="category"
//               className="common-input"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty</label>
//             <input
//               type="text"
//               id="difficulty"
//               className="common-input"
//               value={difficulty}
//               onChange={(e) => setDifficulty(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">Team Size</label>
//             <input
//               type="number"
//               id="teamSize"
//               className="common-input"
//               value={teamSize}
//               onChange={(e) => setTeamSize(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
//             <input
//               type="file"
//               id="image"
//               className="common-input"
//               onChange={handleImageChange}
//               required
//             />
//           </div>
//           <button type="submit" className="common-btn">Create Event</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateEvent;