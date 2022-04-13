import uvicorn
from fastapi import FastAPI
from pydantic import ValidationError

from util import jsonc

from models import Gestante

app = FastAPI()


@app.get('/gestante/{cpf}')
async def getGestante(cpf: str):
    try:
        gestante = Gestante(cpf=cpf, nome='Fulana de Tal')
        return jsonc(gestante)
    except ValidationError as e:
        error = {
            "message": str(e)
        }
        return jsonc(error, cod=400)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
