import pickle
import sklearn


class ExamAnalyzer:

    def __init__(self):
        self.model = pickle.load(open('model.sav', 'rb'))

    def analyser_exam(self, ctgexam):
        if "baseline_value" in ctgexam:
            ctgexam['baseline value'] = ctgexam.pop('baseline_value')
        return self.model.predict(ctgexam)
