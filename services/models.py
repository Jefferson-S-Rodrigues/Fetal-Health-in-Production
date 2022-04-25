from sqlalchemy import Column, Integer, String, Float, DateTime, func, SmallInteger
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class CTGExamModel(Base):
    __tablename__ = 'exam'

    id = Column('exam_id', Integer(), primary_key=True)
    cpf = Column('cpf', String(12), nullable=False)
    tsexam = Column('tsexam', DateTime(timezone=True), default=func.now(), nullable=False)
    baselinevalue = Column('baseline_value', Integer(), nullable=False)
    accelerations = Column('accelerations', Float(), nullable=False)
    fetalmovement = Column('fetal_movement', Float(), nullable=False)
    uterinecontractions = Column('uterine_contractions', Float(), nullable=False)
    lightdecelerations = Column('light_decelerations', Float(), nullable=False)
    severedecelerations = Column('severe_decelerations', Float(), nullable=False)
    prolongueddecelerations = Column('prolongued_decelerations', Float(), nullable=False)
    abnormalshortterm = Column('abnormal_short_term_variability', Integer(), nullable=False)
    meanvalueofshortterm = Column('mean_value_of_short_term_variability', Float(), nullable=False)
    percentageoftimewith = Column('percentage_of_time_with_abnormal_long_term_variability', Integer(), nullable=False)
    meanvalueoflongterm = Column('mean_value_of_long_term_variability', Integer(), nullable=False)
    histogramwidth = Column('histogram_width', Integer(), nullable=False)
    histogrammin = Column('histogram_min', Integer(), nullable=False)
    histogrammax = Column('histogram_max', Integer(), nullable=False)
    histogramnumberofpeaks = Column('histogram_number_of_peaks', Integer(), nullable=False)
    histogramnumberofzeroes = Column('histogram_number_of_zeroes', Integer(), nullable=False)
    histogrammode = Column('histogram_mode', Integer(), nullable=False)
    histogrammean = Column('histogram_mean', Integer(), nullable=False)
    histogrammedian = Column('histogram_median', Integer(), nullable=False)
    histogramvariance = Column('histogram_variance', Integer(), nullable=False)
    histogramtendency = Column('histogram_tendency', Float(), nullable=False)
    fetalhealth = Column('fetal_health', SmallInteger(), nullable=True)

    def __repr__(self):
        return f"<CTG-Exam(CPF={self.cpf}, ts={str(self.tsexam)}, result={str(self.fetalhealth)})>"
