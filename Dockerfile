FROM cypress/included:3.2.0

WORKDIR /SometestsContainer

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN npx cypress run
EXPOSE 80/tcp