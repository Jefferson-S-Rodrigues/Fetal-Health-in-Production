from pydantic import BaseModel, ValidationError, validator
from typing import Optional


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


class CTGExam(BaseModel):
    id: Optional[int] = None
    cpf: str
    baseline_value: int
    accelerations: float
    fetal_movement: float
    uterine_contractions: float
    light_decelerations: float
    severe_decelerations: float
    prolongued_decelerations: float
    abnormal_short_term_variability: float
    mean_value_of_short_term_variability: float
    percentage_of_time_with_abnormal_long_term_variability: float
    mean_value_of_long_term_variability: float
    histogram_width: float
    histogram_min: float
    histogram_max: float
    histogram_number_of_peaks: float
    histogram_number_of_zeroes: float
    histogram_mode: float
    histogram_mean: float
    histogram_median: float
    histogram_variance: float
    histogram_tendency: float

    fetal_health: Optional[int] = None

    @validator('cpf')
    def cpf_in_11_digits(cls, v):
        if len(v) == 11 and v.isdigit():
            return v
        raise ValidationError('CPF inválido')

    @validator('baseline_value',
               'accelerations',
               'fetal_movement',
               'uterine_contractions',
               'light_decelerations',
               'severe_decelerations',
               'prolongued_decelerations',
               'abnormal_short_term_variability',
               'mean_value_of_short_term_variability',
               'percentage_of_time_with_abnormal_long_term_variability',
               'mean_value_of_long_term_variability',
               'histogram_width',
               'histogram_min',
               'histogram_max',
               'histogram_number_of_peaks',
               'histogram_number_of_zeroes',
               'histogram_mode',
               'histogram_mean',
               'histogram_median',
               'histogram_variance')
    def values_0_more(cls, v):
        if v < 0:
            raise ValidationError('Não aceita valor menor que 0')
        return v

    @validator('histogram_tendency')
    def valid_histogram_tendency(cls, v):
        if v < -1 or v > 1:
            raise ValidationError('Não aceita valor fora do intervalo [-1, 1]')
        return v

    @validator('accelerations',
               'fetal_movement',
               'uterine_contractions',
               'light_decelerations',
               'severe_decelerations',
               'prolongued_decelerations')
    def values_max_1(cls, v):
        if v > 1:
            raise ValidationError('Não aceita valor maior que 1')
        return v

    @validator('baseline_value',
               'abnormal_short_term_variability',
               'mean_value_of_short_term_variability',
               'percentage_of_time_with_abnormal_long_term_variability',
               'mean_value_of_long_term_variability',
               'histogram_width',
               'histogram_min',
               'histogram_max',
               'histogram_number_of_peaks',
               'histogram_number_of_zeroes',
               'histogram_mode',
               'histogram_mean',
               'histogram_median',
               'histogram_variance')
    def values_max_500(cls, v):
        if v > 500:
            raise ValidationError('Não aceita valor maior que 500')
        return v