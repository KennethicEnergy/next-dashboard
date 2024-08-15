import React, { useEffect, useState } from 'react';
import styles from './role-selection.module.scss';
import { motion } from 'framer-motion';
import { roles } from '@/services/constants';
import { FaCheckCircle } from "react-icons/fa";

type TProps = {
  handleChange: (value: string) => void;
  handleProceed: () => void;
};

const RoleSelection = ({ handleChange, handleProceed }: TProps) => {
  const [selectedRole, setSelectedRole] = useState('TENANT');

  const selectRole = (role: string) => {
    handleChange(role);
    setSelectedRole(role);
  };

  useEffect(() => {
		setTimeout(() => setSelectedRole("TENANT"), 500);
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.roleSelectTitle}>What is your Account type?</h1>
      <span className={styles.roleSelectSubTitle}>
        Choose the account type that suits your needs. Each has a different set of tools and features.
      </span>
      <div className={styles.options}>
        {roles.map((role, index) => (
          <motion.span
            key={index}
            className={styles.option}
            style={selectedRole === role.value ? { border: '1px solid #1485cf', color: '#1485cf' } : {}}
            whileTap={{ scale: 0.9 }}
            onClick={() => selectRole(role.value)}
          >
            {role.name}
            {selectedRole === role.value && <span className={styles.checkIcon}>
              <FaCheckCircle />
            </span>}
          </motion.span>
        ))}
      </div>
      <span>
        or continue as Guest
        <input
          type="checkbox"
          checked={selectedRole === 'GUEST'}
          onChange={() => selectRole(selectedRole === 'GUEST' ? '' : 'GUEST')}
        />
      </span>
      <motion.button whileTap={{ scale: 0.9 }} className={styles.proceed} onClick={handleProceed}>
        Proceed
      </motion.button>
    </div>
  );
};

export default RoleSelection;
