export interface Ctgexam {
    id?: number;
    cpf: string; // pregnancy's CPF
    ts?: Date; // Timestamp of exam
    baseline_value: number; //FHR baseline (beats per minute)
    accelerations: number; //Number of accelerations per second
    fetal_movement: number; //Number of fetal movements per second
    uterine_contractions: number; //Number of uterine contractions per second
    light_decelerations: number; //Number of light decelerations per second
    severe_decelerations: number; //Number of severe decelerations per second
    prolongued_decelerations: number; //Number of prolonged decelerations per second
    abnormal_short_term_variability: number; //Percentage of time with abnormal short term variability
    mean_value_of_short_term_variability: number; //Mean value of short term variability
    percentage_of_time_with_abnormal_long_term_variability: number; //Percentage of time with abnormal long term variability
    mean_value_of_long_term_variability: number; //Mean value of long term variability
    histogram_width: number; //Width of FHR histogram
    histogram_min: number; //Minimum (low frequency) of FHR histogram
    histogram_max: number; //Maximum (high frequency) of FHR histogram
    histogram_number_of_peaks: number; //Number of histogram peaks
    histogram_number_of_zeroes: number; //Number of histogram zeros
    histogram_mode: number; //Histogram mode
    histogram_mean: number; //Histogram mean
    histogram_median: number; //Histogram median
    histogram_variance: number; //Histogram variance
    histogram_tendency: number; //Histogram tendency
    fetal_health?: number; //Target
}
