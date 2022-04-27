use ctg;

CREATE TABLE IF NOT EXISTS exam (
    exam_id INT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(12) NOT NULL,
    tsexam TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    baseline_value INT NOT NULL,
    accelerations FLOAT NOT NULL,
    fetal_movement FLOAT NOT NULL,
    uterine_contractions FLOAT NOT NULL,
    light_decelerations FLOAT NOT NULL,
    severe_decelerations FLOAT NOT NULL,
    prolongued_decelerations FLOAT NOT NULL,
    abnormal_short_term_variability INT NOT NULL,
    mean_value_of_short_term_variability FLOAT NOT NULL,
    percentage_of_time_with_abnormal_long_term_variability INT NOT NULL,
    mean_value_of_long_term_variability INT NOT NULL,
    histogram_width INT NOT NULL,
    histogram_min INT NOT NULL,
    histogram_max INT NOT NULL,
    histogram_number_of_peaks INT NOT NULL,
    histogram_number_of_zeroes INT NOT NULL,
    histogram_mode INT NOT NULL,
    histogram_mean INT NOT NULL,
    histogram_median INT NOT NULL,
    histogram_variance INT NOT NULL,
    histogram_tendency FLOAT NOT NULL,
    fetal_health INT
);