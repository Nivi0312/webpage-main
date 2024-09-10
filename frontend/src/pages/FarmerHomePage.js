import React, { useState } from 'react';
import { FaPlus, FaCommentAlt, FaShoppingCart, FaUsers, FaMicrophone } from 'react-icons/fa';
import { Routes, Route, Link } from 'react-router-dom';

// Import the images at the top of your file
import machineImg from '../assets/machine.jpg';
import fertilizerImg from '../assets/fertilizer.jpg';
import pesticidesImg from '../assets/pesticides.jpg';

// Pages for Navigation
const Dashboard = () => <h2>Dashboard Page</h2>;
const DataAnalytics = () => <h2>Data Analytics Page</h2>;
const Rewards = () => <h2>Rewards Page</h2>;
const FarmTour = () => <h2>Farm Tour Page</h2>;
const FarmingPractices = () => <h2>Farming Practices Page</h2>;
const Feedback = () => <h2>Feedback Page</h2>;

const FarmerHomePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleOrderClick = () => {
    console.log("Order button clicked");
  };

  const handleCommunityClick = () => {
    console.log("Community button clicked");
  };

  const handleVoiceAssistClick = () => {
    console.log("Voice Assist button clicked");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.menuButton} onClick={toggleDrawer}>
          <span style={styles.menuIcon}>&#9776;</span>
        </button>
        <h1 style={styles.pageTitle}>Farmer Page</h1>
        <div style={styles.userIcon}>
          <img
            src="https://via.placeholder.com/30"
            alt="User"
            style={styles.profileImg}
          />
        </div>
      </header>

      {/* Drawer Navigation */}
      <div style={{ ...styles.drawer, transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)', visibility: isDrawerOpen ? 'visible' : 'hidden' }}>
        <h3 style={styles.drawerTitle}>Farmer Profile</h3>
        <ul style={styles.drawerList}>
          <li><Link to="/" onClick={toggleDrawer} style={styles.drawerLink}>Dashboard</Link></li>
          <li><Link to="/analytics" onClick={toggleDrawer} style={styles.drawerLink}>Data Analytics</Link></li>
          <li><Link to="/rewards" onClick={toggleDrawer} style={styles.drawerLink}>Rewards</Link></li>
          <li><Link to="/tour" onClick={toggleDrawer} style={styles.drawerLink}>Farm Tour</Link></li>
          <li><Link to="/practices" onClick={toggleDrawer} style={styles.drawerLink}>Farming Practices</Link></li>
          <li><Link to="/feedback" onClick={toggleDrawer} style={styles.drawerLink}>Feedback</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      <div style={{ ...styles.overlay, opacity: isDrawerOpen ? 1 : 0, visibility: isDrawerOpen ? 'visible' : 'hidden' }} onClick={toggleDrawer}></div>

      {/* Search Section */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Location"
          style={styles.searchInput}
        />
        <input
          type="text"
          placeholder="Search Category"
          style={styles.searchInput}
        />
      </div>

      {/* Horizontal Scroll Section */}
      <div style={styles.horizontalScroll}>
        <div style={styles.scrollItem}>Recent Updates</div>
      </div>

      {/* Categories Section */}
      <div style={styles.categoriesContainer}>
        <div style={styles.categoryCard}>
          <img
            src={machineImg}
            alt="Machinery"
            style={styles.categoryImage}
          />
          <p style={styles.categoryTitle}>Machinery</p>
        </div>
        <div style={styles.categoryCard}>
          <img
            src={fertilizerImg}
            alt="Fertilizers"
            style={styles.categoryImage}
          />
          <p style={styles.categoryTitle}>Fertilizers</p>
        </div>
        <div style={styles.categoryCard}>
          <img
            src={pesticidesImg}
            alt="Pesticides"
            style={styles.categoryImage}
          />
          <p style={styles.categoryTitle}>Pesticides</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <h2 style={styles.sectionTitle}>Recent Activities</h2>
      <div style={styles.recentActivityContainer}>
        <div style={styles.activityCard}>
          <p style={styles.activityText}>You bought 10 bags of fertilizer</p>
        </div>
        <div style={styles.activityCard}>
          <p style={styles.activityText}>New message from your supplier</p>
        </div>
        <div style={styles.activityCard}>
          <p style={styles.activityText}>Farmers' meeting scheduled for next week</p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div style={styles.floatingButtons}>
        <button style={styles.floatingBtnBlue}>
          <FaPlus size={20} color="white" />
        </button>
        <button style={styles.floatingBtnGreen}>
          <FaCommentAlt size={20} color="white" />
        </button>
      </div>

      {/* Footer with Functional Buttons */}
      <footer style={styles.footer}>
        <button style={styles.footerButton} onClick={handleOrderClick}>
          <FaShoppingCart style={styles.footerIcon} />
          <p>Order</p>
        </button>
        <button style={styles.footerButton} onClick={handleCommunityClick}>
          <FaUsers style={styles.footerIcon} />
          <p>Community</p>
        </button>
        <button style={styles.footerButton} onClick={handleVoiceAssistClick}>
          <FaMicrophone style={styles.footerIcon} />
          <p>Voice Assist</p>
        </button>
      </footer>

      {/* Updated Routes Component */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<DataAnalytics />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/tour" element={<FarmTour />} />
        <Route path="/practices" element={<FarmingPractices />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '0',
    margin: '0',
    position: 'relative'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '10px 20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5em',
    color: '#2c3e50',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  menuIcon: {
    fontSize: '1.5em',
  },
  pageTitle: {
    fontSize: '1.5em',
    margin: 0,
  },
  userIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImg: {
    borderRadius: '50%',
  },
  drawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '250px',
    height: '100%',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, visibility 0.3s ease',
  },
  drawerTitle: {
    fontSize: '1.5em',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  drawerList: {
    listStyle: 'none',
    padding: 0,
  },
  drawerLink: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1.2em',
    display: 'block',
    padding: '10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  drawerLinkHover: {
    backgroundColor: '#34495e', /* Slightly lighter shade for hover */
    color: '#ffffff', /* Change text color on hover */
  },
  drawerLinkActive: {
    backgroundColor: '#16a085', /* Highlight color for the active link */
    color: '#ffffff',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0.3s ease, opacity 0.3s ease',
    zIndex: 999,
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  searchInput: {
    width: '48%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  horizontalScroll: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    padding: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  scrollItem: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
  },
  categoryCard: {
    textAlign: 'center',
    width: '30%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  categoryImage: {
    width: '100%',
    height: 'auto',
  },
  categoryTitle: {
    padding: '10px',
    fontSize: '1.2em',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #ddd',
  },
  sectionTitle: {
    fontSize: '1.5em',
    margin: '20px',
  },
  recentActivityContainer: {
    padding: '20px',
  },
  activityCard: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '4px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  },
  activityText: {
    margin: 0,
  },
  floatingButtons: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  floatingBtnBlue: {
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  floatingBtnGreen: {
    backgroundColor: '#2ecc71',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 0',
    zIndex: 1000,
  },
  footerButton: {
    background: 'none',
    border: 'none',
    fontSize: '1em',
    color: '#2c3e50',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'color 0.3s ease',
  },
  footerIcon: {
    fontSize: '1.5em',
  },
};

export default FarmerHomePage;
