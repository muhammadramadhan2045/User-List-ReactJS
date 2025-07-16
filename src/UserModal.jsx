import React from 'react';
import './UserModal.css';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>📌 Detail Pengguna</h2>
        
        <div className="form-group">
          <label>Nama:</label>
          <input 
            type="text" 
            value={user.name} 
            disabled 
            className="disabled-input"
          />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input 
            type="text" 
            value={user.username} 
            disabled 
            className="disabled-input"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={user.email} 
            disabled 
            className="disabled-input"
          />
        </div>

        <div className="form-group">
          <label>Telepon:</label>
          <input 
            type="tel" 
            value={user.phone} 
            disabled 
            className="disabled-input"
          />
        </div>

        <div className="form-group">
          <label>Website:</label>
          <input 
            type="url" 
            value={user.website} 
            disabled 
            className="disabled-input"
          />
        </div>

        <div className="form-group">
          <label>Alamat:</label>
          <textarea 
            disabled 
            className="disabled-input address-field"
            value={`${user.address.street}, ${user.address.suite}\n${user.address.city}, ${user.address.zipcode}`}
          />
        </div>

        <div className="form-group">
          <label>Perusahaan:</label>
          <input 
            type="text" 
            value={user.company.name} 
            disabled 
            className="disabled-input"
          />
        </div>

        <button className="modal-close" onClick={onClose}>
          Tutup
        </button>
      </div>
    </div>
  );
};

export default UserModal;