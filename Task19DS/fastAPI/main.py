from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
import pandas as pd
import numpy as np
from scipy import sparse
from sklearn.preprocessing import normalize

engine = create_engine('postgresql://postgres:1234@localhost:5432/task19')
scrobbles_df = pd.read_sql_query('select * from "scrobbles"',con=engine)

    
app = FastAPI()

origins = [
    'http://localhost',
    'http://localhost:7105',
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get("/")
async def root():
    return {"message": scrobbles_df.columns[0]}

@app.get("/{user_id}/{rec_num}")
async def fetch_data(user_id: int, rec_num: int):
    rows, r_pos = np.unique(scrobbles_df.values[:, 0], return_inverse=True)
    cols, c_pos = np.unique(scrobbles_df.values[:, 1], return_inverse=True)

    scrobbles_sparse = sparse.csr_matrix((scrobbles_df.values[:, 2], (r_pos, c_pos)))

    Pui = normalize(scrobbles_sparse, norm='l2', axis=1)
    scrobbles_sparse_transposed = scrobbles_sparse.transpose(copy=True)
    Piu = normalize(scrobbles_sparse_transposed, norm='l2', axis=1)
    fit = Pui * Piu * Pui
    
    user_id_index = np.where(rows == user_id)
    
    pred_set = list(list(cols)[i] for i in fit[np.where(rows == user_id)].toarray().argsort()[0][-rec_num:])
    return [801357282, 801367532]

