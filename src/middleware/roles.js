// roles.js

const roles = {
    superadmin: {
      permissions: ['read', 'create', 'update', 'delete'],
    },
    admin: {
      permissions: ['read', 'update'],
    },
    user: {
      permissions: ['read'],
    },
  };
  
  module.exports = roles;
  