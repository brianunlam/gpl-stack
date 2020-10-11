FROM keymetrics/pm2:12-alpine

# Bundle APP files
COPY src src/
COPY package.json .
COPY ecosystem.config.js .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Expose the listening port of your app
EXPOSE 8000
EXPOSE 9999

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "ecosystem.config.js"]