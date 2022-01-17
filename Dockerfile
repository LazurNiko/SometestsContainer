FROM cypress/included:3.2.0

WORKDIR /sometests

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN npx cypress run