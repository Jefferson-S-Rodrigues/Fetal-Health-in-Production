from pydantic import BaseModel, ValidationError, validator


class Pregnancy(BaseModel):
    cpf: str
    name: str

    @validator('cpf')
    def cpf_in_11_digits(cls, v):
        if len(v) == 11 and v.isdigit():
            return v
        raise ValidationError('CPF inválido')

    @validator('name')
    def nome_valid(cls, v):
        if len(v) <= 3:
            raise ValidationError('Nome inválido')

        return v