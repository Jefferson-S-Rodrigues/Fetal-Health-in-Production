
from pubsubkafka import PubSubKafka as PSK, get_result

if __name__ == '__main__':
    psk = PSK()

    for msg in psk.consumer:
        ctgexam = msg.value

        psk.send_autoexam(ctgexam)

        exam = get_result(ctgexam)
        # TODO save exam

        psk.send_reply(ctgexam, exam)
