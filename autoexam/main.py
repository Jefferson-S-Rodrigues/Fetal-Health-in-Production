from util import from_dict, get_fields

from examanalyzer import ExamAnalyzer as EA
from pubsubkafka import PubSubKafka as PSK

if __name__ == '__main__':
    psk = PSK()
    ea = EA()

    for msg in psk.consumer:
        msgexam = msg.value

        ctgexam = dict([(k, msgexam[k]) for k in get_fields()])

        exam = from_dict(ctgexam)
        result = ea.analyser_exam(ctgexam=exam)

        psk.send_reply(msgexam, result[0])
