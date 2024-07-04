from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # Разрешаем CORS для всех маршрутов

def query_db(query, args=(), one=False):
    conn = sqlite3.connect('tariffs.db')
    cur = conn.cursor()
    cur.execute(query, args)
    rv = cur.fetchall()
    conn.close()
    return (rv[0] if rv else None) if one else rv

@app.route('/api/tariffs')
def get_tariffs():
    tariffs = query_db('SELECT * FROM tariffs')
    results = []
    for tariff in tariffs:
        results.append({
            'id': tariff[0],
            'name': tariff[1],
            'monthly_price': tariff[2],
            'after_break_price': tariff[3],
            'has_unlimited_line': tariff[4],
            'remote_consultation_hours': tariff[5],
            'service_engineer_hours': tariff[6],
            'info_bases_count': tariff[7],
            'cabinet_employee_service': tariff[8],
            'spark_risks_service': tariff[9]
        })
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
