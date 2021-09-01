module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.gluvj.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'orgMgr'),
        username: env('DATABASE_USERNAME', 'your-username'),
        password: env('DATABASE_PASSWORD', 'your password'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
