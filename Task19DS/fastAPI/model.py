from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import fastAPI.utils as utils
import uvicorn
from scipy.sparse import load_npz
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

origins = [
    'http://host.docker.internal',
    'http://host.docker.internal:6578',
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

with open('model_req/item_to_id.pickle', 'rb') as handle:
    item_to_id = pickle.load(handle)

with open('datasets/user_to_id.pickle', 'rb') as handle:
    user_to_id = pickle.load(handle)
    
with open('model_requirements/id_to_group_id.pkl', 'rb') as handle:
    id_to_group_id= pickle.load(handle)

with open('model_requirements/id_to_kat.pkl', 'rb') as handle:
    id_to_kat = pickle.load(handle)
 
with open('model_requirements/count_vectorizer.pkl', 'rb') as handle:
    cv = pickle.load(handle)

similarity = load_npz("model_requirements/similarity.npz").toarray()
vector = load_npz("model_requirements/vector.npz").toarray()


@app.get('/hello')
async def hello():
    return {'response' : 'hello'}

@app.get("/recommend/{array}/{rec_num}", response_model=list[int])
async def recommend(array: str, rec_num: int):
    recommends = utils.model_predict(array, rec_num)
    
    return recommends

@app.get("/recommend_for_user/{user_id}/{rec_num}", response_model=list[int])
async def recommend(user_id: int, rec_num: int):
    recommends = utils.model_predict_for_user(user_id, rec_num)
    
    return recommends

@app.get("/find_similar/{user_text}", response_model=list[int])
async def find_similar(user_text: str):
    soul_list, brain_list, body_list = [], [], []
    
    new_vector = np.append(vector, cv.transform([user_text]).toarray(), axis=0)
    similarity = cosine_similarity(new_vector)
    
    distances = sorted(list(enumerate(similarity[-1])),reverse=True,key = lambda x: x[1])
    rec_list = [id_to_group_id[i[0]] for i in distances[1:1001]]

    for row in rec_list:
        if  id_to_kat[list(id_to_group_id.keys())[list(id_to_group_id.values()).index(row)]] == 'души':
            if len(soul_list) < 10:
                soul_list.append(row)
        elif id_to_kat[list(id_to_group_id.keys())[list(id_to_group_id.values()).index(row)]] == 'ума':
            if len(brain_list) < 10:
                brain_list.append(row)
        else:
            if len(body_list) < 10:
                body_list.append(row)
    
    return soul_list + brain_list + body_list


if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port='8000')