CREATE TABLE tariffs (
    id INTEGER PRIMARY KEY,
    name TEXT,
    monthly_price REAL,
    after_break_price REAL,
    has_unlimited_line BOOLEAN,
    remote_consultation_hours INTEGER,
    service_engineer_hours INTEGER,
    info_bases_count TEXT,
    cabinet_employee_service TEXT,
    spark_risks_service TEXT
);

INSERT INTO tariffs (
    name, monthly_price, after_break_price, has_unlimited_line,
    remote_consultation_hours, service_engineer_hours, info_bases_count,
    cabinet_employee_service, spark_risks_service
) VALUES 
('Минимальный', 4297, 5156, 1, 1, 1, 'Не ограничено', 'Приобретается дополнительно', 'Приобретается дополнительно'),
('Оптимальный', 6535, 7394, 1, 2, 1, 'Не ограничено', 'На 25 сотрудников', 'Приобретается дополнительно'),
('Сервисный', 8592, 9451, 1, 3, 2, 'Не ограничено', 'На 10 сотрудников', 'Приобретается дополнительно');
