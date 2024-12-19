import React from 'react';
import '../styles/UserActivities.css'

interface UserActivitiesProps {
  activities: { id: number; title: string }[];
}

const UserActivities: React.FC<UserActivitiesProps> = ({ activities }) => {
  return (
    <div className="user-activities">
      <h2>User Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
