import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { UserData } from '../context/UserContext';
import { LoadingAnimation } from '../components/Loading';

const RegisterTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, setUser } = UserData();
  const [name, setName] = useState('');
  const [members, setMembers] = useState([{ name: '', age: '' }]);
  const [loading, setLoading] = useState(false);

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const addMember = () => {
    setMembers([...members, { name: '', age: '' }]);
  };

  const removeMember = (index) => {
    // Ensure at least one member is always present if desired
    if (members.length === 1) return;
    setMembers(members.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/events/register/${id}`, { name, members });
      setUser({ ...user, joinedEvents: [...user.joinedEvents, id] });
      navigate('/joined');
    } catch (error) {
      console.error('Error registering team:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register Team</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Team Name
            </label>
            <input
              type="text"
              id="name"
              className="common-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {members.map((member, index) => (
            <div key={index} className="mb-4 border p-2 rounded">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Member {index + 1}
                </label>
                {members.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeMember(index)}
                    className="text-red-600 text-xs"
                  >
                    Remove
                  </button>
                )}
              </div>
              <input
                type="text"
                placeholder="Name"
                className="common-input mb-2"
                value={member.name}
                onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Age"
                className="common-input"
                value={member.age}
                onChange={(e) => handleMemberChange(index, 'age', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" className="common-btn mb-4" onClick={addMember}>
            Add Member
          </button>
          <button type="submit" className="common-btn" disabled={loading}>
            {loading ? <LoadingAnimation /> : 'Register Team'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterTeam;