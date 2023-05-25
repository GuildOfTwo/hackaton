FROM python:3.10.6-slim

WORKDIR /app

COPY . .

RUN pip install --upgrade pip

RUN pip3 install -r requirements.txt --no-cache-dir

CMD ["gunicorn", "createdin.wsgi:application", "--bind", "0:8000" ] 