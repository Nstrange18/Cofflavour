import React from 'react';
import '../styles/ServicesPage.css';
import ServiceCard from '../component/ServiceCard';
import { Icon } from '@iconify/react'; 

const ServicesPage = () => {
  return (
    <div className="services-page">
      <main className="services-main">
        <header className="services-header">
          <h1>Our Coffee Services</h1>
          <p>From our cozy cafe to your front door, we've got you covered.</p>
        </header>

        <div className="services-container">
          <ServiceCard
            description="Enjoy our artisan-roasted coffee and fresh pastries in a warm, welcoming atmosphere. The perfect place to relax or get work done."
            icon={<Icon icon="mdi:coffee-to-go" />}
          />
          <ServiceCard
            
            description="Never run out of your favorite beans again. Choose a plan and get fresh coffee delivered directly to your home or office."
            icon={<Icon icon="mdi:truck-fast-outline" />}
          />
          <ServiceCard
            description="Bring our full-service coffee bar to your next event. We cater to weddings, corporate meetings, and private parties."
            icon={<Icon icon="mdi:food-drumstick" />}
          />
        </div>

      </main>
    </div>
  );
};

export default ServicesPage;