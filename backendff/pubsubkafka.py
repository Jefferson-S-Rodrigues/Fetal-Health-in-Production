from json import dumps, loads

from kafka import KafkaProducer, KafkaConsumer

addr_broker = ['broker:29092', 'localhost:9092']


def get_result(session):
    consumer_result = KafkaConsumer(f'{session}-servicesresult',
                                    bootstrap_servers=addr_broker,
                                    auto_offset_reset='earliest',
                                    enable_auto_commit=True,
                                    value_deserializer=lambda m: loads(m.decode('utf-8'))
                                    )
    for ctgresult in consumer_result:
        return ctgresult.value


class PubSubKafka:
    topic_cons = 'toservices'
    producer = KafkaProducer(bootstrap_servers=addr_broker,
                             value_serializer=lambda v: dumps(v).encode('utf-8'))

    def send_services(self, flag, ctgdata, session, tsexam=None):
        exam = {'flagcur': flag, 'session': session}
        if flag == "realize_exam":
            exam.update(ctgdata.dict())
            exam['tsexam'] = tsexam
        elif flag == "results":
            cpf = ctgdata
            if len(cpf) > 0:
                exam["cpf"] = cpf
        self.producer.send(self.topic_cons, exam)
