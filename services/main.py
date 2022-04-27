from models import CTGExamModel
from ormservice import save
from pubsubkafka import PubSubKafka as PSK, get_result

if __name__ == '__main__':
    psk = PSK()

    for msg in psk.consumer:
        ctgexam = msg.value

        psk.send_autoexam(ctgexam)

        exam = get_result(ctgexam)

        ctgsave = CTGExamModel(
            cpf=ctgexam['cpf'],
            tsexam=ctgexam['tsexam'],
            baselinevalue=ctgexam['baseline_value'],
            accelerations=ctgexam['accelerations'],
            fetalmovement=ctgexam['fetal_movement'],
            uterinecontractions=ctgexam['uterine_contractions'],
            lightdecelerations=ctgexam['light_decelerations'],
            severedecelerations=ctgexam['severe_decelerations'],
            prolongueddecelerations=ctgexam['prolongued_decelerations'],
            abnormalshortterm=ctgexam['abnormal_short_term_variability'],
            meanvalueofshortterm=ctgexam['mean_value_of_short_term_variability'],
            percentageoftimewith=ctgexam['percentage_of_time_with_abnormal_long_term_variability'],
            meanvalueoflongterm=ctgexam['mean_value_of_long_term_variability'],
            histogramwidth=ctgexam['histogram_width'],
            histogrammin=ctgexam['histogram_min'],
            histogrammax=ctgexam['histogram_max'],
            histogramnumberofpeaks=ctgexam['histogram_number_of_peaks'],
            histogramnumberofzeroes=ctgexam['histogram_number_of_zeroes'],
            histogrammode=ctgexam['histogram_mode'],
            histogrammean=ctgexam['histogram_mean'],
            histogrammedian=ctgexam['histogram_median'],
            histogramvariance=ctgexam['histogram_variance'],
            histogramtendency=ctgexam['histogram_tendency'],
            fetalhealth=exam['result']
        )
        save(ctgsave)

        psk.send_reply(ctgexam, exam)
