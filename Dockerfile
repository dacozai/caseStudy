FROM python:3.8

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
COPY Pipfile ./
RUN pip install pipenv
RUN pipenv install
COPY . .
RUN yarn install

EXPOSE 8000
CMD ["python", "./serverManager/manage.py", "runserver", "0.0.0.0:8000"]
