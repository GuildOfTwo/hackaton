FROM python:3.10-alpine

WORKDIR /app

COPY . .

RUN pip install --upgrade pip

RUN pip3 install -r requirements.txt --no-cache-dir

CMD ["gunicorn", "createdinß.wsgi:application", "--bind", "0:8000" ] 