import React from 'react';
import { FaPlus, FaCommentAlt, FaShoppingCart, FaUsers, FaMicrophone } from 'react-icons/fa';

// Import the images at the top of your file
import machineImg from '../assets/machine.jpg';
import fertilizerImg from '../assets/fertilizer.jpg';
import pesticidesImg from '../assets/pesticides.jpg';

const FarmerHomePage = () => {
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
        <button style={styles.menuButton}>
          <span style={styles.menuIcon}>&#9776;</span>
        </button>
        <h1 style={styles.pageTitle}>Farmer Page</h1>
        <div style={styles.userIcon}>
          <img
            src="{https://via.placeholder.com/30}"
            alt="User"
            style={styles.profileImg}
          />
        </div>
      </header>

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
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  pageTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  userIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    borderRadius: '50%',
  },
  searchContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  searchInput: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  horizontalScroll: {
    display: 'flex',
    overflowX: 'scroll',
    padding: '20px',
    gap: '10px',
    backgroundColor: '#f9f9f9',
  },
  scrollItem: {
    minWidth: '200px',
    padding: '15px',
    backgroundColor: '#ddd',
    borderRadius: '8px',
    textAlign: 'center',
  },
  categoriesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  categoryCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  categoryTitle: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#333',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: '30px',
  },
  recentActivityContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  activityCard: {
    padding: '15px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  activityText: {
    fontSize: '16px',
    color: '#555',
  },
  floatingButtons: {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  floatingBtnBlue: {
    backgroundColor: '#00aaff',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
  },
  floatingBtnGreen: {
    backgroundColor: '#00cc66',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
  },
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 0',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.1)',
  },
  footerButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#666',
  },
  footerIcon: {
    fontSize: '20px',
    marginBottom: '5px',
  },
};

export default FarmerHomePage;
