from kafka import KafkaConsumer, KafkaProducer
from json import loads, dumps

addr_broker = ['broker:29092', 'localhost:9092']


def get_result(ctgexam):
    consumer_result = KafkaConsumer(f'{ctgexam["session"]}-autoexamresult',
                                    bootstrap_servers=addr_broker,
                                    auto_offset_reset='earliest',
                                    enable_auto_commit=True,
                                    value_deserializer=lambda m: loads(m.decode('utf-8'))
                                    )
    for reply in consumer_result:
        return reply.value


class PubSubKafka:
    topic_cons = 'toservices'
    topic_exam = 'autoexam'
    consumer_result = None
    consumer = KafkaConsumer(topic_cons,
                             bootstrap_servers=addr_broker,
                             auto_offset_reset='earliest',
                             enable_auto_commit=True,
                             value_deserializer=lambda m: loads(m.decode('utf-8')))
    producer = KafkaProducer(bootstrap_servers=addr_broker,
                             value_serializer=lambda v: dumps(v).encode('utf-8'))

    def send_autoexam(self, ctgexam):
        self.producer.send(self.topic_exam, ctgexam)

    def send_reply(self, ctgexam, result):
        event = {
            'session': ctgexam['session'],
            'cpf': ctgexam['cpf'],
            'result': result
        }

        self.producer.send(f'{ctgexam["session"]}-servicesresult', event)
