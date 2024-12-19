import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchUserActivities } from '../services/api';
import UserProfile from '../components/UserProfile';
import UserActivities from '../components/UserActivities';
import '../styles/UserDashboard.css'

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
        if (usersData.length > 0) setSelectedUser(usersData[0]);
      } catch (err) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const loadActivities = async () => {
        try {
          const activitiesData = await fetchUserActivities(selectedUser.id);
          setActivities(activitiesData);
        } catch (err) {
          setError('Failed to fetch activities.');
        }
      };
      loadActivities();
    }
  }, [selectedUser]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
      <div className="user-selector">
        <h2>Select User</h2>
        <select
          value={selectedUser?.id || ''}
          onChange={(e) => {
            const user = users.find(user => user.id === parseInt(e.target.value));
            setSelectedUser(user);
          }}
        >
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      {selectedUser && (
        <UserProfile
          name={selectedUser.name}
          email={selectedUser.email}
          phone={selectedUser.phone}
        />
      )}
      <UserActivities activities={activities} />
    </div>
  );
};

export default UserDashboard;
