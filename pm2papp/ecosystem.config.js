module.exports = {
  apps : [{
    name: "app",
    script: "./src/app.js",
    error_file: '/var/log/pm2papp/err.log',
    out_file: '/var/log/pm2papp/out.log',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}