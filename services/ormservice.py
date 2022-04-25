import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models import CTGExamModel

user = 'ctguser'
password = os.environ.get('MYSQL_PASSWORD')
host = 'dbmysqlexams'
port = '3306'

db_string = f"mysql+pymysql://{user}:{password}@{host}:{port}/ctg?charset=utf8mb4"

db = create_engine(db_string)

Session = sessionmaker(db)


def save(ctgexam: CTGExamModel):
    with Session.begin() as session:
        session.add(ctgexam)
        print(f'Save: {ctgexam}')
