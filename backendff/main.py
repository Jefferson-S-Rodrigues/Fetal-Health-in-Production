import uuid
from datetime import datetime

import uvicorn
from fastapi import FastAPI
from pydantic import ValidationError

from util import jsonc
from pubsubkafka import PubSubKafka as PSK, get_result

from models import Pregnancy, CTGExam

app = FastAPI()


@app.get('/gestante/{cpf}')
async def pregnancy(cpf: str):
    try:
        pregnancy = Pregnancy(cpf=cpf, name='Fulana de Tal da Silva')
        return jsonc(pregnancy)
    except ValidationError as e:
        error = {
            "message": str(e)
        }
        return jsonc(error, cod=400)


@app.post('/ctgexam')
async def exam(ctg: CTGExam):
    psk = PSK()
    session = str(uuid.uuid4())
    tsexam = str(datetime.now())
    try:
        psk.send_services(ctgexam=ctg, session=session, tsexam=tsexam)
        ctg.id = 1
        result = get_result(session=session)['result']
        ctg.fetal_health = result['result']
        print(f'FINAL: {ctg}')
        return jsonc(ctg)
    except ValidationError as e:
        error = {
            "message": str(e)
        }
        return jsonc(error, cod=400)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
