import uvicorn
from fastapi import FastAPI
from pydantic import ValidationError
from fastapi.middleware.cors import CORSMiddleware

from util import jsonc

from models import Pregnancy, CTGExam

app = FastAPI()

origins = [
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
    try:
        ctg.id = 1
        ctg.fetal_health = 1
        return jsonc(ctg)
    except ValidationError as e:
        error = {
            "message": str(e)
        }
        return jsonc(error, cod=400)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
