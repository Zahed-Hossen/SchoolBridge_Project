import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ProfileContainer,
  ProfilePicture,
  ProfileImage,
  ProfileInput,
  ProfileDetailsForm,
  ProfileLabel,
  ProfileInputField,
  ProfileTextarea,
  ProfileButton,
  PasswordSection,
  PasswordInput,
  PasswordButton,
} from './ProfilePageStyles';

const Profile = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    bio: '',
    profilePic: '',
    borrowingHistory: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [editMode, setEditMode] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/profile',
        );
        setUser(response.data);
        setLoading(false);
      } catch {
        setError('Failed to load profile data. Please try again later.');
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle profile picture upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUser({ ...user, profilePic: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  // Save updated profile
  const handleSaveProfile = async () => {
    try {
      setLoading(true);
      await axios.put(
        'https://schoolbridge-project-server.onrender.com/api/profile',
        user,
      );
      setEditMode(false);
      alert('Profile updated successfully!');
    } catch {
      setError('Failed to update profile. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle password update
  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword || newPassword === '') {
      setError('Passwords do not match. Please try again.');
      return;
    }
    try {
      setLoading(true);
      await axios.put(
        'https://schoolbridge-project-server.onrender.com/api/profile/password',
        {
          newPassword,
        },
      );
      alert('Password updated successfully!');
      setNewPassword('');
      setConfirmPassword('');
    } catch {
      setError('Failed to update password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileContainer>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Profile Picture */}
      <ProfilePicture>
        <ProfileImage
          src={
            user.profilePic ||
            'https://via.placeholder.com/150?text=Profile+Picture'
          }
          alt="Profile"
        />

        <ProfileInput
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </ProfilePicture>

      {/* User Info */}
      <div className="profile-details">
        <h2>{editMode ? 'Edit Profile' : 'Profile Details'}</h2>
        <ProfileDetailsForm>
          <ProfileLabel>Full Name</ProfileLabel>
          <ProfileInputField
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            disabled={!editMode}
          />

          <ProfileLabel>Email</ProfileLabel>
          <ProfileInputField
            type="email"
            name="email"
            value={user.email}
            disabled
          />

          <ProfileLabel>Phone</ProfileLabel>
          <ProfileInputField
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!editMode}
          />

          <ProfileLabel>Role</ProfileLabel>
          <ProfileInputField
            type="text"
            name="role"
            value={user.role}
            disabled
          />

          <ProfileLabel>Bio</ProfileLabel>
          <ProfileTextarea
            name="bio"
            value={user.bio}
            onChange={handleChange}
            disabled={!editMode}
          ></ProfileTextarea>

          {/* Edit Mode Toggle */}
          {editMode ? (
            <ProfileButton type="button" onClick={handleSaveProfile}>
              Save Changes
            </ProfileButton>
          ) : (
            <ProfileButton type="button" onClick={() => setEditMode(true)}>
              Edit Profile
            </ProfileButton>
          )}
        </ProfileDetailsForm>
      </div>

      {/* Change Password */}
      <PasswordSection>
        <h3>Change Password</h3>
        <PasswordInput
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <PasswordInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <PasswordButton onClick={handlePasswordUpdate}>
          Update Password
        </PasswordButton>
      </PasswordSection>
      <div className="borrowing-history">
        <h3>Borrowing History</h3>
        {user?.borrowingHistory?.length > 0 ? (
          <ul>
            {user.borrowingHistory.map((entry) => (
              <li key={entry._id}>
                <p>Book: {entry.book.title}</p>
                <p>
                  Borrowed At: {new Date(entry.borrowedAt).toLocaleDateString()}
                </p>
                <p>
                  Returned At:{' '}
                  {entry.returnedAt
                    ? new Date(entry.returnedAt).toLocaleDateString()
                    : 'Not Returned'}
                </p>
                <p>
                  Penalty:{' '}
                  {entry.penalty > 0 ? `$${entry.penalty}` : 'No Penalty'}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No borrowing history found.</p>
        )}
      </div>
    </ProfileContainer>
  );
};

export default Profile;
