import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const NotificationBell = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;

  &:after {
    content: "${(props) => props.unreadCount || ''}";
    position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    color: white;
    font-size: 0.8rem;
    padding: 2px 6px;
    border-radius: 50%;
    display: ${(props) => (props.unreadCount > 0 ? 'inline-block' : 'none')};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 100;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const NotificationItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-weight: ${(props) => (props.unread ? 'bold' : 'normal')};
  cursor: pointer;

  &:hover {
    background: #f7f7f7;
  }
`;

const NotificationsDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/notifications',
        );
        setNotifications(response.data);
        setUnreadCount(response.data.filter((n) => !n.read).length);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleMarkAsRead = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/notifications/${id}`, {
        read: true,
      });
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, read: true } : n))
      );
      setUnreadCount((prev) => prev - 1);
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  return (
    <DropdownContainer>
      <NotificationBell unreadCount={unreadCount} onClick={toggleMenu}>
        🔔
      </NotificationBell>
      <DropdownMenu show={showMenu}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationItem
              key={notification._id}
              unread={!notification.read}
              onClick={() => handleMarkAsRead(notification._id)}
            >
              {notification.message}
            </NotificationItem>
          ))
        ) : (
          <p>No notifications</p>
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default NotificationsDropdown;
