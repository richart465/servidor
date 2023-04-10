FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

WORKDIR /gorda

# volume
VOLUME /gorda

# copy the python requirements file
COPY ./requirements.txt /gorda/requirements.txt

# install the python requirements
RUN pip install -r requirements.txt

# copy the python app
COPY . /gorda

# Run the app
CMD ["uvicorn", "api.v1.app:app", "--host", "0.0.0.0", "--port", "80", "--env-file", ".env", "--reload"]